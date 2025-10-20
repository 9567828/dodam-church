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
      <Hero url="/imgs/home/hero-bg.png" title="제목입니다" subTxt="설명문입니다" />
      <About />
      <QucickBtnSection />
      <Youtube />
      <Gallery />
    </>
  );
}
