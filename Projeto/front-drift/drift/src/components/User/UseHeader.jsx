import React from "react";
import UserHeaderNav from "./UseHeaderNav";
import styles from './UseHeaderST.module.css'
import { useLocation } from "react-router-dom";

const UserHeader = () => {

    const [title,setTitle] = React.useState('')
    const location = useLocation();

    React.useEffect(() =>{
        console.log(location)
        if('/conta/postar' === location.pathname){
            setTitle("Poste Sua Foto")
        }
        if('/conta/conta' === location.pathname){
            setTitle("Minha Conta")
        }
        if('/conta' === location.pathname){
            setTitle("Fotos")
        }
    },[location]);

   
    return(
        <header className={styles.header}>
            <h1 className="title">{title}</h1>
            <UserHeaderNav/>
        </header>
    )
}

export default UserHeader