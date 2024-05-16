import styled from "@emotion/styled/macro"

const componentes = {
    h1: 'h1',
    body: 'p'
}

const estilos = {
    h1: `
        font-weight: 600;
        font-size: 40px;
        line-height: 49px;
    `,
    body: `
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
    `
}

export const Tipografia = ({ variante, componente, children }) => {
    const tag = componentes[componente]
    const Componente = styled[tag]`${estilos[variante]}`

    return (
        <Componente>
            {children}
        </Componente>
    )
}