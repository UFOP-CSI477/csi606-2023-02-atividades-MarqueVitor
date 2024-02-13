import React from "react";
import styles from './FotoContent.module.css'
import FotoComentario from "./FotoComents";
import { UserContext } from "../../UserContext";
import FotoDelete from "./FotoDelete";


const FotoContent = ({foto}) => {

    const user = React.useContext(UserContext);

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
                        {user.date && user.date.nome === nome ? <FotoDelete id={foto.id}/> : "@" + nome }
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