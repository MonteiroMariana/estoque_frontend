import { Navigate, Route, Routes as Routering } from 'react-router-dom'

import Operations from '@pages/operations'
import PrivateRoute from '@shared/components/privetRoute/inde'
import SignIn from '@src/pages/signIn'

import { Products } from '@src/pages/products'
import { ProductProvider } from '@src/shared/contexts/ProductContext'
import SignUp from '@src/pages/signUp'

const AppRoutes = () => {
  return (
    <ProductProvider>
      <Routering>
        <Route path="*" element={<Navigate to="/signin" />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/products"
          element={
            <PrivateRoute>
              <Products />
            </PrivateRoute>
          }
        />
        <Route
          path="/operations"
          element={
            <PrivateRoute>
              <Operations />
            </PrivateRoute>
          }
        />
      </Routering>
    </ProductProvider>
  )
}

export default AppRoutes
