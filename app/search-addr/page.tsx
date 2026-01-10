"use client";

import DaumPostcodeEmbed from "react-daum-postcode";

export default function Page() {
  const handleComplete = (data: any) => {
    const { address, zonecode } = data;

    window.opener.postMessage(
      {
        type: "ADDRESS_SELECT",
        payload: {
          address,
          zonecode,
        },
      },
      window.location.origin
    );

    window.close();
  };

  return <DaumPostcodeEmbed autoClose={false} onComplete={handleComplete} style={{ width: "100%", height: "600px" }} />;
}
