"use client";

import FormLayout from "@/components/admin/layouts/form-layout/FormLayout";
import InnerLayout from "@/components/admin/layouts/inner-layout/InnerLayout";
import WhitePanel from "@/components/admin/layouts/white-panel/WhitePanel";
import ImgContainer from "@/components/admin/ui/img-container/ImgContainer";
import LabelInput from "@/components/admin/ui/input-box/LabelInput";
import { FormEvent, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type FormValues = {
  username: string;
  phone: string;
  email: string;
  position: string;
  duty: string;
  addr?: string;
};

export default function Page() {
  const {
    handleSubmit,
    register,
    setFocus,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    console.log("클릭");
  };

  useEffect(() => {
    setFocus("username");
  }, [setFocus]);

  // const {} = register("username");

  return (
    <InnerLayout mode="withFooter" title="계정등록">
      <FormLayout
        mode="add"
        variants="grid"
        id="userAdd"
        onSubmit={handleSubmit(onSubmit)}
        onDelete={() => console.log("삭제")}
        onBack={() => console.log("뒤로가기")}
      >
        <WhitePanel variants="profile" title="기본정보">
          <div>
            <LabelInput
              id="username"
              {...register("username")}
              label="이름"
              isImport={true}
              mode="add"
              type="text"
              placeholder="이름을 입력하세요"
            />
            <LabelInput
              id="phone"
              {...register("phone")}
              label="휴대전화"
              isImport={true}
              mode="add"
              type="text"
              placeholder="전화번호를 입력하세요"
            />
          </div>
        </WhitePanel>
        <div>
          <WhitePanel variants="profile" title="이미지">
            <ImgContainer mode="default" variant="profile" />
          </WhitePanel>
        </div>
      </FormLayout>
    </InnerLayout>
  );
}
