'use client'

import * as React from 'react'
import { Button } from "@design-system/buttons";
import { requestLoan } from "@/core/loans/loan.actions";
import { RequestLoanFormContent } from "./RequestLoanFormContent";
import { IRequestLoanFormFieldValues } from "./RequestLoanForm.types";
import { useNotificationContext } from "@/components/client/info/NotificationContext";
import { Box } from '@/design-system/layout';
import { Text } from '@/design-system/atoms';

interface IRequestLoanFormProps {
  initialState: IRequestLoanFormFieldValues
}

export function RequestLoanForm({ initialState }: IRequestLoanFormProps) {
  const [state, action, isPending] = React.useActionState(handleSubmit, initialState)
  const { notify } = useNotificationContext()

  return (
    <Box variant='bordered'>
      <Text size="xl" weight="bold">Solicitud de préstamo</Text>
      <form action={action}>
        <RequestLoanFormContent initialValues={state} />
        <Button type="submit" fullWidth disabled={isPending}>
          <Text size='md' weight='semibold'>Enviar solicitud</Text>
        </Button>
      </form>
    </Box>
  )

  async function handleSubmit(_: IRequestLoanFormFieldValues, formState: FormData) {
    if (!formState) throw new Error('Invalid form state')

    const response = await requestLoan(formState)

    if (response.success) {
      notify({ message: 'Solicitud enviada con éxito', type: 'success' })
      return response.data
    }

    notify({ message: response.message ?? 'Unknown form error', type: 'error' })
    return response.data
  }
}
