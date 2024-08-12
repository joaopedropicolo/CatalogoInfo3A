export default function ListaProdutos ( {listaProdutos, adicionarItemPedidos } ){
    return(
      <div className="bloco-produtos">
      {listaProdutos.map((produto) => <div key={produto.id}>
        <p class="produto-nome">{produto.nome}</p>
        <img src={produto.imagem}></img>
        <p>{produto.item}</p>
        <p>R$ {produto.preco},00</p>
        <button class="button-adicionar" onClick={() => adicionarItemPedidos(produto)}>Comprar</button>
      </div>
      )}
    </div>
    )
}