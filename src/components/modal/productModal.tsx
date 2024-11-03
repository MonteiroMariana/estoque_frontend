import React, { useState } from 'react'
import styled from 'styled-components'
import { Product } from '@src/shared/types/product'

interface EditProductModalProps {
  product: Product
  onClose: () => void
  productOperation: ({
    nome,
    descricao,
    imagem,
    valor,
    quantidade
  }: Product) => Promise<void>
}

const ProductModal: React.FC<EditProductModalProps> = ({
  product,
  onClose,
  productOperation
}) => {
  const [formData, setFormData] = useState<Product>(product)

  const handleSubmitForm = () => {
    productOperation(formData)
    onClose()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'number' ? Number(value) : value
    }))
  }

  return (
    <Overlay>
      <ModalContainer>
        <ModalHeader>
          <h3>Editar Produto</h3>
          <CloseButton onClick={onClose}>×</CloseButton>
        </ModalHeader>
        <form onSubmit={handleSubmitForm}>
          <Label>
            Nome
            <Input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
            />
          </Label>
          <Label>
            Descrição
            <Input
              type="text"
              name="descricao"
              value={formData.descricao}
              onChange={handleChange}
            />
          </Label>
          <Label>
            Quantidade
            <Input
              type="number"
              name="quantidade"
              value={formData.quantidade}
              onChange={handleChange}
            />
          </Label>
          <Label>
            Preço
            <Input
              type="number"
              name="valor"
              value={formData.valor}
              onChange={handleChange}
            />
          </Label>
          <SubmitButton type="submit">Salvar</SubmitButton>
        </form>
      </ModalContainer>
    </Overlay>
  )
}

export default ProductModal

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`

const ModalContainer = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  max-width: 400px;
  width: 100%;
`

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
`

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  border-radius: 4px;
  border: 1px solid #ccc;
`

const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`
