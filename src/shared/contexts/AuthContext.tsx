// src/shared/contexts/AuthContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react'
import api from '../services/api'
import { useNavigate } from 'react-router-dom'
import { SignInCredentials, SignUpCredentials } from '../types/user'
import { toast } from 'react-toastify'

interface AuthContextData {
  isAuthenticated: boolean
  login({ email, senha }: SignInCredentials): Promise<void>
  signUp({ email, senha, nome }: SignUpCredentials): Promise<void>
  logout: () => void
}

type AuthProviderProps = {
  children: ReactNode
}

const AuthContext = createContext({} as AuthContextData)

const useAuthContext = () => useContext(AuthContext)

function AuthProvider({ children }: AuthProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const navigate = useNavigate()

  async function login({ email, senha }: SignInCredentials) {
    try {
      const response = await api.post(`/login`, {
        email,
        senha
      })

      toast.success('Logado com sucess')
      setIsAuthenticated(true)
      navigate('/products')
    } catch (err) {
      toast.error('Erro ao realizar login')
    }
  }
  async function signUp({ email, senha, nome }: SignUpCredentials) {
    try {
      const response = await api.post(`/usuarios`, {
        email,
        senha,
        nome
      })

      toast.success('Cadastrado com sucess')

      navigate('/signin')
    } catch (err) {
      toast.error('Erro ao cadastrar')
    }
  }

  const logout = () => setIsAuthenticated(false)

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, signUp }}>
      {children}
    </AuthContext.Provider>
  )
}

export { useAuthContext, AuthProvider }
