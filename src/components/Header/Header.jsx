import styled from "@emotion/styled"
import logoBranco from "../../assets/Assets Freelando/Logo branco.svg"

const StyledHeader = styled.header`
    display: flex;
    padding: 24px 120px;
    justify-content: space-between;
    background-color: ${props => props.theme.cores.primarias.a};

    p {
        font-weight: 400;
        size: 20px;
        color: #fff;
    }
`

export const Header = () => {
    return (
        <StyledHeader>
            <img src={logoBranco} alt="logo"/>
            <p>Login</p>
        </StyledHeader>
    )
}