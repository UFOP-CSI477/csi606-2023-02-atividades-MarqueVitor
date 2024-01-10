import { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';

import api from "../../../services/api";
import { Link } from "react-router-dom";

const UpdateTipos = () => {

    const [tipo, setTipo] = useState('');
    const [fator, setFator] = useState('');
    const navigate = useNavigate();
    const {id} = useParams();

    // Utilizado para carregar os dados a partir do id
    useEffect(()=>{

        api.get(`/tipos/${id}`)
            .then(response=>{
                setTipo(response.data.tipo);
                setFator(response.data.fator);
            })
    },[id])

    const handleClear = () => {
        setTipo('');
        setFator('');
    };

    const handleUpdateTipo = async (event: React.FormEvent<HTMLFormElement>) => {

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
            id,
            tipo,
            fator
        };
        try {
            await api.put('/tipos',data)
            alert("Tipo sanguíneo atualizado com sucesso!")
            navigate("/tipos")
        } catch (error) {
            console.error(error);
            alert("Erro na atualização do tipo sanguíneo!")
        }
    }

    return(

        <div>
            <h3>Atualização de Tipo Sanguíneo: {tipo} - {fator}</h3>
            <div>
                <Link to="/tipos">Voltar</Link>
            </div>
            <form onSubmit={handleUpdateTipo}>
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

                    <button type="submit">Atualizar</button>
                    <button type="button" onClick={handleClear}>Limpar</button>

            </form>

        </div>
    )
}

export default UpdateTipos