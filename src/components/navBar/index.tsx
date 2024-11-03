import useWindowSize from '@src/shared/hooks/getWindowSize'
import { colors } from '@src/shared/themes/colors'
import { useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import styled from 'styled-components'
import { Hamburguer } from '../../shared/components/hamburguer'
import { useNavigate, useLocation } from 'react-router-dom'

export const NavBar = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const { pathname } = location
  const size = useWindowSize()
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  return (
    <Container>
      <Logo>
        <LogoTitle size={35} color={colors.white}>
          Product
        </LogoTitle>
        <LogoTitle size={35} color={colors.pink}>
          .show
        </LogoTitle>
      </Logo>
      <Sections>
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
      </Sections>

      {size.width < 1000 && (
        <HamburguerMenuArea>
          <RxHamburgerMenu
            color={colors.white}
            size={22}
            onClick={() => setIsMenuOpen(state => !state)}
          />
        </HamburguerMenuArea>
      )}
      {isMenuOpen && size.width < 1000 && (
        <Hamburguer setIsMenuOpen={setIsMenuOpen} />
      )}
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-area: NB;
  background-color: ${colors.black};
  z-index: 2;
  display: flex;
  align-items: center;
  padding: 0px 30px;
  justify-content: space-between;
  width: 100%;
  height: 100%;

  @media (max-width: 1000px) {
    background-color: #0a4f4f;
    z-index: 2;
    height: 70px;
    align-items: center;
    background-color: ${colors.black};
    width: 100%;
    position: fixed;
    top: 0;
  }
`

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: fit-content;
`

const LogoTitle = styled.label<{ color: string; size: number }>`
  text-decoration: none;
  color: ${({ color }) => color};
  font-size: ${({ size }) => size}px;
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    color: ${colors.purple};
    transform: scale(1.1);
  }
`

const Sections = styled.div`
  display: flex;
  column-gap: 20px;
  font-family: 'Dosis', sans-serif;
  :hover {
    transform: scale(1.2);
    box-shadow: 0px 0px 10px 0px ${colors.pink};
  }
  @media (max-width: 999px) {
    display: none;
  }
`

const Section = styled.a<{ active: boolean }>`
  text-decoration: none;
  color: ${props => (props.active ? `${colors.pink}` : `${colors.white}`)};
  transition: 0.5s;
  height: 50px;
  width: 100px;
  border-radius: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.black};
  cursor: pointer;

  @media (max-width: 1000px) {
    font-size: 22px;
  }
`

const HamburguerMenuArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 10px 0px;
`
