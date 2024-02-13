import React from "react";
import Head from "../Help/Head";
import { useEffect, useState } from "react";
import api from '../../services/api'
import { UserContext } from "../../UserContext";
import ButtonComponent from "../Form/Button";
import InputComponent from "../Form/Input";
import styles from './UserCont.module.css';
import FeedComp from "../Feed/Feed";
import FotoContent from "../Foto/Foto";

const UserCont = () => {

    const [nome, setNome] = useState('');
    const [mail, setEmail] = useState('');
    const [fotos, setFotos] = useState('');
    const {date} = React.useContext(UserContext)
    const id = date.id

    useEffect(()=>{
        api.get(`/user/${id}`)
            .then(response=>{
                setFotos(response.data.fotos)
                setNome(response.data.nome);
                setEmail(response.data.email);
            })
    },[id])

    console.log(fotos.imagens)

    const handleUpdate = async (event) => {

        event.preventDefault();

        const data = {
            id:id,
            nome:nome,
            email:mail,
            senhaHash:"12345"    
        }

        try {
            const response = await api.put('/user',data); 

            if(response.status === 200) {
                alert("Usuário atualizado com sucesso")
        }
        } catch (error) {
            console.error(error);
        } 

    }

    return(
        
        <div>
            <Head title='Minha conta'/> 
            <h3 className={styles.h3}>Atualizar Usuário</h3>
            <form onSubmit={handleUpdate}>

                <InputComponent label="Nome" type="text" name="nome" value={nome} onChange={e =>setNome(e.target.value)}/>

                <InputComponent label="Email" type="text" name="email" value={mail} onChange={e =>setEmail(e.target.value)}{...mail}/>

                    <ButtonComponent type="submit">Atualizar</ButtonComponent>
            </form>     

        </div>
    )
}

export default UserCont