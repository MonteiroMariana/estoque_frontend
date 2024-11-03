// src/components/PrivateRoute.tsx
import { useAuthContext } from '@src/shared/contexts/AuthContext'
import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const { isAuthenticated } = useAuthContext()

  return isAuthenticated ? <>{children}</> : <Navigate to="/signin" replace />
}

export default PrivateRoute
