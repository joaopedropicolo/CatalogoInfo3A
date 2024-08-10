// Crie um estado chamado `listaProdutos` para armazenar uma lista de objetos.
// Inicialize o estado com, no mínimo, 3 objetos, cada um contendo 3 propriedades, incluindo um `id` único.
// Lembre-se de importar o `useState` do módulo `react` para utilizar o estado.

import { useState } from "react";

export default function Home() {
    const [listaProdutos, setProduto] = useState([
        {
            id: 1,
            nome: "Lorem ipsum dolor sit amet.",
            imagem: "https://www.redbridgeanalytics.com/wp-content/uploads/2021/12/lorem-ipsum-alternatives-768x492.png",
            preco: 11
        },
        {
            id: 2,
            nome: "Lorem ipsum dolor sit amet.",
            imagem: "https://www.redbridgeanalytics.com/wp-content/uploads/2021/12/lorem-ipsum-alternatives-768x492.png",
            preco: 5
        },
        {
            id: 3,
            nome: "Lorem ipsum dolor sit amet.",
            imagem: "https://www.redbridgeanalytics.com/wp-content/uploads/2021/12/lorem-ipsum-alternatives-768x492.png",
            preco: 4
        }
    ]);

    return (
        <div>
            <h1>Lanchonete Moura</h1>
        </div>
    );
}