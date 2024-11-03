import { createContext, useContext, useState, ReactNode } from 'react'
import { Product } from '@shared/types/product'
import api from '../services/api'
import { toast } from 'react-toastify'

interface ProductContextData {
  products: Product[]
  fetchProducts(): Promise<void>
  createProduct({
    nome,
    descricao,
    imagem,
    valor,
    quantidade
  }: Product): Promise<void>
  updateProduct({
    nome,
    descricao,
    imagem,
    valor,
    quantidade
  }: Product): Promise<void>
  deleteProduct(id: number): Promise<void>
}

type ProductProviderProps = {
  children: ReactNode
}
const ProductContext = createContext({} as ProductContextData)

const useProductContext = () => useContext(ProductContext!)
function ProductProvider({ children }: ProductProviderProps) {
  const [products, setProducts] = useState<Product[]>([])

  async function fetchProducts() {
    try {
      const response = await api.get('/products')
      setProducts(response.data)
    } catch (err) {
      toast.error('Erro ao listar produtos')
    }
  }

  async function createProduct({
    nome,
    descricao,
    imagem,
    valor,
    quantidade
  }: Product) {
    try {
      const response = await api.post('/products', {
        nome,
        descricao,
        imagem: 'https://encurtador.com.br/uAmqM',
        valor,
        quantidade
      })
      fetchProducts()
      toast.success('Produto cadastrado com sucesso')
    } catch (err) {
      toast.error('Erro ao cadastrar produto')
    }
  }

  async function updateProduct(product: Product) {
    const { id, nome, descricao, imagem, valor, quantidade } = product
    try {
      const response = await api.put(`/products/${id}`, {
        nome,
        descricao,
        imagem,
        valor,
        quantidade
      })
      fetchProducts()
      toast.success('Produto editado com sucesso')
    } catch (err) {
      toast.error('Erro ao editar produto')
    }
  }

  async function deleteProduct(id: number) {
    try {
      const response = await api.delete(`/products/${id}`)
      fetchProducts()
      toast.success('Produto deletado com sucesso')
    } catch (err) {
      toast.error('Erro ao deletar produto')
    }
  }

  return (
    <ProductContext.Provider
      value={{
        products,
        fetchProducts,
        createProduct,
        updateProduct,
        deleteProduct
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}

export { useProductContext, ProductProvider }
