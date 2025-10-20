import PageTitle from "@/components/layouts/pageTitle/PageTitle";
import Board from "../../../../../components/layouts/board/Board";
import style from "./page.module.scss";

export default function Page() {
  return (
    <div>
      <PageTitle />
      <div className={style.section}>
        <Board />
      </div>
    </div>
  );
}
