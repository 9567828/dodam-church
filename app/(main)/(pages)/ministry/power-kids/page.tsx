import PowerPage from "@/components/layouts/ministry/PowerPage";
import { makeActivity } from "@/components/ui/ministry/main-activity/MainActivity";
import { modifyfSchedule } from "@/components/ui/ministry/main-info/MainInfo";

export const metadata = {
  title: "파워키즈",
};

const baseURL = "/imgs/ministry/kids/";

const activityList = [
  makeActivity({
    title: "QT훈련",
    sub: "훈련",
    src: `${baseURL}qt.png`,
    info: "매일 말씀을 읽으며 말씀의 기쁨을 경헙합니다",
  }),
  makeActivity({
    title: "성경공부",
    sub: "훈련",
    src: `${baseURL}bible-learn.jpg`,
    info: "예배 후 소그룹별로 성경 이야기를 공부합니다",
  }),
  makeActivity({
    title: "학교 앞 전도",
    sub: "전도",
    src: `${baseURL}evangelism.jpg`,
    info: "친구들에게 하나님을 소개하고 복음을 전하는 사명에 순종합니다",
  }),
  makeActivity({
    title: "여름성경학교",
    sub: "성경학교",
    src: `${baseURL}bible-school.jpg`,
    info: "매년 여름 하나님의 말씀에 집중하는 시간을 갖습니다",
  }),
  makeActivity({
    title: "어린이임원단",
    sub: "리더십",
    src: `${baseURL}leadership.jpg`,
    info: "매주 예배와 공과 속에서 스스로 생각하고 섬기는 법을 배우며, 작은 일에도 책임을 다하는 어린이 리더로 성장합니다",
  }),
  makeActivity({
    title: "겨울성경학교",
    sub: "성경학교",
    src: `${baseURL}winter-bible.png`,
    info: "매년 겨울 하나님의 말씀에 집중하는 시간을 갖습니다",
  }),
];

export default function Page() {
  modifyfSchedule({ indexNum: 0, titleTxt: "매주일", subTxt: "오전 11시" });
  modifyfSchedule({ indexNum: 1, titleTxt: "3층 드림홀" });
  modifyfSchedule({ indexNum: 2, titleTxt: "", subTxt: "김하늘 전도사" });
  return (
    <PowerPage
      pageTitle="파워키즈"
      mainSrc="/imgs/ministry/kids/kids-main.jpg"
      pageIntro="동서울교회 파워키즈는 초등학교 1-6학년 어린이들이 함께 하나님을 예배하는 공동체입니다. 예수님의 사랑을 전하는 헌신된 교사들은 어린이들이 매일 더 예수님을 닮아가도록 돕고 있습니다."
      imgURL="/imgs/ministry/kids/kids-main.jpg"
      activityList={activityList}
    />
  );
}
