import { roleEum } from "@/utils/supabase/sql";
import WarningModal from "./WarningModal";

interface Iprops {
  role: roleEum;
  name: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function ChangeRoleModal({ name, role, onConfirm, onCancel }: Iprops) {
  const description =
    role === "super" ? "'super'로 변경시 모든 권한이 부여 됩니다." : "'admin'으로 변경시 게시물 관리만 가능합니다.";
  const infoText = `해당 유저를 '${role}'${role === "super" ? "로" : "으로"} 변경 하시겠습니까?\n${description}`;

  return (
    <WarningModal title={`유저 [${name}] 권한 변경`} infoText={infoText} onConfirm={onConfirm} onCancel={onCancel} />
  );
}
