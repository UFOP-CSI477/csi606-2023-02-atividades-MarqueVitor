import React from "react";
import api from "../../services/api";
import { UserContext } from "../../UserContext";
import { ReactComponent as Send } from '../../Assets/car.svg';
import styles from "./FotoForms.module.css"

const FotoComentForm = ({id, addComent}) => {

    const {date} = React.useContext(UserContext)

    const [comment, setComment] = React.useState('');

    const comentario = async (comentarioID) => {
        try {
            const response = await api.get(`/coment/${comentarioID}`);
            addComent(response.data)
        } catch (error) {
            console.error(error);
        }
    }
    
    const handleSubmit = async(event) =>{
        event.preventDefault();

            const data ={
                
                comentario:comment,
                idFoto:id,
                idUsuario:date.id
            
            };

            try {
                const response = await api.post("/coment", data); 
                setComment('')
                await comentario(response.data.id);
            } catch (error) {
                console.error(error);
            }
        }
      
    return(
       <form className={styles.form} onSubmit={handleSubmit}>
            <textarea value={comment} 
            className={styles.textarea}
            id="comment"
            name="comment"
            placeholder="Faça algum comentario..."
            onChange={({target})=>setComment(target.value)}
            />
            <button className={styles.btn}>
                <Send/>
            </button>
       </form>
    )
}

export default FotoComentForm