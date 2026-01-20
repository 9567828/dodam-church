"use client";

import { usePathname } from "next/navigation";
import style from "./board-detail.module.scss";
import BackBtn from "@/components/main/ui/back-btn/BackBtn";
import MoveBtn from "@/components/main/ui/move-btn/MoveBtn";
import { useHooks } from "@/hooks/useHooks";
import { formatDate } from "@/utils/formatDate";
import { AlbumRow, BoardDetailType, boardTables } from "@/utils/supabase/sql";
import { getAlbumImgURL } from "@/utils/supabase/sql/storage/storage";
import FullImg from "@/components/admin/ui/full-img/FullImg";
import { useRef, useState } from "react";
import { PrevNext } from "@/utils/supabase/sql/boards/select";

// interface IDetail {
//   detail: boardTables;
//   variant: "album" | "nomal";
//   prev?: PrevNext;
//   next?: PrevNext;
// }

interface IDetail {
  detail: BoardDetailType;
  variant: "album" | "nomal";
}

export default function BoardDetail({ detail, variant }: IDetail) {
  const { useRoute, useClearBodyScroll } = useHooks();
  const path = usePathname();
  const [openImg, setOpenImg] = useState(false);

  useClearBodyScroll(openImg);
  // "/"로 path 나누기
  const segments = path.split("/").filter(Boolean);
  // [id] path제외하고 path 합침
  const basePath = "/" + segments.slice(0, -1).join("/");
  const isAlbum = variant === "album";
  let albumUrl;

  if (isAlbum) {
    if ((detail as AlbumRow).src!) {
      const url = getAlbumImgURL((detail as AlbumRow).src!);

      albumUrl = url;
    }
  }

  return (
    <>
      <div className="inner">
        <BackBtn onClick={() => useRoute(basePath)} />
        <div className={style["board-wrap"]}>
          <div className={style.head}>
            <p className="bodyMd-m">{detail.title}</p>
            <p>{formatDate(detail.created_at!)}</p>
          </div>
          <div className={style.content}>
            {isAlbum ? (
              <div className={style["content-img"]} onClick={() => setOpenImg(true)}>
                <img src={albumUrl} alt={detail.title!} />
              </div>
            ) : (
              <p>{""}</p>
            )}
          </div>
          <div>
            <MoveBtn
              variant="prev"
              title={detail.prev === null ? "" : detail.prev.title}
              isNull={detail.prev === null}
              onClick={() => useRoute(`${basePath}/${detail.prev.id}`)}
            />
            <MoveBtn
              variant="next"
              title={detail.next === null ? "" : detail.next.title!}
              isNull={detail.next === null}
              onClick={() => useRoute(`${basePath}/${detail.next.id}`)}
            />
          </div>
        </div>
      </div>
      {openImg && <FullImg alt={detail.title!} img={albumUrl!} onClick={() => setOpenImg(false)} />}
    </>
  );
}
