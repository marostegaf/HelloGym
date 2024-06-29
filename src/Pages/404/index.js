import { useNavigate } from "react-router-dom"
import { IoMdArrowRoundBack } from "react-icons/io";
import "./404.css"

export default function PaginaNaoEncontrada() {

    const navegar = useNavigate();
    
    return (
        <>
            <div className="conteudo">
                <span>404</span>
                <h1>
                    Página não encontrada.
                </h1>

                <p>
                    Tem certeza de que era isso que você estava procurando? 
                </p>
                <div className="botao" onClick={ () => navegar(-1) }>
                    <button><IoMdArrowRoundBack />Voltar</button>
                </div>
            </div>
            <div className="em-branco"></div>
        </>
    )
}