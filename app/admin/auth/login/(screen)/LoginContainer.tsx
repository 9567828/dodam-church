"use client";

import InputBox from "@/components/admin/ui/input-box/InputBox";
import style from "./login.module.scss";
import CheckBox from "@/components/admin/ui/check-box/CheckBox";
import Button from "@/components/admin/ui/button/Button";
import { useHooks } from "@/hooks/useHooks";
import { useEffect, useState } from "react";

export default function LoginContainer() {
  const [open, setOpen] = useState(false);
  const { useResize } = useHooks();
  const width = useResize();

  const isMob = width !== null && width <= 450;

  useEffect(() => {
    if (!isMob) {
      setOpen(false);
    }
  }, [width]);

  return (
    <div className={`${style.container} ${open ? style.open : ""}`.trim()}>
      {isMob ? (
        <div className={`${style["mob-wrap"]} ${open ? style.open : ""}`.trim()}>
          <div className={style.head}>
            <h1>관리자페이지</h1>
            <p>어서오세요🙌 관리자페이지 입니다</p>
          </div>
          {!open && <Button variants="trans" visual="none" btnName="로그인" onClick={() => setOpen(true)} />}
        </div>
      ) : null}
      <div className={`${style.wrapper} ${open ? style.open : ""}`.trim()}>
        <div className={style.head}>
          <h1>{!isMob ? "관리자페이지" : "로그인"}</h1>
          {!isMob && <p>어서오세요🙌 관리자페이지 입니다</p>}
        </div>
        <form className={style.form}>
          <div className={style["form-wrap"]}>
            <InputBox id="id" variants="login" type="text" placeholder="이메일 아이디를 입력하세요" />
            <InputBox id="password" variants="login" type="password" placeholder="비밀번호를 입력하세요" />
            <div className={style["login-set"]}>
              <CheckBox id="autoLogin" variants="login">
                <label htmlFor="autoLogin" className={style.label}>
                  자동로그인
                </label>
              </CheckBox>
              <button type="button" className={style["set-password"]}>
                비밀번호 재설정
              </button>
            </div>
            <Button type="submit" btnName="로그인" variants="login" visual="none" />
          </div>
        </form>
        <div className={`bodyMd-r ${style["info-wrap"]}`}>
          <h4>account info</h4>
          <p>계정을 분실한 경우 관리자에게 문의하세요</p>
        </div>
      </div>
    </div>
  );
}
