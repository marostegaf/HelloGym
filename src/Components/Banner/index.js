import "./Banner.css"
import { CgGym } from "react-icons/cg";

export default function Banner() {
    return (
        <div className="banner">
            <div className="apresentacao">
                <div className="titulo-icone">
                    <CgGym className="gym"/>
                    <h1>
                        Hello Gym
                    </h1>
                </div>
                <p>
                    Meus exercícios favoritos!
                </p>
            </div>
            <div className="imagens">
                <img 
                    src="http://github.com/marostegaf.png"
                    alt="Foto do Marcos Marostega"
                />
            </div>
        </div>
    )
}