import React from "react";
import { UserContext } from "../../UserContext";
import { Navigate } from "react-router-dom";

const ProtectedRouter = ({children}) => {

    // Caso o usuário não esteja logado ele é redirecionado para a pagina de login
    const {login} = React.useContext(UserContext);

    return login ? children : <Navigate to='/login'/>
        
}

export default ProtectedRouter