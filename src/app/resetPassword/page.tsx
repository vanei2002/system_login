'use client'
import { useForm } from 'react-hook-form'
import './resetpassowrd.sass'
import { ButtonPage } from '@/components/ButtonPage/ButtonPage'
import { InputText } from '@/components/InputText/InputText'
import Link from 'next/link'
import { useState } from 'react'

export default function ResetPassord() {
  const { register, handleSubmit } = useForm()

  function onsubmit(data: object) {
    console.log(data)
  }

  const [reset, setReset] = useState<boolean>(true)
  const [tokenEmail, setTokenEmail] = useState<boolean>(false)

  return (
    <main id="container_reset">
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

      <section
        style={
          !reset && tokenEmail
            ? { paddingTop: '50px', display: '' }
            : { paddingTop: '50px', display: 'none' }
        }
        className="container-form"
      >
        <h1>Verificação de codigo</h1>

        <p>Enviamos um codigo de verificação para o seu email.</p>

        <form
          onSubmit={handleSubmit(() => {
            setTokenEmail(false)
          })}
        >
          <div>
            <InputText
              // eslint-disable-next-line react/no-children-prop
              children="Digite o codigo"
              name="Token_Resent"
              register={register}
              type="text"
              style="mb"
            />
          </div>

          <div className="style-button">
            <ButtonPage value="Enviar" type="submit" />
          </div>
        </form>
      </section>

      <section
        style={
          !tokenEmail && !reset
            ? { paddingTop: '50px', display: '' }
            : { paddingTop: '50px', display: 'none' }
        }
        className="container-form"
      >
        <h1>Hora de renovar sua Senha</h1>

        <p></p>

        <form onSubmit={handleSubmit(onsubmit)}>
          <div>
            <InputText
              // eslint-disable-next-line react/no-children-prop
              children="Digite sua nova senha"
              name="NewPassword"
              register={register}
              type="password"
              style="mb"
            />
            <InputText
              // eslint-disable-next-line react/no-children-prop
              children="Confirmar senha"
              name="ConfirmPassword"
              register={register}
              type="password"
            />
          </div>

          <div className="style-button">
            <ButtonPage value="Enviar" type="submit" />
          </div>
        </form>
      </section>
    </main>
  )
}
