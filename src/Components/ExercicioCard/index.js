import { Link } from "react-router-dom";
import "./Exercicio.css"
import { CgGym } from "react-icons/cg";

export default function ExercicioCard( { exercicio } ) {
    return (
        <div className="exercicio">
            <div className="cards">
                <img
                    src={` /assets/${exercicio.id}/capa.png `}
                    alt="Imagem do Exercício"
                />
                <h2>{ exercicio.titulo }</h2>
                <Link className="link-exercicio" to={`/exercicios/${ exercicio.id }`}>
                    <button><CgGym className="gym-botao"/>Ver mais</button>
                </Link>
            </div>
        </div>
    )
}