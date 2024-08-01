// Crie o estado `listaPedidos`.
// Dentro do componente, crie a função `adicionarItemPedidos`.
// A função recebe um parâmetro, que pode ser nomeado como `objeto`.
// Dentro da função, utilize `setListaPedidos` para adicionar o `objeto` à `listaPedidos`.
// Exemplo: `setListaPedidos([...listaPedidos, objeto]);`


import React, { useState } from "react"

export default function Home() {
  const [listaProdutos, setProdutos] = useState([
    { id: 1, nome: 'Produto A', preco: 'R$ 10,00' },
    { id: 2, nome: 'Produto B', preco: 'R$ 20,00' },
    { id: 3, nome: 'Produto C', preco: 'R$ 30,00' }
  ]);

  const [listaPedido, setListaPedido] = useState([])
  const adicionarItemPedidos = (objeto) => {
    setListaPedido([...listaPedido, objeto])
  }

  return (
    <div>
         <h1>Lanchonete Moura</h1>
         {
          listaProdutos.map((produto)=>
          <div key={produto.id}>
            <p>{produto.nome}</p>
            <p>{produto.preco}</p>
          </div>
          )
         }
    </div>
  );
}