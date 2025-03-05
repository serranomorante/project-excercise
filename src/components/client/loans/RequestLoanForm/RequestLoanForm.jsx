'use client'

import * as React from 'react'
import { Button } from "@design-system/buttons";
import { requestLoan } from "@/core/loans/loan.actions";
import { RequestLoanFormContent } from "./RequestLoanFormContent";
import { useNotificationContext } from "@/components/client/info/NotificationContext";
import { Box } from '@/design-system/layout';
import { Text } from '@/design-system/atoms';


/**
 * @param {object} props
 * @param {import('./RequestLoanForm.types').IRequestLoanFormFieldValues} props.initialState
 */
export function RequestLoanForm({ initialState }) {
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

  /**
   * @param {Partial<import('./RequestLoanForm.types').IRequestLoanFormFieldValues>} _
   * @param {FormData} formState
   */
  async function handleSubmit(_, formState) {
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
