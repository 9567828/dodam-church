import ScheduleDetailLayout from "@/components/layouts/ministry/schedule-detail-layout/ScheduleDetailLayout";
import ScheduleDetail from "@/components/ui/ministry/schedule-detail/ScheduleDetail";

export default function Page() {
  return (
    <div className="inner">
      <ScheduleDetailLayout>
        <ScheduleDetail iconSrc="/imgs/icons/ic_time.svg" alt="시간" title="매주일" sub="오전 11시" />
        <ScheduleDetail iconSrc="/imgs/icons/ic_map.svg" alt="장소" title="일요일" sub="11:00" />
        <ScheduleDetail iconSrc="/imgs/icons/ic_time.svg" alt="시간" title="일요일" sub="11:00" />
      </ScheduleDetailLayout>
    </div>
  );
}
