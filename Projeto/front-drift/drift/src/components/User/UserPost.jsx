import React, { useState } from "react";
import styles from "./Post.module.css"
import InputComponent from "../Form/Input";
import ButtonComponent from "../Form/Button";
import { UserContext } from "../../UserContext";
import useFormComponent from "../../Hooks/useForm";
import ErrorMsg from "../Help/Error";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import Head from "../Help/Head";

const UserPost = () => {

    const model = useFormComponent();
    const year = useFormComponent();
    const imagem = useFormComponent();
    const navigate = useNavigate();

    const {date,error} = React.useContext(UserContext)

    const [imagePreview, setImagePreview] = useState('')

    const handleImageChange = (event) => {
        const imageUrl = event.target.value;
        setImagePreview(imageUrl);
        imagem.setValue(imageUrl);
    };


    const handleSubmit = async(event) =>{

        event.preventDefault();

        if(model.validate() && year.validate()){

            const data ={
                modelo:model.value,
                ano:year.value,
                imagens:imagem.value,
                idUsuario:date.id
                };

            try {
                const response = await api.post("/foto", data); 
                navigate('/conta')
                console.log(response)
                alert("Foto postada com sucesso!")
            } catch (error) {
                console.error(error);
                alert("Erro ao postar foto!")
            }
      
          }   
    }

    return(
        <section className={`${styles.fotopost} animeLeft`}>
            <Head title= 'Poste sua foto'/> 
            <form onSubmit={handleSubmit}>
                <InputComponent label='Modelo' type='text' name='model' {...model}/>
                <InputComponent label='Ano' type='text' name='year'{...year}/>
                <InputComponent label='Imagem' type='text' name='imagem'{...imagem}  value={imagem.value} onChange={handleImageChange}/>
                <ButtonComponent>Enviar</ButtonComponent>  
            </form>
            <div>
                {imagePreview && <div className={styles.preview} style={{backgroundImage:`url('${imagePreview}')`}}> </div>}
                </div>  
                <ErrorMsg error={error}/>
        </section>
    )
}

export default UserPost