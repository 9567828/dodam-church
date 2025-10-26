import Hero from "@/app/(main)/(home)/(hero)/Hero";
import About from "@/app/(main)/(home)/(about)/About";
import QucickBtnSection from "@/app/(main)/(home)/(quickbtn)/QuickBtnSection";
import Youtube from "@/app/(main)/(home)/(youtube)/Youtube";
import Gallery from "@/app/(main)/(home)/(gallery)/Gallery";

export const metadata = {
  title: "홈",
};

export default function Home() {
  return (
    <>
      <Hero url="/imgs/home/hero-bg.png" title="환영합니다" subTxt="예수님의 사랑이 머무는 자리, 동서울교회" />
      <About />
      <QucickBtnSection />
      <Youtube />
      <Gallery />
    </>
  );
}
