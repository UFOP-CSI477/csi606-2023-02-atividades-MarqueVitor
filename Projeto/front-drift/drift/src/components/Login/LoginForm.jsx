import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import InputComponent from '../Form/Input';
import ButtonComponent from '../Form/Button';
import useFormComponent from '../../Hooks/useForm';
import { UserContext } from '../../UserContext';
import ErrorMsg from '../Help/Error';
import styles from './LoginForm.module.css'
import stylesBtn from '../Form/Button.module.css'
import Head from '../Help/Head';

const LoginForm = () => {

    const email = useFormComponent('email');
    const senha = useFormComponent();

    const {userLogin,error} = React.useContext(UserContext);

    const handleSubmit = async(event) =>{

        event.preventDefault();  

      if(email.validate('email') && senha.validate()){

        userLogin(email,senha)
  
      }
  }

    return (
        <section className='animeLeft'>
          <Head title='Login'/>
            <h1 className='title'>Drifters - Login</h1>
            <form className={styles.form} onSubmit={handleSubmit}>

                <InputComponent label='Usuário' type='text' name='email' {...email}/>
                <InputComponent label='Senha' type='password' name='senha'{...senha}/>
                <ButtonComponent>Entrar</ButtonComponent>

                <ErrorMsg error={error}/>
                
            </form>
            <Link className={styles.perdeu} to='/login/perdeu'>Perdeu a senha?</Link>
            <div className={styles.cadastro}>
              <h2 className={styles.subtitle}>Cadastre-se</h2>
              <p>Ainda não possui uma conta? Cadastre-se.</p>
              <Link className={stylesBtn.button} to='/login/criar'>Cadastrar</Link>
            </div>
        </section>
    )

}

export default LoginForm