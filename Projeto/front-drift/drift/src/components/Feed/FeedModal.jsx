import React, { useEffect, useState } from "react";
import styles from './FeedModal.module.css'
import api from "../../services/api";
import FotoContent from "../Foto/Foto";

const FeedModal = ({photo, setModalFoto}) => {

    const [foto, setFotos] = useState([]);

    //Faz uma requisição na API para pegar a foto de acordo com o ID
    useEffect(() => {
      api.get(`/foto/${photo.id}`).then((response) => {
        setFotos(response.data);
      });

    }, [photo]);

    // Desabilita o modal quando clica do lado de fora
    function handleOutside(event){
         if (event.target === event.currentTarget){
            setModalFoto(null)
         }

    }

    return(
        <div className={styles.modal} onClick={handleOutside}>
            <div>
            {foto && <FotoContent foto={foto}/>}
            </div>
        </div>
    )
}

export default FeedModal