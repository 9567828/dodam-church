import PowerPage from "@/components/main/layouts/ministry/PowerPage";
import { makeActivity } from "@/components/main/ui/ministry/main-activity/MainActivity";
import { modifyfSchedule } from "@/components/main/ui/ministry/main-info/MainInfo";

export const metadata = {
  title: "파워틴즈",
};

const baseURL = "/imgs/ministry/teens/";

const activityList = [
  makeActivity({
    title: "두드림 찬양팀",
    sub: "찬양",
    src: `${baseURL}dodream.jpg`,
    info: "두드림(DoDream) 꿈을 행하며, 악기를 두드리는 파워틴즈의 찬양팀으로 예배의 시작을 알리는 찬양을 담당",
  }),
  makeActivity({
    title: "공과모임",
    sub: "훈련",
    src: `${baseURL}group-school.png`,
    info: "예배 후 함께 모여 삶과 말씀을 더 깊이 나누는 시간",
  }),
  makeActivity({
    title: "단체 모임",
    sub: "공동체",
    src: `${baseURL}party.png`,
    info: "예배 후 단체로 모여 진행하는 프로그램을 통해 공동체성을 회복하는 시간",
  }),
  makeActivity({
    title: "하계수련회",
    sub: "성경학교",
    src: `${baseURL}bible-school.png`,
    info: "여름방학을 이용한 신앙의 회복과 공동체성의 회복을 위한 시간",
  }),
  makeActivity({
    title: "교제 모임",
    sub: "공동체",
    src: `${baseURL}teens-main.png`,
    info: "함께 웃고 나누며 마음을 여는 시간입니다. 친구와 신앙이 함께 자라는 따뜻한 공동체를 만들어갑니다.",
  }),
  makeActivity({
    title: "동계수련회",
    sub: "성경학교",
    src: `${baseURL}winter-school.jpg`,
    info: "겨울방학 기간동안 수련회를 통해 신앙의 회복을 위한 시간",
  }),
];

export default function Page() {
  modifyfSchedule({ indexNum: 0, titleTxt: "매주일", subTxt: "오전 9시 40분" });
  modifyfSchedule({ indexNum: 1, titleTxt: "믿음홀" });
  modifyfSchedule({ indexNum: 2, titleTxt: "", subTxt: "박소정 전도사" });
  return (
    <PowerPage
      pageTitle="파워틴즈"
      mainSrc={`${baseURL}group-school.png`}
      pageIntro="동서울교회 파워틴즈는 대한예수교 장로회 합동 교단에 소속된 교회의 중·고등부 공동체입니다. 중학생과 고등학생들이 함께 모여 예배하고, 말씀 안에서 성장하며 ‘예수님을 따라 세상 속에서 빛과 소금의 역할을 감당하는 청소년’이 되기 위하여 노력하는 공동체입니다."
      imgURL={`${baseURL}teens-middle.png`}
      activityList={activityList}
    />
  );
}
