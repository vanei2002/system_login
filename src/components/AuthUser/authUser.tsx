import { useGlobalsContext } from '@/context/GlobalsContext'
import { Authpage } from '../Authgoogle/Authpage'
import './authUser.sass'
import { InputText } from '../InputText/InputText'
import { useState } from 'react'
import { ButtonPage } from '../ButtonPage/ButtonPage'

export const AuthUserLogin = () => {
  const { singInGoogle, singInFacebook, setPageStates } = useGlobalsContext()

  const [user, setUser] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  function validateUser() {
    if (!user && !password) return alert('Campos não preenchidos')

    alert(`Usuario ${user} e senha ${password}`)
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

      <div className="form">
        <InputText
          // eslint-disable-next-line react/no-children-prop
          children="User Name"
          name="user"
          onchange={setUser}
          type="text"
          style="mb"
        />

        <InputText
          // eslint-disable-next-line react/no-children-prop
          children="Password"
          name="password"
          onchange={setPassword}
          type="password"
          style="mb"
        />

        <div className="links">
          <a href="#">Esqueceu a senha</a>
          <a href="#" onClick={() => setPageStates(false)}>
            Ainda não tem Cadastro
          </a>
        </div>
      </div>

      <div className="button">
        <ButtonPage value="Entrar" onclick={validateUser} />
      </div>
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
