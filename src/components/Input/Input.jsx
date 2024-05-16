import styled from "@emotion/styled/macro"

const Label = styled.label`
    display: block;
    width: 100%;
    box-sizing: border-box;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
`

const StyedInput = styled.input`
    display: block;
    width: 100%;
    box-sizing: border-box;
    margin-top: ${props => props.theme.espacamentos.xs};
    background-color: #fff;
    border: 1px solid;
    border-color: ${props => props.theme.cores.neutras.a};
    border-radius: ${props => props.theme.espacamentos.s};
    height: 40px;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    padding: 0 1em;
`

export const Input = ({ titulo }) => {
    return (
        <Label>
            {titulo}
            <StyedInput />
        </Label>
    )
}