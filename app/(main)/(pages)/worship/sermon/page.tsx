import PhotoBoard from "@/components/main/layouts/board/photo-board/PhotoBoard";
import { v4 as uuidv4 } from "uuid";
import SermonList from "./(list)/SermonList";
import { Suspense } from "react";

export const metadata = {
  title: "말씀영상",
};

interface YoutubeApiItem {
  id: { videoId: string };
  snippet: {
    publishedAt: string;
    title: string;
    thumbnails: { high: { url: string } };
  };
}

interface YoutubeVideo {
  created_at: string;
  updated_at: string;
  writer: string;
  title: string;
  video_id: string;
  youtube_URL: string;
  published_date: string;
  thumbnail: string;
}

const getYoutube = async () => {
  const data = await fetch("http://localhost:3000/api/getYoutube", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return await data.json();
};

const insertDB = async () => {
  const {
    result: { items, nextPageToken },
  }: { result: { items: YoutubeApiItem[]; nextPageToken?: string } } = await getYoutube();

  console.log(nextPageToken);

  const videos: YoutubeVideo[] = items.map(
    (t): YoutubeVideo => ({
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      writer: "c0e43662-9223-4488-b04a-b650c27e53e4",
      title: t.snippet.title,
      video_id: t.id.videoId,
      youtube_URL: `https://www.youtube.com/watch?v=${t.id.videoId}`,
      published_date: t.snippet.publishedAt,
      thumbnail: t.snippet.thumbnails.high.url,
    })
  );

  return await fetch(`http://localhost:3000/api/insert`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ videos }),
  });
};

export default async function Page() {
  return (
    <Suspense>
      <SermonList />
    </Suspense>
  );
}
