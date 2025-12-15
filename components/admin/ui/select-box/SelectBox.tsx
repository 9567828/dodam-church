import { useState } from "react";
import style from "./select.module.scss";

interface ISelect {
  variant: "number";
  optList: string[];
  value: string;
  onChange: (item: string) => void;
}

export default function SelectBox({ variant, optList, value, onChange }: ISelect) {
  const [open, setOpen] = useState(false);

  const handleSelect = (item: string) => {
    if (item) {
      onChange(item);
      setOpen(false);
    }
  };

  return (
    <div className={style["select-wrap"]}>
      <div className={`${style[variant]} ${open ? style.active : ""}`.trim()} onClick={() => setOpen((prev) => !prev)}>
        {value}
      </div>
      {open && (
        <ul className={style.option}>
          {optList.map((v, i) => (
            <li key={i} data-value={v} onClick={() => handleSelect(v)}>
              {v}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
