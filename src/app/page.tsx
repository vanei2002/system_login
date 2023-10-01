'use client'
import { AuthUserLogin, TextLogin } from '@/components/AuthUser/authUser'
import './app.sass'
import { Register, TextRegister } from '@/components/Register/Register'
import { useGlobalsContext } from '@/context/GlobalsContext'

export default function SystemLogin() {
  const { pageStates } = useGlobalsContext()
  return (
    <main id="system">
      <section id={pageStates ? `` : `leftPage`}>
        {pageStates ? <AuthUserLogin /> : <TextRegister />}
      </section>
      <section id={pageStates ? `rigthPage` : ``}>
        {pageStates ? <TextLogin /> : <Register />}
      </section>
    </main>
  )
}
