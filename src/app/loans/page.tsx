import { TSearchParams } from "@/common";
import { RequestLoanMainView } from "@/components/server/loans/RequestLoanMainView/RequestLoanMainView";
import { notFound } from "next/navigation";

interface IPageProps {
  searchParams: TSearchParams
}

export default async function Page({ searchParams }: IPageProps) {
  const { id } = await searchParams

  if (!id) notFound()

  return (
    <div>
      <RequestLoanMainView userId={+id} />
    </div>
  )
}
