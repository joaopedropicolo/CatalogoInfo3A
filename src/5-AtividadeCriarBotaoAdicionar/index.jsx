// Para cada objeto renderizado, adicione um botão.
// Utilize o atributo onClick para o botão.
// No valor do onClick, passe a função adicionarItemPedidos, 
// por exemplo: onClick={() => adicionarItemPedidos(produto)}
// No conteúdo do botão, coloque o texto "Selecionar" ou algo semelhante.

import React, { useState } from "react";

export default function Home() {
  const [listaProdutos, setProdutos] = useState([
    { id: 1, nome: 'Produto A', preco: 'R$ 10,00' },
    { id: 2, nome: 'Produto B', preco: 'R$ 20,00' },
    { id: 3, nome: 'Produto C', preco: 'R$ 30,00' }
  ]);

  const [listaPedido, setListaPedido] = useState([]);

  const adicionarItemPedidos = (objeto) => {
    setListaPedido([...listaPedido, objeto]);
  }

  return (
    <div>
      <h1>Lanchonete Moura</h1>
      {listaProdutos.map((produto) => (
        <div key={produto.id}>
          <p>{produto.nome}</p>
          <p>{produto.preco}</p>
          <button onClick={() => adicionarItemPedidos(produto)}>Selecionar</button>
        </div>
      ))}
    </div>
  );
}
