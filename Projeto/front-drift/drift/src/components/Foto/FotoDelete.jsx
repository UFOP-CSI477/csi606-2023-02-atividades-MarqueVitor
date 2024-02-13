import React from "react";
import styles from './FotoDel.module.css'
import api from '../../services/api'
import { useNavigate} from "react-router-dom";

const FotoDelete = ({id}) => {

    const navigate = useNavigate();

    const handleClick = async() =>{
        
        const confirm = window.confirm("Deseja deletar a foto?")
        if (confirm) {

            try {
                const response = await api.delete('/foto',{ 
                    data:{ 
                      id:id 
                    } 
                }); 
                if(response.status === 200) {
                    alert("Foto deletada com sucesso")
                    navigate('/conta/conta')
                    setTimeout(() => {
                        navigate('/conta');
                    }, 100);
            }
            } catch (error) {
                console.error(error);
            }   
        }  
} 

    return(
        <div>
            <button onClick={handleClick} className={styles.delete}>Deletar</button>
        </div>
    )
}

export default FotoDelete
