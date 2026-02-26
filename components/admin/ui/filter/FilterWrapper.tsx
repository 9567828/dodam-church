import React, { useEffect, useRef } from "react";
import ModalHead from "../modal/layout/ModalHead";
import style from "./filter.module.scss";
import { useHooks } from "@/hooks/useHooks";

export default function FilterWrapper({ onClose, children }: { onClose: () => void; children: React.ReactNode }) {
  const { useOnClickOutSide, useClearBodyScroll } = useHooks();
  const containerRef = useRef<HTMLDivElement | null>(null);
  useOnClickOutSide(containerRef, onClose);

  return (
    <div className={style.dim}>
      <div className={style.container} ref={containerRef}>
        <ModalHead fontType="admin-bodySm-b" title="Filter" variant="wide" onClose={onClose} />
        <div className={style["content-container"]}>{children}</div>
      </div>
    </div>
  );
}
