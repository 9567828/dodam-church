import PageTitle from "@/components/main/layouts/pageTitle/PageTitle";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ paddingTop: "70px" }}>
      <PageTitle />
      <article>{children}</article>
    </div>
  );
}
