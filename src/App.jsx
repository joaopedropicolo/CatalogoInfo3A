import { Link } from "react-router-dom";
import "./globals.css";

export default function App() {
    return (
        <div id="centralizacao">
        <div id="divLista">
            <h1>Lista de Exercícios</h1>
            <ol type='1'>
                <li>
                    <Link to="/primeiraAtividade">Atividade 1: Criar componente de página Home</Link>
                </li>
                <li>
                    <Link to="/segundaAtividade">Atividade 2: Criar estado para lista de produtos</Link>
                </li>
                <li>
                    <Link to="/terceiraAtividade">Atividade 3: Listar os objetos da lista de produtos</Link>
                </li>
                <li>
                    <Link to="/quartaAtividade">Atividade 4: Criar estado e função para adicionar o objeto na lista de pedidos</Link>
                </li>
                <li>
                    <Link to="/quintaAtividade">Atividade 5: Criar botão para adicionar o objeto na lista de pedidos</Link>
                </li>
                <li>
                    <Link to="/sextaAtividade">Atividade 6: Listar os objetos da lista de pedidos</Link>
                </li>
                <li>
                    <Link to="/setimaAtividade">Atividade 7: Criar a função para remover objeto da lista de pedidos</Link>
                </li>
                <li>
                    <Link to="/oitavaAtividade">Atividade 8: Criar botão para remover o objeto do pedido</Link>
                </li>
            </ol>
        </div>
        </div>
    );
}