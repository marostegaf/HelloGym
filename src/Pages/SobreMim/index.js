import "./SobreMim.css" 
import ExercicioModelo from "Components/ExercicioModelo";

export default function SobreMim() {
    return (
        <ExercicioModelo className="sobremim">
            <div className="sobremim">
                <div>
                    <div className="hello">
                        <h3>
                            Olá, eu sou o Marcos
                        </h3>
                        <img src="/assets/hello.png"/>
                    </div>
                    
                    <p>
                        Tenho 20 anos e sou apaixonado por programação e musculação. Atualmente, estou cursando <span>Ciência da Computação</span> e concilio a faculdade com cursos complementares para aprimorar meus conhecimentos.
                    </p>
                    <p>
                        Além da programação, um dos meus hobbies favoritos é a musculação. <span>Acredito que a combinação de uma mente ativa e um corpo saudável é essencial para todos</span>.
                    </p>
                    <p>
                        Por isso, decidi unir essas duas paixões, então, seja bem-vindo ao meu espaço pessoal! Espero que você encontre aqui <span>inspirações e dicas úteis para sua jornada na programação e no mundo fitness</span>.
                    </p>
                </div>
                < img 
                    className="minha-foto"
                    src="http://github.com/marostegaf.png"
                    alt="Foto do Marcos Marostega"
                />
            </div>

        </ExercicioModelo>
    )
}