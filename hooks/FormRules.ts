export type FormValues = {
  username: string;
  phone: string;
  email: string;
  position: string;
  duty: string;
  addr?: string;
};

export const formRuls = () => {
  const usernameRule = {
    required: { value: true, message: "이름을 입력하세요" },
    pattern: {
      value: /^[가-힣a-zA-Z]+$/,
      message: "한글 또는 영문만 입력 가능 합니다.",
    },
  };

  const phoneRule = {
    required: { value: true, message: "전화번호를 입력하세요" },
    pattern: {
      value: /^010-\d{4}-\d{4}$/,
      message: "휴대전화번호만 입력 가능 합니다",
    },
  };

  const emailRule = {
    required: { value: true, message: "이메일을 입력해 주세요" },
    pattern: {
      value: /^[a-z0-9\.\-_]+@([a-z0-9\-]+\.)+[a-z]{2,6}$/,
      message: "이메일 형식으로 입력해 주세요",
    },
  };

  const emptyRule = {
    required: { value: true, message: "공란 입니다" },
  };

  return { usernameRule, phoneRule, emailRule, emptyRule };
};
