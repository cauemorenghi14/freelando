import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import SelecaoCliente from "../pages/cadastro/SelecaoCliente";
import LayoutBase from "../pages/cadastro/LayoutBase";

export const router = createBrowserRouter ([
    {
        path: "/",
        children: [
            {
                path: "/home",
                element: <Home />
            },
            {
                path: "cadastro",
                element: <LayoutBase />,
                children: [
                    {
                        path: '',
                        element: <SelecaoCliente />
                    },
                    {
                        path: "cliente",
                        element: <h1>Cadastro 1</h1>
                    },
                    {
                        path: "dados-pessoais",
                        element: <h1>Dados pessoais</h1>
                    }, 
                    {
                        path: "concluido",
                        element: <h1>Concluído</h1>
                    }
                ]
            }
        ]
    }
])