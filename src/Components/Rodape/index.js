import { Link } from "react-router-dom";
import "./Rodape.css"
import { FaGithub } from "react-icons/fa";

export default function Rodape() {
    return (
        <footer className="rodape">
            <Link to="https://github.com/marostegaf">
                <FaGithub className="github"/>
            </Link>
            <h2>Desenvolvido por Marcos Marostega</h2>
        </footer>
    )
}