import React from "react";
import { UserContext } from "../../UserContext";
import FotoComentForm from "./FotoComentForm";
import styles from "./FotoComent.module.css"


const FotoComentario = (props) => {

   const [comments, setComments] = React.useState([])

    React.useEffect(() => {
        if (props.comentario) {
          setComments(props.comentario);
        }
      }, [props.comentario]); 

    const addComent = (novoComentario) => {
        setComments([...comments, novoComentario]);
      };

   const {login} = React.useContext(UserContext);

    if(comments){
        return(
        <>
            <ul className={styles.coment}>
                {comments.map(comment => <li key={comment.id}>
                    <b>{comment.usuario.nome}:</b>
                    <span>{comment.comentario}</span>
                </li>)}
            </ul>
            {login && <FotoComentForm id={props.id} addComent={addComent}/>}
        </>
        )
    }
}

export default FotoComentario