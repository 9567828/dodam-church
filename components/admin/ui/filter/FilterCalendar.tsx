import {
  drawMonth,
  drawWeeks,
  formatDateStr,
  formatTodayAm,
  getAfterDate,
  getThisEndDate,
  getThisFirstDate,
  getYesterday,
  handleNextMonth,
  handlePrevMonth,
  isBetween,
  today,
  todayStr,
} from "@/utils/drawCalendar";
import style from "./filter.module.scss";
import { useEffect, useState } from "react";
import { PeriodState } from "./FilterDate";
import { format, isSameDay, parseISO } from "date-fns";
import DatesInput from "../input-box/DatesInput";
import { filterDateType } from "@/utils/propType";

interface ICalendarProsp {
  onCancelPicker: () => void;
  period: PeriodState;
  isRange: boolean;
  applyRange: filterDateType;
  onDraftRange: (range: filterDateType) => void;
  onReset: () => void;
}

const WEEKS = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

const formatMonth = (year: number, month: number) => {
  const d = new Date(year, month);

  return d
    .toLocaleDateString("en-US", {
      month: "long",
    })
    .replace(/\s/g, "");
};

type SelectDate = { startDate: Date | null; endDate: Date | null; oneDate: Date | null };

const INITIAL_SELECT_DATE = {
  startDate: null,
  endDate: null,
  oneDate: null,
};

