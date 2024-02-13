import React from 'react'
import InputComponent from '../Form/Input';
import ButtonComponent from '../Form/Button';
import useFormComponent from '../../Hooks/useForm';
import api from '../../services/api';
import { UserContext } from '../../UserContext';
import Head from '../Help/Head';

const LoginCreate = () => {

    const name = useFormComponent();
    const mail = useFormComponent('email');
    const senha = useFormComponent();

    const {userLogin,error} = React.useContext(UserContext);

    const handleSubmit = async(event) =>{
        event.preventDefault();

        if(mail.validate('email') && senha.validate() && name.validate()){

            const data ={
                nome:name.value,
                email:mail.value,
                senhaHash:senha.value
                };

            try {
                const response = await api.post("/foto", data); 

                // Teste de utilização de token apenas estudo 
                window.localStorage.setItem('token', response.data.token)
                alert("Usuário cadastrado com sucesso!")
                if (response){
                    userLogin(mail,senha);}
            } catch (error) {
                console.error(error);
            }
      
          }      
    } 

    return (
        <section className='animeLeft'>
            <Head title= 'Cadastrar'/>
            <h1 className='title'>Cadastre-se</h1>
            <form onSubmit={handleSubmit}>
                <InputComponent label='Nome' type='text' name='nome'{...name}/>
                <InputComponent label='Email' type='text' name='email'{...mail}/>
                <InputComponent label='Senha' type='password' name='senha'{...senha}/>
                <ButtonComponent>Cadastrar</ButtonComponent>

            </form>
        </section>
    )
}

export default LoginCreate