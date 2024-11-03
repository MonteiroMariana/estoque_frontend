import React, { useEffect, useState } from 'react'
import { Grid } from '@src/components/dataGrid'
import { Product } from '@src/shared/types/product'
import { MdModeEditOutline } from 'react-icons/md'
import { BiTrash } from 'react-icons/bi'

import styled from 'styled-components'
import { useProductContext } from '@src/shared/contexts/ProductContext'
import ProductModal from '@src/components/modal/productModal'

export const Products: React.FC = () => {
  const newProduct: Product = {
    quantidade: 0,
    nome: '',
    descricao: '',
    valor: '',
    imagem: ''
  }
  const {
    products,
    deleteProduct,
    updateProduct,
    createProduct,
    fetchProducts
  } = useProductContext()
  const [currentProduct, setCurrentProduct] = useState<Product>(newProduct)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)

  const handleEditProduct = (product: Product) => {
    setCurrentProduct(product)

    setIsEditModalOpen(true)
  }

  const handleCreateProduct = () => {
    setIsCreateModalOpen(true)
  }
  useEffect(() => {
    fetchProducts()
  }, [])

  const columns = [
    {
      sortable: true,
      name: 'ID',
      selector: (row: Product) => row.id
    },
    {
      sortable: true,
      name: 'Nome Produto',
      selector: (row: Product) => row.nome
    },
    {
      sortable: true,
      name: 'Descrição',
      selector: (row: Product) => row.descricao
    },
    {
      sortable: true,
      name: 'Quantidade',
      selector: (row: Product) => row.quantidade
    },
    {
      sortable: true,
      name: 'Preço',
      selector: (row: Product) => row.valor
    },
    {
      cell: (row: Product) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <MdModeEditOutline
            cursor={'pointer'}
            size={20}
            onClick={() => handleEditProduct(row)}
          />
        </div>
      )
    },
    {
      cell: (row: Product) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <BiTrash
            cursor={'pointer'}
            size={20}
            onClick={() => deleteProduct(row.id!)}
          />
        </div>
      )
    }
  ]

  return (
    <Container>
      <Title>Lista de Produtos</Title>
      <AddButton onClick={() => handleCreateProduct()}>
        Adicionar Produto
      </AddButton>

      <Grid columns={columns} data={products} />
      {isEditModalOpen && (
        <ProductModal
          onClose={() => setIsEditModalOpen(false)}
          product={currentProduct!}
          productOperation={updateProduct}
        />
      )}
      {isCreateModalOpen && (
        <ProductModal
          onClose={() => setIsCreateModalOpen(false)}
          product={currentProduct!}
          productOperation={createProduct}
        />
      )}
    </Container>
  )
}
const Container = styled.div`
  margin: 0 auto;
  padding: 20px;
`

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
`

const Button = styled.button`
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #218838;
  }
`

const AddButton = styled(Button)`
  margin-bottom: 20px;
  background-color: #007bff;

  &:hover {
    background-color: #0069d9;
  }
`
