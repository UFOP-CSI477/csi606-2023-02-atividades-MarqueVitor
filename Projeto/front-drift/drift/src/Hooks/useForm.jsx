import React from "react";

// Realiza a validação do endereço de email 

const formValidate ={
    email:{
        regex:/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        message:'Preencha um endereço de email válido'
    }
};

const useFormComponent = (data) =>{
    
    const [value,setValue] = React.useState('')
    const [error,setError] = React.useState(null)

    function validate(value){

        // Caso onde não é realizado nenhuma validação
        if (value === false) return true;

        if (value.length === 0){
            setError('Preencha um valor.')
            return false;
        }else if (formValidate[data] && !formValidate[data].regex.test(value)){
            setError(formValidate[data].message)
            return false;
        }else{
            setError(null)
            return true;
        }

    }

    function onChange ({target}){
        if (error){ validate(target.value);}
        setValue(target.value);
    }

    return{

        value,
        setValue,
        onChange,
        error,
        validate : () => validate(value),
        onBlur: () => validate(value)

    };

};

export default useFormComponent