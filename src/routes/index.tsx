import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes'
import { Template } from '@shared/components/layout'
import { AuthProvider } from '@src/shared/contexts/AuthContext'


const Routes = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Template>
          <AppRoutes />
        </Template>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default Routes
