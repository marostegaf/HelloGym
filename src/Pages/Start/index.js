import "./Inicio.css"
import exercicios from "exercicios.json"
import ExercicioCard from "Components/ExercicioCard";

export default function Inicio() {
    return (
        <ul className="exercicio">
                { exercicios.map(exercicio => (
                    <li key={exercicio.id}>
                        <ExercicioCard exercicio={ exercicio }/>
                    </li>
                ))}
        </ul>
    )
}
