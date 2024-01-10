import { useState } from "react";
import { useNavigate } from 'react-router-dom';

import api from "../../../services/api";
import { Link } from "react-router-dom";

const CreateTipos = () => {

    const [tipo, setTipo] = useState('');
    const [fator, setFator] = useState('');
    const navigate = useNavigate();

    const handleClear = () => {
        setTipo('');
        setFator('');
    };

    const handleNewTipo = async (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        // Realiza a verificação de campos vazios
        if (!tipo.trim() || !fator.trim()) {
            alert("Por favor, preencha todos os campos.");
            return;
        }  
        
        // Realiza a verificação do campo sigla
        const siglaRegex = /^[A-Z]{1,2}$/;
        if (!siglaRegex.test(tipo)) {
            alert("O tipo sanguíneo deve ter no máximo 2 letras maiúsculas.");
            return;
        }   

        // Enviar dados
        const data = {
            tipo,
            fator
        };
        try {
            await api.post('/tipos',data)
            alert("Tipo sanguíneo cadastrado com sucesso!")
            navigate("/tipos")
        } catch (error) {
            console.error(error);
            alert("Erro no cadastro do tipo sanguíneo!")
        }
    }

    return(

        <div>
            <h3>Cadastro de Tipos Sanguíneos: {tipo} - {fator}</h3>
            <div>
                <Link to="/tipos">Voltar</Link>
            </div>
            <form onSubmit={handleNewTipo}>
                    <div>
                        <label htmlFor="tipo">Tipo Sanguíneo</label>
                        <input 
                            type="text" 
                            name="tipo"
                            id="id"
                            value={tipo}
                            onChange={e => setTipo(e.target.value)}
                            />
                    </div>

                    <div>
                        <label htmlFor="fator">Fator Sanguíneo</label>
                        <input 
                            type="text" 
                            name="fator"
                            id="fator"
                            value={fator}
                            onChange={e => setFator(e.target.value)}
                            />
                    </div>

                    <button type="submit">Cadastrar</button>
                    <button type="button" onClick={handleClear}>Limpar</button>

            </form>

        </div>
    )
}

export default CreateTipos