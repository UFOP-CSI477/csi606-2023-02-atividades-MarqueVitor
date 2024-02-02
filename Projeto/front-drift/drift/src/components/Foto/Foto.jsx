import React from "react";
import styles from './FotoContent.module.css'
import FotoComentario from "./FotoComents";


const FotoContent = ({foto}) => {

    const nome=foto?.usuario?.nome

    const {comentarios} = foto;

    return(
        <div className={styles.foto}>

            <div className={styles.img}>
                <img src={foto.imagens} alt={foto.modelo} />
            </div>

            <div className={styles.detalhes}>
                <div>
                    <p className={styles.user}>
                        @{nome}
                    </p>
                    <h1>
                        {foto.modelo}
                    </h1>
                    <ul className={styles.atributos}>
                        <li>{foto.ano}</li>
                    </ul>
                </div>
            </div>
            <FotoComentario id={foto.id} comentario={comentarios}/>
        </div>
    )
}

export default FotoContent