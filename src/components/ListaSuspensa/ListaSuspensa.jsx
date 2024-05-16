import styled from "@emotion/styled/macro";
import { useState } from "react"


const StyledListaSuspensa = styled.button`
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


export const ListaSuspensa = ({ titulo, opcoes }) => {

    const [estaAberta, alternarVisibilidade] = useState(false);

    return (
        <label>
            {titulo}
            <StyledListaSuspensa onClick={() => alternarVisibilidade(!estaAberta)}>
                Selecione <span>{estaAberta ? '' : ''}</span>
            </StyledListaSuspensa>
            {estaAberta && <ul>
                {opcoes.map(opcao => (
                    <li key={opcao.value}>
                        {opcao.text}
                    </li>
                ))}    
            </ul>}
        </label>
    )
}