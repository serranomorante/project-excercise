import { RequestLoanForm, RequestLoanSuccessModalProvider } from "@/components/client";
import { fetchUserDetail } from "@/core/user/user.actions";
import { Box } from "@/design-system/layout";
import { notFound } from "next/navigation";

interface IRequestLoanMainView {
  userId: number
}

export async function RequestLoanMainView({ userId }: IRequestLoanMainView) {
  const { data } = await fetchUserDetail({ userId })

  if (!data) notFound()

  return (
    <RequestLoanSuccessModalProvider>
      <Box container>
        <RequestLoanForm initialState={data} />
      </Box>
    </RequestLoanSuccessModalProvider>
  )
}
