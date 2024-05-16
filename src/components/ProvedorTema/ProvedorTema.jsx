import { ThemeProvider } from "@emotion/react"

const tema = {
    cores: {
        primarias: {
            a: '',
            b: '',
            c: ''
        },
        secundaria: {
            a: '',
            b: '',
            c: ''
        },
        dark: {
            a: '',
            b: '',
            c: ''
        },
        neutro: {
            a: '',
            b: '',
            c: ''
        }
    }
}

export const ProvedorTema = ({ children }) => {
    return <ThemeProvider theme={tema}>
        {children}
    </ThemeProvider>
}