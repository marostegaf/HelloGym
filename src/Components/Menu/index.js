import { Link, useLocation } from "react-router-dom";
import "./Menu.css";

export default function Menu() {
    const localizacao = useLocation();
    
    const linkSelecionado = (caminho) => {
        return `link ${localizacao.pathname === caminho ? "linkSelecionado" : "" }`
    }

    return (
        <header>
            <nav className="navegacao">
                <Link 
                    className={ linkSelecionado("/") } to="/">
                    Início
                </Link>
                <Link 
                    className={ linkSelecionado("/sobremim") } to="/sobremim">
                    Sobre mim
                </Link>
            </nav>
        </header>
    )
}