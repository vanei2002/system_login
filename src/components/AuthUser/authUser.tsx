import { useGlobalsContext } from '@/context/GlobalsContext'
import { Authpage } from '../Authgoogle/Authpage'
import { InputText } from '../InputText/InputText'
import { ButtonPage } from '../ButtonPage/ButtonPage'
import { useForm } from 'react-hook-form'
import Link from 'next/link'

import './authUser.sass'

export const AuthUserLogin = () => {
  const { singInGoogle, singInFacebook, setPageStates } = useGlobalsContext()

  const { register, handleSubmit } = useForm()

  const onSubmit = (data: object) => {
    console.log(data) // 'data' contém os valores de todos os campos de entrada
  }

  return (
    <section id="container_login">
      <h1>Login</h1>

      <div className="AuthSystem">
        <Authpage
          backgrounds="#4889F4"
          functionAuth={singInGoogle}
          images="./Google.svg"
          altImages="google"
          colorText="#fff"
          // eslint-disable-next-line react/no-children-prop
          children="Login com o Google"
        />

        <Authpage
          style="mtAuth"
          backgrounds="#F4F4F4  "
          functionAuth={singInFacebook}
          images="./facebook.svg"
          altImages="facebook"
          colorText="#4889F4"
          // eslint-disable-next-line react/no-children-prop
          children="Login com o Facebook"
        />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <InputText
          // eslint-disable-next-line react/no-children-prop
          children="User Name"
          name="User"
          type="text"
          style="mb"
          register={register}
        />
        <InputText
          // eslint-disable-next-line react/no-children-prop
          children="Password"
          name="Password"
          type="password"
          style="mb"
          register={register}
        />
        <div className="links">
          <Link href="/resetPassword">Esqueceu a senha</Link>
          <a href="#" onClick={() => setPageStates(false)}>
            Ainda não tem Cadastro
          </a>
        </div>
        <div className="button">
          <ButtonPage value="Entrar" type="submit" />
        </div>
      </form>
    </section>
  )
}

export const TextLogin = () => {
  return (
    <section id="text_login">
      <div>
        <h1>Bem-Vindo de Volta</h1>

        <p>
          Estamos felizes em vê-lo novamente em nossa plataforma. Continue a sua
          jornada conosco e descubra todas as novidades e recursos que temos
          para oferecer. Se precisar de ajuda, nossa equipe de suporte está à
          disposição para atendê-lo. Desejamos a você uma experiência incrível
        </p>
      </div>
    </section>
  )
}
