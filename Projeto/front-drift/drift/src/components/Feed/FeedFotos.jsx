import React, { useEffect, useState } from "react";
import FeedFotosItem from "./FeedFotosItem";
import api from "../../services/api";
import styles from './FeedF.module.css'


const FeedFotos = ({setModalFoto}) => {

    const [fotos, setFotos] = useState([]);
    
    useEffect(() => {
      api.get("/foto").then((response) => {
        setFotos(response.data);
      });

    }, []);

    if(fotos){

      return(
          <ul className={styles.feed}>
              {fotos.map((foto)=> (
              <FeedFotosItem key={foto.id} foto={foto} setModalFoto={setModalFoto}/>
              ))}
          </ul>
      );
  }else{
    return null
  }
}

export default FeedFotos