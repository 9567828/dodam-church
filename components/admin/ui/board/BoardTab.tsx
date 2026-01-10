import { handlers } from "@/utils/handlers";
import style from "./board.module.scss";
import { useHooks } from "@/hooks/useHooks";
import { filterSortType } from "@/utils/supabase/sql/users/select";

export type tabStatusType = "all" | "active" | "inActive";

export interface ITab {
  id: tabStatusType;
  name: string;
}

interface ITabProps {
  list: ITab[];
  size?: number;
  tab: tabStatusType;
  filter: filterSortType;
}

export default function BoardTap({ list, size, tab, filter }: ITabProps) {
  const { handlePageSizeQuery } = handlers();
  const { useRoute } = useHooks();

  const handleTab = (id: tabStatusType) => {
    const query = handlePageSizeQuery("1", String(size), id, filter);
    useRoute(query);
  };

  return (
    <div className={style["tab-wrap"]}>
      {list.map((v, i) => (
        <button
          type="button"
          key={i}
          id={v.id}
          className={`${style["tab-btn"]} ${tab === v.id ? style.active : ""}`.trim()}
          onClick={() => handleTab(v.id)}
          // onClick={() => toggleTab(v.id)}
        >
          <span>{v.name}</span>
        </button>
      ))}
    </div>
  );
}