export default function FilterCalendar({ onCancelPicker, isRange, period, applyRange, onDraftRange, onReset }: ICalendarProsp) {
  const [year, setYear] = useState(today().getFullYear());
  const [month, setMonth] = useState(today().getMonth());
  const [selectDate, setSelectDate] = useState<SelectDate>({
    startDate: applyRange.startDate ? parseISO(applyRange.startDate) : null,
    endDate: applyRange.endDate ? parseISO(applyRange.endDate) : null,
    oneDate: null,
  });

  const { allWeeks } = drawMonth(year, month);
  const { start, end, getThisWeek } = drawWeeks();

  const handleCancel = () => {
    onCancelPicker();
    setSelectDate(INITIAL_SELECT_DATE);
    onReset();
  };

  useEffect(() => {
    const startDate = selectDate.startDate;
    const endDate = selectDate.endDate;

    if (startDate && endDate) {
      onDraftRange({ startDate: startDate.toISOString(), endDate: endDate.toISOString() });
      if (isSameDay(startDate, endDate)) {
        onDraftRange({ startDate: startDate.toISOString(), endDate: getAfterDate(endDate).toISOString() });
      }
    }
  }, [selectDate]);

  useEffect(() => {
    const hasActivePeriod = Object.values(period).some(Boolean);

    if (hasActivePeriod) {
      setYear(today().getFullYear());
      setMonth(today().getMonth());
    }

    if (period.today) {
      setSelectDate({ startDate: null, endDate: null, oneDate: formatTodayAm() });
      onDraftRange({ startDate: formatTodayAm().toISOString(), endDate: getAfterDate(formatTodayAm()).toISOString() });
    }

    if (period.yesterDay) {
      setSelectDate({ oneDate: getYesterday(), startDate: null, endDate: null });
      onDraftRange({ startDate: getYesterday().toISOString(), endDate: getAfterDate(getYesterday()).toISOString() });
    }

    if (period.thisWeek) {
      setSelectDate({ startDate: start, endDate: end, oneDate: null });
    }

    if (period.thisMonth) {
      setSelectDate({ startDate: getThisFirstDate(), endDate: getThisEndDate(), oneDate: null });
    }
  }, [period]);

  useEffect(() => {
    if (!isRange) {
    }
  }, [isRange]);

  const handleClickDate = (date: Date) => {
    setSelectDate((prev) => {
      if (prev.startDate && prev.endDate) {
        return {
          startDate: date,
          endDate: null,
          oneDate: null,
        };
      }

      if (prev.startDate && !prev.endDate) {
        const start = prev.startDate;
        const end = date;

        if (end < start) {
          return {
            startDate: end,
            endDate: start,
            oneDate: null,
          };
        }

        return {
          startDate: start,
          endDate: end,
          oneDate: null,
        };
      }

      return {
        startDate: date,
        endDate: null,
        oneDate: null,
      };
    });
  };

  return (
    <div>
      <DatesInput startDate={selectDate.startDate} endDate={selectDate.endDate} />
      <div className={style["cal-container"]}>
        <div>
          <div className={style["date-header"]}>
            <div className={style["header-meta"]}>
              <p>{formatMonth(year, month)}</p>
              <p>{year}</p>
            </div>

            <div className={style["btn-wrap"]}>
              <button
                type="button"
                className={style["move-btn"]}
                onClick={() => {
                  const prev = handlePrevMonth(year, month);
                  setYear(prev.year);
                  setMonth(prev.month);
                }}
              >
                <img src="/imgs/admin/icons/calendar/ic_Chevron-left.svg" alt="이전달" />
              </button>
              <button
                type="button"
                className={style["move-btn"]}
                onClick={() => {
                  const next = handleNextMonth(year, month);
                  setYear(next.year);
                  setMonth(next.month);
                }}
              >
                <img src="/imgs/admin/icons/calendar/ic_Chevron-right.svg" alt="다음달" />
              </button>
            </div>
          </div>
        </div>
        <div>
          <ul className={style["date-wrap"]}>
            {WEEKS.map((w) => (
              <li key={w} className={`${w === "sun" || w === "sat" ? style.weekend : ""}`.trim()}>
                <p>{w}</p>
              </li>
            ))}
          </ul>
          <div className={style["date-container"]}>
            {allWeeks.map((w, index) => (
              <ul key={index} className={style["date-wrap"]}>
                {w.map((d, i) => {
                  const date = d.getDate();
                  const weekend = d.getDay() === 0 || d.getDay() === 6;
                  const otherMonth = month !== d.getMonth();
                  const isThisMonth = formatTodayAm().getMonth() === d.getMonth();
                  const dateStr = format(d, "yyyy-MM-dd");
                  const isToday = todayStr() === dateStr;
                  const isYester = dateStr === format(getYesterday(), "yyyy-MM-dd");
                  const isThisWeek = getThisWeek().some((w) => formatDateStr(w) === dateStr);

                  const tday = period.today;
                  const yester = period.yesterDay;
                  const thisWeek = period.thisWeek;
                  const thisMonth = period.thisMonth;
                  const isStartM = formatDateStr(getThisFirstDate()) === dateStr;
                  const isEndM = formatDateStr(getThisEndDate()) === dateStr;
                  const isStartW = formatDateStr(start) === dateStr;
                  const isEndW = formatDateStr(end) === dateStr;

                  const isStartD = selectDate.startDate && isSameDay(d, selectDate.startDate);
                  const isEndD = selectDate.endDate && isSameDay(d, selectDate.endDate);

                  const isActive =
                    selectDate.startDate &&
                    selectDate.endDate &&
                    (isStartD || isEndD || isBetween(d, selectDate.startDate, selectDate.endDate));

                  return (
                    <li
                      key={i}
                      className={`${style.dates} ${weekend ? style.weekend : ""} ${otherMonth ? style.other : ""} ${
                        (tday && isToday) || (yester && isYester) ? style.active : ""
                      } ${(thisMonth && isThisMonth) || (thisWeek && isThisWeek) || isActive ? style.range : ""} ${
                        (thisMonth && isStartM) || (thisWeek && isStartW) || isStartD ? style.rangeStart : ""
                      } ${(thisMonth && isEndM) || (thisWeek && isEndW) || isEndD ? style.rangeEnd : ""}`.trim()}
                    >
                      <button
                        type="button"
                        id={d.toISOString()}
                        data-date={d}
                        onClick={() => handleClickDate(d)}
                        disabled={!isRange}
                        className={`${isToday ? style.today : ""}`.trim()}
                      >
                        <span>{date}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            ))}
          </div>
          <div className={style["sel-btn-wrap"]}>
            <button type="button" className={`${style["sel-btn"]} ${style.cancel}`} onClick={handleCancel}>
              선택해제
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
