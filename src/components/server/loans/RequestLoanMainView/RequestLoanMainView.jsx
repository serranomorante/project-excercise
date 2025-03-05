import { RequestLoanForm } from "@/components/client";
import { fetchUserDetail } from "@/core/user/user.actions";
import { Box } from "@/design-system/layout";
import { notFound } from "next/navigation";

/**
 * @param {object} props
 * @param {number} props.userId
 */
export async function RequestLoanMainView({ userId }) {
  const { data } = await fetchUserDetail({ userId })

  if (!data) notFound()

  return (
    <Box container>
      <RequestLoanForm initialState={/** @type {import("@/components/client").IRequestLoanFormFieldValues} */ (data)} />
    </Box>
  )
}
