import styled from "@emotion/styled"

const CardDiv = styled.div`
  background-color: ${props => props.theme.cores.secundarias.a};
  border: solid 1px ${props => props.theme.cores.primarias.a};
  border-radius: ${props => props.theme.espacamentos.l};
  padding: 32px;
  gap: 32px;
  display: flex;
`

export const Card = ({ children }) => {
  return (
    <CardDiv>
      {children}
    </CardDiv>
  )
}