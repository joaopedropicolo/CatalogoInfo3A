// Crie o estado `listaPedidos`.
// Dentro do componente, crie a função `adicionarItemPedidos`.
// A função recebe um parâmetro, que pode ser nomeado como `objeto`.
// Dentro da função, utilize `setListaPedidos` para adicionar o `objeto` à `listaPedidos`.
// Exemplo: `setListaPedidos([...listaPedidos, objeto]);`

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
])

const [listaPedido, setPedido] = useState([])
const adicionarItemPedidos = (objeto) => {
    setListaPedido([...listaPedido, objeto])
}

  return (
    <div>
         <h1 class="h1-titulo">Lorem ipsum dolor sit amet.</h1>
         {
          listaProdutos.map((produto)=>
          <div key={produto.id}>
            <p class="produto-nome">{produto.nome}</p>
            <img src={produto.imagem}></img>
            <p>R$ {produto.preco}</p>
          </div>
          )
         }
    </div>
  );
}