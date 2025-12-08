import MainInfo from "@/components/main/ui/ministry/main-info/MainInfo";
import MiddleImg from "@/components/main/ui/ministry/middle-img/MiddleImg";
import MainActivity, { IMainList } from "@/components/main/ui/ministry/main-activity/MainActivity";

interface IPower {
  activityList: IMainList[];
  pageTitle: string;
  pageIntro: string;
  mainSrc: string;
  imgURL: string;
}

export default function PowerPage({ activityList, pageTitle, pageIntro, mainSrc, imgURL }: IPower) {
  return (
    <>
      <MainInfo title={pageTitle} content={pageIntro} src={mainSrc} />
      <MiddleImg url={imgURL} />
      <MainActivity table={activityList} />
    </>
  );
}
