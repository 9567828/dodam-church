import { ISearchParams } from "@/utils/propType";
import LoginContainer from "./(screen)/LoginContainer";

export default async function Page({ searchParams }: ISearchParams) {
  const { redirect } = await searchParams;
  let resaon = "";

  if (redirect === "invalid_token") {
    resaon = "invalid_token";
  }

  return <LoginContainer reason={resaon} />;
}
