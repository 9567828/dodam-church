import InputBox from "@/components/ui/input-box/InputBox";
import style from "./register.module.scss";
import PrimaryBtn from "@/components/ui/primarybtn/PrimaryBtn";

export default function Register() {
  return (
    <div className={style.inner}>
      <form action="" className={style["form-wrap"]}>
        <InputBox type="text" label="이름" id="inputName" placeholder="이름을 입력하세요" />
        <InputBox type="text" label="직분" id="inputDuty" placeholder="직분을 입력하세요" />
        <InputBox type="tel" label="연락처" id="inputTel" placeholder="010-1234-1234" />
        <InputBox type="text" label="신청사역분야" id="inputKinds" placeholder="신청하시는 사역분야를 입력하세요" />
        <div>
          <div className={style["agree-wrap"]}>
            <h4 className="bodyMd-b">[개인정보 수집·이용 안내]</h4>
            <div className="bodyMd-r">
              <p> • 수집 목적: 문의 확인 및 답변 제공</p>
              <p> • 수집 항목: 이름, 연락처</p>
              <p> • 보유·이용 기간: 필요시 까지</p>
              <p className={style.text}>
                • 동의 거부권 및 불이익 안내:
                <span>
                  개인정보 수집·이용에 대한 동의에 거부 가능하며
                  <br />
                  미동의 시 문의 접수가 불가능 합니다.
                </span>
              </p>
            </div>
          </div>

          <InputBox variant="check-box" type="checkbox" id="inputCheck" addLabel="개인정보 수집 이용 동의" />
        </div>
        <PrimaryBtn type="submit" label="신청하기" />
      </form>
    </div>
  );
}
