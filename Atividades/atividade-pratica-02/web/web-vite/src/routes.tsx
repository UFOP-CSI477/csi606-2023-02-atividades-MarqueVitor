import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import ListEstados from "./components/menu/estados/ListEstados";
import CreateEstado from "./components/menu/estados/CreateEstado";
import UpdateEstado from "./components/menu/estados/UpdateEstado";
import CreateCidade from "./components/menu/cidades/CreateCidade";
import ListCidades from "./components/menu/cidades/ListCidades";
import UpdateCidade from "./components/menu/cidades/UpdateCidade";
import ListTipos from "./components/menu/sanguineo/ListSanguineo";
import CreateTipos from "./components/menu/sanguineo/CreateSanguineo";
import UpdateTipos from "./components/menu/sanguineo/UpdateSanguineo";

const AppRoutes = () => {

  return (

    <BrowserRouter>
    {/* Colocar todas as rotas que vamos utilizar: estados-pessoas-locais*/}
      <Routes>
        
            <Route path="/" element={<App/>}/>
            <Route path="/estados" element={<ListEstados/>}/>
            <Route path="/estados/create" element={<CreateEstado/>}/>
            <Route path="/estados/update/:id" element={<UpdateEstado/>}/>
            <Route path="/cidades" element={<ListCidades/>} />
            <Route path="/cidades/create" element={<CreateCidade/>} />
            <Route path="/cidades/update/:id" element={<UpdateCidade/>} />
            <Route path="/tipos" element={<ListTipos/>} />
            <Route path="/tipos/create" element={<CreateTipos/>} />
            <Route path="/tipos/update/:id" element={<UpdateTipos/>} />
            <Route path="/pessoas" />
            <Route path="/doacoes" />

      </Routes>

    </BrowserRouter>
  );
};

export default AppRoutes