'use client'
import { InputText } from '@/components/InputText/InputText'
import { useGlobalsContext } from '@/context/GlobalsContext'
import { useForm } from 'react-hook-form'
import { ButtonPage } from '@/components/ButtonPage/ButtonPage'

export const SendCode = () => {
  const { reset, tokenEmail, setTokenEmail } = useGlobalsContext()
  const { register, handleSubmit } = useForm()

  return (
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
  )
}
