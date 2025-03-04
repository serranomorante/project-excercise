'use client'

import { TextInput } from "@design-system/inputs";
import { TextInputLabel } from "@design-system/inputs/TextInputLabel/TextInputLabel";
import { IRequestLoanFormFieldValues } from "./RequestLoanForm.types";
import { checkboxMain, main } from "./RequestLoanFormContent.css";
import { useFormStatus } from 'react-dom'
import { DollarSignIcon } from "../../common/DollarSignIcon";
import { Text } from "@/design-system/atoms";
import { TERMS_AND_CONDITIONS_URL } from "@/common";

interface IRequestLoanFormContentProps {
  initialValues?: Partial<IRequestLoanFormFieldValues>
}

export function RequestLoanFormContent({ initialValues }: IRequestLoanFormContentProps) {
  const { pending: isPending } = useFormStatus()

  return (
    <div className={main}>
      <TextInputLabel label="Nombre">
        <TextInput
          id="name"
          name="name"
          disabled={isPending}
          fullWidth
          minLength={3}
          required
          defaultValue={initialValues?.name} />
      </TextInputLabel>

      <TextInputLabel label="Apellidos">
        <TextInput
          id="surname"
          name="surname"
          disabled={isPending}
          fullWidth
          required
          minLength={3}
          defaultValue={initialValues?.surname} />
      </TextInputLabel>

      <TextInputLabel label="Email">
        <TextInput
          id="email"
          name="email"
          disabled={isPending}
          fullWidth
          type="email"
          minLength={3}
          required
          placeholder="Ingrese su correo"
          defaultValue={initialValues?.email} />
      </TextInputLabel>

      <TextInputLabel label="Teléfono">
        <TextInput
          id="phone"
          name="phone"
          disabled={isPending}
          fullWidth
          minLength={3}
          required
          placeholder="Ingrese su teléfono"
          defaultValue={initialValues?.phone} />
      </TextInputLabel>

      <TextInputLabel label="Edad">
        <TextInput
          type="number"
          id="age"
          name="age"
          disabled={isPending}
          fullWidth
          min={16}
          required
          placeholder="Ingrese su edad"
          defaultValue={initialValues?.age} />
      </TextInputLabel>

      <TextInputLabel label="Importe Préstamo">
        <TextInput
          type="number"
          id="loan_amount"
          name="loan_amount"
          disabled={isPending}
          fullWidth
          min={10}
          max={1000}
          placeholder="Ingrese el monto"
          required
          InputLeftAddon={<DollarSignIcon size={18} />}
          defaultValue={initialValues?.loan_amount} />
      </TextInputLabel>

      <TextInputLabel label="Fecha a conseguir el préstamo">
        <TextInput
          type="date"
          id="loan_date"
          name="loan_date"
          disabled={isPending}
          required
          min={new Date().toISOString().substring(0,10)}
          fullWidth
          defaultValue={initialValues?.loan_date} />
      </TextInputLabel>

      <TextInputLabel label="Tiempo a devolver (años)">
        <TextInput
          type="number"
          id="loan_weeks"
          name="loan_weeks"
          disabled={isPending}
          placeholder="Mínimo 1 año, máximo 20 años"
          min={1}
          max={20}
          required
          fullWidth
          defaultValue={initialValues?.loan_weeks} />
      </TextInputLabel>

      <div className={checkboxMain}>
        <Text>Aceptar <a href={TERMS_AND_CONDITIONS_URL} target="_blank">términos y condiciones</a></Text>
        <TextInput
          type="checkbox"
          id="check"
          name="check"
          disabled={isPending}
          fullWidth
          required
          defaultChecked={initialValues?.check} />
      </div>
    </div>
  )
}
