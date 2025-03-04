import { RequestLoanForm, RequestLoanSuccessModalProvider } from "@/components/client";
import { IRequestLoanFormFieldValues } from "@/components/client/loans/RequestLoanForm/RequestLoanForm.types";
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
        <RequestLoanForm initialState={data as unknown as IRequestLoanFormFieldValues} />
      </Box>
    </RequestLoanSuccessModalProvider>
  )
}
