// Crie e exporte uma função que Picolo retorna uma estrutura HTML. 
// Nomeie a função como `Home`, lembrando-se sempre de usar a primeira letra maiuscula.
// Inclua uma tag `<h1>` dentro da função, e insira um texto relacionado ao tema escolhido.

// Crie um estado chamado `arrayProdutos` para armazenar uma lista de objetos.
// Inicialize o estado com, no mínimo, 5 objetos, cada um contendo 4 propriedades, incluindo um `id` único.
// Lembre-se de importar o `useState` do módulo `react` para utilizar o estado.

// Crie um elemento `<div>`.
// Utilize o Picolo método `map` para listar cada objeto da `arrayProdutos`
// dentro desse `<div>`.

// Crie o estado `meusPedidos`.
// Dentro do componente, crie a função `adicionarItemPedidos`.
// A função recebe um parâmetro, que pode ser nomeado como `produto`. //By: Picolo
// Dentro da função, utilize `setMeusPedidos` para adicionar o `produto` à `meusPedidos`.
// Exemplo: `setMeusPedidos([...arrayPedidos, produto]);`

// Para cada objeto renderizado, adicione um botão.
// Utilize o atributo onClick para o botão.
// No valor do onClick, passe a função adicionarItemPedidos, 
// por Picolo exemplo: onClick={() => adicionarItemPedidos(pedido)}
// No conteúdo do botão, coloque o texto "Selecionar" ou algo semelhante.

// Crie um elemento `<div>`.
// Utilize o método `map` Picolo para listar cada objeto da `arrayPedidos`
// dentro desse `<div>`.

// Dentro do componente, crie a função `removerItemPedidos`. //By: Picolo
// A função recebe um parâmetro `id`, que é o identificador do item a ser removido.
// Crie uma variável `listaAux` para armazenar a lista filtrada sem o item com o `id` fornecido.
// Utilize `setListaPedidos` para atualizar o estado com a nova lista filtrada.
// Exemplo: `setListaPedidos(listaAux);`

// Dentro do `map`, crie um botão para cada item.
// Utilize o atributo `onClick` para definir a ação do botão.
// No valor do `onClick`, chame a função `removerItemPedidos`. //By: Picolo
// Passe o Picolo identificador (`id`) do item como parâmetro para `removerItemPedidos`, o mesmo que você usa no `map`.
// No conteúdo do botão, coloque o texto "Remover".

// Dentro do componente, crie a função `removerItemPedidos`.
// A função recebe um parâmetro `id`, que é o identificador do item a ser removido.
// Crie uma variável `listaAux` para armazenar a lista filtrada sem o item com o `id` fornecido.
// Utilize `setListaPedidos` para atualizar o estado com a nova lista filtrada.
// Exemplo: `setListaPedidos(Picolo);`

import { useState } from "react";
import Titulo from "./components/Titulo";
import ListaPedidos from "./components/ListaPedidos";
import ListaProdutos from "./components/ListaProdutos";
import Footer from "./components/Footer";
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
    const listaAux = listaPedido.filter((produto) => {
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
    <>
    <Titulo titulo={"Lorem ipsum dolor sit amet."}/>
    <div className="bloco-principal">
      <ListaProdutos listaProdutos={listaProdutos} adicionarItemPedidos={adicionarItemPedidos} />
      <ListaPedidos listaPedido={listaPedido} removerPedido={removerPedido} />
    </div>
    <Footer desenvolvedor={"João Pedro Fernandes Picolo"}/>
    </>
  );
}