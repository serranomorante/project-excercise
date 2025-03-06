/**
 * @import { TSearchParams } from '@/common'
 */
import { RequestLoanMainView } from "@/components/server/loans/RequestLoanMainView/RequestLoanMainView";
import { notFound } from "next/navigation";

/**
 * @param {object} props
 * @param {TSearchParams} props.searchParams
 */
export default async function Page({ searchParams }) {
  const { id } = await searchParams

  if (!id) notFound()

  return (
    <div>
      <RequestLoanMainView userId={+id} />
    </div>
  )
}
