'use client'

import { InputText } from '@/components/InputText/InputText'
import { useGlobalsContext } from '@/context/GlobalsContext'
import { ButtonPage } from '@/components/ButtonPage/ButtonPage'
import { useForm } from 'react-hook-form'
import Link from 'next/link'
import './forgotpassword.sass'

export const ForgotPassword = () => {
  const { reset, setReset, setTokenEmail } = useGlobalsContext()
  const { register, handleSubmit } = useForm()

  return (
    <section
      style={reset ? { display: '' } : { display: 'none' }}
      className="container-form"
    >
      <h1>Esqueceu sua Senha ?</h1>

      <p>Fique tranquilo. Iremos te ajudar.</p>

      <form
        onSubmit={handleSubmit(() => {
          setReset(false)
          setTokenEmail(true)
        })}
      >
        <div>
          <InputText
            // eslint-disable-next-line react/no-children-prop
            children="Digite o seu nome de usuario"
            name="User"
            register={register}
            type="text"
            style="mb"
          />
          <InputText
            // eslint-disable-next-line react/no-children-prop
            children="Digite o seu email"
            name="Email"
            register={register}
            type="email"
          />
        </div>

        <div className="links">
          <Link href="/">Login</Link>
        </div>
        <div className="style-button">
          <ButtonPage value="Enviar" type="submit" />
        </div>
      </form>
    </section>
  )
}
