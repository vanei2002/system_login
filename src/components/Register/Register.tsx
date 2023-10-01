import { useGlobalsContext } from '@/context/GlobalsContext'
import { Authpage } from '../Authgoogle/Authpage'
import { ButtonPage } from '../ButtonPage/ButtonPage'
import { useForm } from 'react-hook-form'
import { InputText } from '../InputText/InputText'

import './register.sass'

export const Register = () => {
  const { registerInGoogle, setPageStates } = useGlobalsContext()

  const backgroun =
    'linear-gradient(180deg, #4879F6 1.56%, rgba(72, 121, 246, 0.54) 63.54%)'

  const { register, handleSubmit } = useForm()

  const onSubmit = (data: object) => {
    console.log(data) // 'data' contém os valores de todos os campos de entrada
  }

  return (
    <section id="container_register">
      <h1>Cadastro</h1>

      <div className="AuthSystem">
        <Authpage
          style="mtAuth"
          backgrounds="#4889F4"
          functionAuth={registerInGoogle}
          images="./Google.svg"
          altImages="google"
          colorText="#fff"
          // eslint-disable-next-line react/no-children-prop
          children="Login com o Google"
        />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <div className="name-lats">
          <InputText
            // eslint-disable-next-line react/no-children-prop
            children="Name"
            name="Name"
            type="text"
            style="mb"
            backgrou="#4889F4"
            register={register}
          />
          <InputText
            // eslint-disable-next-line react/no-children-prop
            children="LastName"
            name="LastName"
            type="text"
            style="mb"
            backgrou="#4889F4"
            register={register}
          />
        </div>
        <InputText
          // eslint-disable-next-line react/no-children-prop
          children="Email"
          name="Email"
          type="email"
          style="mb"
          backgrou="#4889F4"
          register={register}
        />

        <InputText
          // eslint-disable-next-line react/no-children-prop
          children="Password"
          name="Password"
          type="password"
          style="mb"
          backgrou="#4889F4"
          register={register}
        />

        <div className="links">
          <a href="#" onClick={() => setPageStates(true)}>
            Já tem cadastro ?
          </a>
        </div>

        <div className="button">
          <ButtonPage value="Entrar" backgrou={backgroun} type="submit" />
        </div>
      </form>
    </section>
  )
}

export const TextRegister = () => {
  return (
    <section id="text_register">
      <div>
        <h1>Faça Parte da Nossa Família</h1>

        <p>
          Estamos emocionados por você estar prestes a se tornar parte de nossa
          comunidade online. Aqui, você não é apenas um usuário, mas sim um
          membro valioso da nossa família virtual. Seu cadastro nos ajudará a
          crescer juntos e criar experiências únicas. Estamos ansiosos para
          compartilhar esta jornada com você. Seja bem-vindo à nossa família
        </p>
      </div>
    </section>
  )
}
