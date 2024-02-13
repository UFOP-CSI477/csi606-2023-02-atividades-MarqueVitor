import React from "react";
import InputComponent from "../Form/Input";
import ButtonComponent from "../Form/Button";
import useFormComponent from '../../Hooks/useForm';
import Head from "../Help/Head";

const LoginPassLost = () => {

    const [emailSent, setEmailSent] = React.useState(false);
    const mail = useFormComponent('email');

    const handleFormSubmit = (event) => {
        event.preventDefault();
        setEmailSent(true);
    };

    return (
        <section className="animeLeft">
            <Head title="Perdeu sua senha"/>
            <h1 className="title">Perdeu a senha?</h1>
            {emailSent ? (
                <div>
                    <p style={{color:'#4c1'}}>Email enviado com sucesso!</p>
                </div>
            ) : (
                <form onSubmit={handleFormSubmit}>
                    <InputComponent label="Email" type="text" name="email" {...mail} />
                    <ButtonComponent type="submit">Enviar Email</ButtonComponent>
                </form>
            )}
        </section>
    );
}

export default LoginPassLost