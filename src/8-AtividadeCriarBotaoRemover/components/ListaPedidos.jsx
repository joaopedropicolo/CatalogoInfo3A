export default function ListaPedidos ( {listaPedido, removerPedido} ){
    return(
        <div class="bloco-pedidos">
        <h1>Pedidos</h1>
        {listaPedido.map((produto) => (
          <div key={produto.id}>
            <p class="produto-nome">{produto.nome}</p>
            <img src={produto.imagem}></img>
            <p>R$ {produto.preco}</p>
            <button class="button-remover" onClick={() => removerPedido(produto.id)}>Remover</button>
          </div>
        ))}
      </div> 
    )
}