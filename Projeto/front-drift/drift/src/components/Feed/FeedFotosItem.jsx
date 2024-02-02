import React from "react";
import styles from './FeedFI.module.css'

const FeedFotosItem = ({foto,setModalFoto}) => {

    function handleClick(){
        setModalFoto(foto)

    }

    return(
        <li className={styles.fotos} onClick={handleClick}>
            <img src={foto.imagens} alt={foto.modelo} />
        </li>
    )
}

export default FeedFotosItem