import React from "react";
import api from "./services/api";
import { useNavigate } from 'react-router-dom';

export const UserContext = React.createContext();


export const UserStorage = ({children}) =>{

    const [date,setData] = React.useState(null);
    const [login,setLogin] = React.useState(null);
    const [loading,setLoading] = React.useState(false);
    const [error,setError] = React.useState(null);
    const navigate = useNavigate();
    

    async function userLogout(){
        setData(null);
        setLogin(null);
        setError(null);
        window.localStorage.removeItem('token');
        navigate('/login')
    }

    async function userLogin(username, password){
        const data ={
        email:username.value,
        senha:password.value,
        };
        
        try {
            setError(null)
            setLoading(true)
            const response = await api.post("/login", data); 
            const json = response.data.user
            setData(json)
            setLogin(true)
            //console.log(json)
            // Teste de utilização de token apenas estudo 
            window.localStorage.setItem('token', response.data.token)
            navigate('/conta')
        } catch (error) {
            setError("Usuário inválido")
            setLogin(false)
        }finally{
            setLoading(false)
        }
    }


    return(

        <UserContext.Provider value={{userLogin,date,userLogout,error,loading,login}}>
            {children}
        </UserContext.Provider>

    )

}
