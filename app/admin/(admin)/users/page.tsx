"use client";

import PageHead from "@/components/admin/layouts/page-head/PageHead";

export default function Page() {
  return (
    <div>
      <PageHead title="계정목록" btnName="계정등록" icon="/imgs/admin/icons/ic_add.svg" onClick={() => console.log()} />
      <div className="white-panel">
        <h1>유저</h1>
      </div>
    </div>
  );
}
