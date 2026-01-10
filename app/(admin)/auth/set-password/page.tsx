import SetPassword from "./(screen)/SetPassword";
import { ITokens } from "@/utils/propType";
import { redirect } from "next/navigation";

export default async function Page({ searchParams }: ITokens) {
  const { token_hash, type } = await searchParams;

  if (!token_hash || !type) {
    return redirect("/auth/login?redirect=invalid_token");
  }

  return <SetPassword token_hash={token_hash} type={type} />;
}
