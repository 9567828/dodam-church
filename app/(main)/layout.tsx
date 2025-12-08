import "@/styles/main/global-style";
import Header from "@/components/main/layouts/header/Header";
import Footer from "@/components/main/layouts/footer/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
