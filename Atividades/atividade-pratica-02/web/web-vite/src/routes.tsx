import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import ListEstados from "./components/menu/estados/ListEstados";

const AppRoutes = () => {

  return (

    <BrowserRouter>
    {/* Colocar todas as rotas que vamos utilizar: estados-pessoas-locais*/}
      <Routes>
        
            <Route path="/" element={<App/>}/>
            <Route path="/estados" element={<ListEstados/>}/>
            <Route path="/cidades" />
            <Route path="/pessoas" />
            <Route path="/doacoes" />

      </Routes>

    </BrowserRouter>
  );
};

export default AppRoutes