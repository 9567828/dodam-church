import DaumPostcodeEmbed from "react-daum-postcode";
import style from "./modal.module.scss";

interface IDaumAddr {
  onComplete: (data: any) => void;
  onClose: () => void;
}

export default function DaumAddr({ onComplete, onClose }: IDaumAddr) {
  return (
    <div className={style["addr-wrap"]}>
      <div>
        <DaumPostcodeEmbed autoClose={true} onComplete={onComplete} />
      </div>
    </div>
  );
}
