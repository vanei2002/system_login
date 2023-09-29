import { useGlobalsContext } from '@/context/GlobalsContext'
import { Authpage } from '../Authgoogle/Authpage'
import './register.sass'
import { InputText } from '../InputText/InputText'
import { useState } from 'react'
import { ButtonPage } from '../ButtonPage/ButtonPage'

type NewUser = {
  name: string
  lastName: string
  email: string
  password: string
}

export const Register = () => {
  const { singInGoogle, setPageStates } = useGlobalsContext()

  const [name, setName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const backgroun =
    'linear-gradient(180deg, #4879F6 1.56%, rgba(72, 121, 246, 0.54) 63.54%)'

  function createNewUser() {
    if (!name && !password && !email && !lastName)
      return alert('Campos não preenchidos')

    const newUser: NewUser = {
      name,
      lastName,
      email,
      password,
    }

    console.log(newUser)
    alert(`Usuario cadastrado com sucesso: ${newUser.name} ${newUser.lastName}`)
  }

  return (
    <section id="container_register">
      <h1>Cadastro</h1>

      <div className="AuthSystem">
        <Authpage
          style="mtAuth"
          backgrounds="#4889F4"
          functionAuth={singInGoogle}
          images="./Google.svg"
          altImages="google"
          colorText="#fff"
          // eslint-disable-next-line react/no-children-prop
          children="Login com o Google"
        />
      </div>

      <div className="form">
        <div className="name-lats">
          <InputText
            // eslint-disable-next-line react/no-children-prop
            children="Name"
            name="user"
            onchange={setName}
            type="text"
            style="mb"
            backgrou="#4889F4"
          />{' '}
          <InputText
            // eslint-disable-next-line react/no-children-prop
            children="LastName"
            name="user"
            onchange={setLastName}
            type="text"
            style="mb"
            backgrou="#4889F4"
          />
        </div>
        <InputText
          // eslint-disable-next-line react/no-children-prop
          children="Email"
          name="email"
          onchange={setEmail}
          type="email"
          style="mb"
          backgrou="#4889F4"
        />

        <InputText
          // eslint-disable-next-line react/no-children-prop
          children="Password"
          name="password"
          onchange={setPassword}
          type="password"
          style="mb"
          backgrou="#4889F4"
        />

        <div className="links">
          <a href="#" onClick={() => setPageStates(true)}>
            Já tem cadastro ?
          </a>
        </div>
      </div>

      <div className="button">
        <ButtonPage
          value="Entrar"
          backgrou={backgroun}
          onclick={createNewUser}
        />
      </div>
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
