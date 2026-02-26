import MiddleImg from "@/components/main/ui/ministry/middle-img/MiddleImg";
import Title from "@/components/main/ui/ministry/title/Title";
import YouthfulActivity from "@/components/main/ui/ministry/youthful/YouthfulActivity";
import PhotoList from "./(photo-list)/PhotoList";

export const metadata = {
  title: "유스풀 청년부",
};

const baseURL = "/imgs/ministry/youthful/";

export default function Page() {
  return (
    <>
      <Title
        isYouthful={true}
        variant="center"
        title="유스풀 청년부"
        content={`도담교회 유스풀 청년부는 대학예수교 장로회 합동 교단에 소속된 교회의 청년 교구입니다.
          20세~결혼 전 청년들이 함께 모여 예배하며 건강한 공동체를 이루고 있습니다.
          ‘크리스찬 젊은이 다운’ 모습으로 함께 연합하며 하나님 말씀으로 건강하게 중심 잡힌 청년부입니다.`}
      />
      <MiddleImg url={`${baseURL}youthful-group.png`} isYoutful={true} />
      <YouthfulActivity />
      <PhotoList />
    </>
  );
}
