import SelectBox from "../select-box/SelectBox";
import style from "./board.module.scss";

const pageCnt = ["6", "12", "24", "48", "100"];

interface ISelectPage {
  value: string;
  onChange: (item: string) => void;
}

export default function SelectPageCnt({ value, onChange }: ISelectPage) {
  return (
    <div className={style["page-cnt-wrap"]}>
      <p>표시개수:</p>
      <SelectBox variant="number" optList={pageCnt} value={value ? value : pageCnt[0]} onChange={onChange} />
    </div>
  );
}
