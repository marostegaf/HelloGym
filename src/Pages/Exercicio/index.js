import "./Exercicio.css"
import { useParams, Routes, Route } from "react-router-dom"
import exercicios from "exercicios.json"
import ExercicioModelo from "Components/ExercicioModelo";
import Markdown from "react-markdown";
import PaginaNaoEncontrada from "Pages/404";
import PaginaPadrao from "Components/PaginaPadrao";

export default function Exercicio() {
    const parametros = useParams();

    const exercicio = exercicios.find(exercicio => {
        return exercicio.id === Number(parametros.id);
    })

    if(!exercicio) {
        return <PaginaNaoEncontrada />
    }

    return (
        <Routes>
            <Route path="*" element={ <PaginaPadrao />}>
                <Route index element={
                    <ExercicioModelo
                        titulo={exercicio.titulo}
                    >
                    <div className="exercicio-markdown">
                        <Markdown>
                            {exercicio.texto}    
                        </Markdown>  
                    </div>
                    </ExercicioModelo>
                } />
            </Route>
        </Routes>
    )
} 