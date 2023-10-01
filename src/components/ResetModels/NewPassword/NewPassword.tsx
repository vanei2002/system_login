'use client'
import { InputText } from '@/components/InputText/InputText'
import { useGlobalsContext } from '@/context/GlobalsContext'
import { useForm } from 'react-hook-form'
import { ButtonPage } from '@/components/ButtonPage/ButtonPage'
import './newpassword.sass'

export const NewPassword = () => {
  const { reset, tokenEmail } = useGlobalsContext()
  const { register, handleSubmit } = useForm()

  function onsubmit(data: object) {
    console.log(data)
  }

  return (
    <section
      style={
        !tokenEmail && !reset
          ? { paddingTop: '50px', display: '' }
          : { paddingTop: '50px', display: 'none' }
      }
      className="container-form"
    >
      <h1 className="Title-password">Hora de renovar sua Senha</h1>

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
  )
}
