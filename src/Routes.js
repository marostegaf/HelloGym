import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./Pages/Start";
import SobreMim from "./Pages/SobreMim";
import Menu from "./Components/Menu";
import "./App.css"
import Rodape from "Components/Rodape";
import PaginaPadrao from "Components/PaginaPadrao";
import Exercicio from "Pages/Exercicio";
import PaginaNaoEncontrada from "Pages/404";

function AppRoutes() {
  return (
    <div className="app">
    <BrowserRouter >
      < Menu /> 

      <Routes>
        <Route path="/" element={ <PaginaPadrao /> }>
          <Route index element={ <Inicio /> }/>
          <Route path="sobremim" element={ <SobreMim /> } />
        </Route>
        <Route path="exercicios/:id" element={ <Exercicio /> }/>
        <Route path="*" element={ <PaginaNaoEncontrada />} />
      </Routes>

      <Rodape />
    </BrowserRouter>
    </div>
  );
}

export default AppRoutes;
