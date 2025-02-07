'use client'

import { Button } from '@nextui-org/react'
import { useFormStatus } from 'react-dom'

interface SubmitProps {
  label: string
}

const SubmitButton = ({ label, ...btnProps }: SubmitProps) => {
  const { pending } = useFormStatus()

  return (
    <Button {...btnProps} type="submit" isLoading={pending}>
      {label}
    </Button>
  )
}

export default SubmitButton
