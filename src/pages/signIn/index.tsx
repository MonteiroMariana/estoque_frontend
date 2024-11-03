import { useContext, useState, ChangeEvent, FormEvent } from 'react'
import styled from 'styled-components'

import { Input } from '@components/ui/Input'
import { Button } from '@components/ui/Button'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { SignInCredentials } from '@src/shared/types/user'
import { SVGs } from '@src/assets'
import { useAuthContext } from '@src/shared/contexts/AuthContext'

export default function SignIn() {
  const { logoImg } = SVGs
  const { login } = useAuthContext()
  const [loading, setLoading] = useState(false)

  const [credentials, setCredentials] = useState<SignInCredentials>({
    email: '',
    senha: ''
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setCredentials({ ...credentials, [name]: value })
  }

  async function handleSignIn(event: FormEvent) {
    event.preventDefault()
    const { email, senha } = credentials

    // Validação básica
    if (!email || !senha) {
      toast.warning('Preencha todos os campos!')
      return
    }

    setLoading(true)
    try {
      await login({ email, senha })
      toast.success('Login realizado com sucesso!')
    } catch (error) {
      toast.error('Erro ao realizar login. Tente novamente!')
    } finally {
      setLoading(false)
    }
  }

  return (
    <ContainerCenter>
      <ToastContainer />
      <img src={logoImg} width={'20%'} alt="Logo Estoque Show" />
      <LoginContainer>
        <h1>Faça login na sua conta</h1>
        <form onSubmit={handleSignIn}>
          <Input
            placeholder="Digite seu email"
            type="text"
            name="email"
            value={credentials.email}
            onChange={handleChange}
          />
          <Input
            placeholder="Sua Senha"
            type="password"
            name="senha"
            value={credentials.senha}
            onChange={handleChange}
          />
          <Button type="submit" loading={loading}>
            Entrar
          </Button>
        </form>
        <StyledLink href="/signup">
          Não possui uma conta? Cadastre-se!
        </StyledLink>
      </LoginContainer>
    </ContainerCenter>
  )
}

export const ContainerCenter = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #1a1a1a;
`

export const LoginContainer = styled.div`
  margin-top: 2rem;
  width: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2rem 1.5rem;
  background-color: #2d2d2d;
  border-radius: 8px;

  h1 {
    color: #ffffff;
    padding-bottom: 1rem;
  }

  form {
    width: 90%;
    display: flex;
    flex-direction: column;

    button {
      height: 40px;
      font-size: 1.2rem;
      margin-top: 1rem;
    }
  }

  @media (max-width: 620px) {
    width: 90%;
  }
`

export const StyledLink = styled.a`
  margin-top: 1rem;
  color: #ffffff;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`
