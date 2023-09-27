import './authUser.sass'

export const AuthUser = () => {
  return (
    <main id="system_login">
      <section id="container_login">
        <h1>Login</h1>

        <div className="form">
          <div className="username">
            <label htmlFor="">
              <input type="text" />
            </label>
          </div>
          <div className="password">
            <label htmlFor="">
              <input type="password" />
            </label>
          </div>

          <div>
            <p>Esqueceu a senha</p>
            <p>Ainda não tem Cadastro</p>
          </div>
        </div>

        <button>Entar</button>
      </section>

      <section className="text_login">
        <div>
          <h1>Bem-Vindo de Volta</h1>

          <p>
            Estamos felizes em vê-lo novamente em nossa plataforma. Continue a
            sua jornada conosco e descubra todas as novidades e recursos que
            temos para oferecer. Se precisar de ajuda, nossa equipe de suporte
            está à disposição para atendê-lo. Desejamos a você uma experiência
            incrível
          </p>
        </div>
      </section>
    </main>
  )
}
