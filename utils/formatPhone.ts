export const formatPhone = (raw: string) => {
  let rawNumber = raw.replace(/[^0-9]/g, "");
  let formattedNumber = rawNumber;

  if (rawNumber.length > 3 && rawNumber.length <= 7) {
    formattedNumber = rawNumber.replace(/(\d{3})(\d{1,4})/, "$1-$2");
  } else if (rawNumber.length > 7) {
    formattedNumber = rawNumber.replace(/(\d{3})(\d{4})(\d{1,4})/, "$1-$2-$3");
  }

  return formattedNumber;
};
