import { colors } from '@themes/colors'
import { ReactNode } from 'react'
import styled from 'styled-components'
import { NavBar } from '@components/navBar'

type TemplateProps = {
  children: ReactNode
}

export const Template = ({ children }: TemplateProps) => {
  return (
    <Grid>
      <NavBar />
      <Content>{children}</Content>
    </Grid>
  )
}

const Grid = styled.div`
  display: grid;
  background-color: ${colors.black};
  grid-template-columns: 100%;
  grid-template-rows: 118px auto;
  grid-template-areas:
    'NB'
    'CT';
  @media (max-width: 1000px) {
    height: auto;

    grid-template-areas:
      'NB NB'
      'CT CT';
  }
  min-height: 100vh;
  height: 100vh;
`

const Content = styled.div`
  grid-area: CT;
  display: flex;
  flex-direction: column;
  grid-auto-flow: row;
  grid-auto-rows: 25%;
  grid-template-rows: unset;
  overflow: auto;
  overflow-x: hidden;
  grid-template-columns: unset;
`
