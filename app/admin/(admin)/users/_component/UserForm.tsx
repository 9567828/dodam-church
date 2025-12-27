"use client";

import style from "./user.module.scss";
import FormLayout from "@/components/admin/layouts/form-layout/FormLayout";
import InnerLayout from "@/components/admin/layouts/inner-layout/InnerLayout";
import WhitePanel from "@/components/admin/layouts/white-panel/WhitePanel";
import ImgContainer from "@/components/admin/ui/img-container/ImgContainer";
import LabelInput from "@/components/admin/ui/input-box/LabelInput";
import { formRuls, FormValues } from "@/hooks/FormRules";
import { formatPhone } from "@/utils/formatPhone";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { UserFormType } from "@/utils/propType";
import Button from "@/components/admin/ui/button/Button";

interface IUserForm {
  mode: UserFormType;
}

export default function UserForm({ mode }: IUserForm) {
  const { usernameRule, phoneRule, emailRule, emptyRule } = formRuls();
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
    control,
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const { username, phone } = data;
    if (mode === "add") {
      console.log("add 일 때 동작");
    } else if (mode === "edit") {
      console.log("edit 일 때 동작");
    }
    console.log(data);
  };

  return (
    <InnerLayout mode="withFooter" title={mode === "add" ? "계정등록" : mode === "edit" ? "계정수정" : "계정상세"}>
      <FormLayout
        mode={mode}
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
              {...register("username", usernameRule)}
              errMsg={errors.username?.message}
              mode={mode}
              type="text"
              label="이름"
              isRequired={true}
              placeholder="이름을 입력하세요"
            />
            <Controller
              name="phone"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <LabelInput
                  id="phone"
                  {...field}
                  onChange={(e) => {
                    const formatted = formatPhone(e.target.value);
                    setValue("phone", formatted);
                  }}
                  errMsg={errors.phone?.message}
                  mode={mode}
                  type="text"
                  label="휴대전화"
                  isRequired={true}
                  placeholder="전화번호를 입력하세요"
                />
              )}
            />
          </div>
          <div>
            <LabelInput mode={mode} type="email" label="이메일" isRequired={true} placeholder="이메일을 입력해 주세요" />
            {mode === "add" && <Button type="button" variants="primary" visual="outline" btnName="초대발송" />}
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
