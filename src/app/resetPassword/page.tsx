'use client'
import { ForgotPassword } from '@/components/ResetModels/ForgotPassword/ForgotPassword'
import './resetpassowrd.sass'
import { SendCode } from '@/components/ResetModels/sendCode/SendCode'
import { NewPassword } from '@/components/ResetModels/NewPassword/NewPassword'

export default function ResetPassord() {
  return (
    <main id="container_reset">
      <ForgotPassword />
      <SendCode />
      <NewPassword />
    </main>
  )
}
