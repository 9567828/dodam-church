import { redirect } from "next/navigation";

export default function Page() {
  return redirect("/admin/boards/albums?page=1&size=10&tab=all");
}
