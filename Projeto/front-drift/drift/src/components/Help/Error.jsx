import React from "react";

const ErrorMsg = ({error}) =>{

    // Componente para dar estilo a mensagem de erro
    if(!error) return null;

    return(
        <p style={{color:'#f31',margin:'1rem 0'}}>{error}</p>
    )
}

export default ErrorMsg