import "./ExercicioModelo.css"

export default function ExercicioModelo( { children, titulo }) {
    return (
        <article className="exercicio-modelo">
            <h2 className="titulo">
                { titulo }
            </h2>
            <div className="exercicio-conteudo">
                { children }
            </div>
        </article>
    )
}
