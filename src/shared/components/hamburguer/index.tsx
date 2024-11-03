import { colors } from '@src/shared/themes/colors'
import { Dispatch, SetStateAction } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import styled from 'styled-components'

interface Props {
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>
}

export const Hamburguer = ({ setIsMenuOpen }: Props) => {
  const navigate = useNavigate()
  const location = useLocation()

  const { pathname } = location
  return (
    <HamburguerItems>
      <HamburguerDetail />
      <Section
        onClick={() => navigate('/products')}
        active={pathname.includes('/products')}
      >
        {'Products'}
      </Section>

      <Section
        onClick={() => navigate('/operations')}
        active={pathname.includes('/operations')}
      >
        {'Operations'}
      </Section>
    </HamburguerItems>
  )
}

const Section = styled.a<{ active: boolean }>`
  text-decoration: none;
  color: ${props => (props.active ? `${colors.pink}` : `${colors.white}`)};
  transition: 0.5s;
  cursor: pointer;
  :hover {
    color: ${colors.purple};
    transform: scale(1.1);
  }

  @media (max-width: 1000px) {
    font-size: 22px;
  }
`

const HamburguerItems = styled.div`
  transition: 1s;
  position: absolute;
  right: 30px;
  top: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid ${colors.white};
  border-radius: 4px;
  flex-direction: column;
  width: auto;
  padding: 15px 10px;
  row-gap: 10px;
  background-color: ${colors.black};
`

const HamburguerDetail = styled.div`
  position: absolute;
  top: -10px;
  right: -0px;
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 8px solid ${colors.white};
`
