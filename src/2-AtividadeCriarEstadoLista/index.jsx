// Crie um estado chamado `listaProdutos` para armazenar uma lista de objetos.
// Inicialize o estado com, no mínimo, 3 objetos, cada um contendo 3 propriedades, incluindo um `id` único.
// Lembre-se de importar o `useState` do módulo `react` para utilizar o estado.

import { useState } from "react";

const [listProduto, setProduto] = useState([
    {
    id: 1,
    produto: "Sabão",
    preco: 8
    },
    {
    id: 2,
    produto: "Alcool",
    preco: 5
    },
    {
    id: 3,
    produto: "Coca-Cola",
    preco: 4
    }
])

