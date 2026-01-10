"use client";

import { useState } from "react";
import AvatarWrap from "../avatar-wrap/AvatarWrap";
import style from "./modal.module.scss";
import { useSignOut } from "@/tanstack-query/useQuerys/users/useSelectUser";

interface Iprofile {
  name: string;
  email: string;
  avatar: string;
  modalRef: React.RefObject<HTMLDivElement | null>;
  onClick: () => void;
}

export default function ProfileModal({ name, email, avatar, modalRef, onClick }: Iprofile) {
  const [hover, setHover] = useState<"profile" | "logout" | null>(null);
  const signOut = useSignOut();

  return (
    <div ref={modalRef} className={style["profile-modal"]}>
      <div className={style["profile-wrap"]}>
        <div className={style.flex}>
          <AvatarWrap src={avatar} size="md" />
          <div>
            <p className="admin-bodyMd-b">{name}</p>
            <p className="admin-captionXs-r">{email}</p>
          </div>
        </div>
        <button
          type="button"
          onClick={onClick}
          onMouseEnter={() => setHover("profile")}
          onMouseLeave={() => setHover(null)}
          className={`${style.flex} ${style["modal-btn"]}`}
        >
          <img src={`/imgs/admin/icons/ic_profile${hover === "profile" ? `-hover` : ""}.svg`} alt="프로필로 이동" />
          <span>프로필</span>
        </button>
      </div>
      <button
        type="button"
        onClick={signOut}
        onMouseEnter={() => setHover("logout")}
        onMouseLeave={() => setHover(null)}
        className={`${style.flex} ${style["modal-btn"]}`}
      >
        <img src={`/imgs/admin/icons/ic_logout${hover === "logout" ? `-hover` : ""}.svg`} alt="로그아웃" />
        <span>로그아웃</span>
      </button>
    </div>
  );
}
