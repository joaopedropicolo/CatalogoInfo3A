// Dentro do componente, crie a função `removerItemPedidos`.
// A função recebe um parâmetro `id`, que é o identificador do item a ser removido.
// Crie uma variável `listaAux` para armazenar a lista filtrada sem o item com o `id` fornecido.
// Utilize `setListaPedidos` para atualizar o estado com a nova lista filtrada.
// Exemplo: `setListaPedidos(listaAux);`

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

  const [listaPedido, setListaPedido] = useState([]);
  
  const adicionarItemPedidos = (objeto) => {
    setListaPedido([...listaPedido, objeto]);
  }

  const removerPedido = (id) => {
    let remover = false;
    let listaAux = listaPedido.filter((produto) => {
      if (remover === false) {
        if (produto.id !== id) {
          return true;
        } else {
          remover = true;
          return false;
        }
      } else {
        return true;
      }
    });
    setListaPedido(listaAux);
  };

  return (
    <div>
      <h1>Lanchonete Moura</h1>
      {listaProdutos.map((produto) => (
        <div key={produto.id}>
          <p>{produto.nome}</p>
          <img src={produto.imagem}></img>
          <p>R$ {produto.preco}</p>
          <button onClick={() => adicionarItemPedidos(produto)}>Selecionar</button>
        </div>
      ))}
      <h2>Pedidos</h2>
      {listaPedido.map((produto) => (
        <div key={produto.id}>
          <p>{produto.nome}</p>
          <img src={produto.imagem}></img>
          <p>R$ {produto.preco}</p>
          <button onClick={() => removerPedido(produto.id)}>Remover</button>
        </div>
      ))}
    </div>
  );
}
