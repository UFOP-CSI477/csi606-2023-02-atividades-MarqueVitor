import { useState } from "react";
import { useNavigate } from 'react-router-dom';

import api from "../../../services/api";
import { Link } from "react-router-dom";

const CreateEstado = () => {

    const [nome, setNome] = useState('');
    const [sigla, setSigla] = useState('');
    const navigate = useNavigate();

    const handleClear = () => {
        setNome('');
        setSigla('');
    };

    const handleNewState = async (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        // Realiza a verificação de campos vazios
        if (!nome.trim() || !sigla.trim()) {
            alert("Por favor, preencha todos os campos.");
            return;
        }  
        
        // Realiza a verificação do campo sigla
        const siglaRegex = /^[A-Z]{1,2}$/;
        if (!siglaRegex.test(sigla)) {
            alert("A sigla deve ter no máximo 2 letras maiúsculas.");
            return;
        }   

        // Enviar dados
        const data = {
            nome,
            sigla
        };
        try {
            await api.post('/estados',data)
            alert("Estado inserido com sucesso!")
            navigate("/estados")
        } catch (error) {
            console.error(error);
            alert("Erro na inserção do Estado!")
        }
    }

    return(

        <div>
            <h3>Cadastro de Estado: {nome} - {sigla}</h3>
            <div>
                <Link to="/estados">Voltar</Link>
            </div>
            <form onSubmit={handleNewState}>
                    <div>
                        <label htmlFor="nome">Nome do Estado</label>
                        <input 
                            type="text" 
                            name="nome"
                            id="id"
                            value={nome}
                            onChange={e => setNome(e.target.value)}
                            />
                    </div>

                    <div>
                        <label htmlFor="sigla">Sigla</label>
                        <input 
                            type="text" 
                            name="sigla"
                            id="sigla"
                            value={sigla}
                            onChange={e => setSigla(e.target.value)}
                            />
                    </div>

                    <button type="submit">Cadastrar</button>
                    <button type="button" onClick={handleClear}>Limpar</button>

            </form>

        </div>
    )
}

export default CreateEstado