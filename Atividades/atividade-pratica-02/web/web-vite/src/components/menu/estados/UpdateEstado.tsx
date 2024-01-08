import { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';

import api from "../../../services/api";
import { Link } from "react-router-dom";

const UpdateEstado = () => {

    const [nome, setNome] = useState('');
    const [sigla, setSigla] = useState('');
    const navigate = useNavigate();
    const {id} = useParams(); //estados/update/id

    // Utilizado para carregar os dados a partir do id
    useEffect(()=>{

        api.get(`/estados/${id}`)
            .then(response=>{
                setNome(response.data.nome);
                setSigla(response.data.sigla);
            })
    },[id])

    const handleClear = () => {
        setNome('');
        setSigla('');
    };

    const handleUpdateState = async (event: React.FormEvent<HTMLFormElement>) => {

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
            id:parseInt(String(id)),
            nome,
            sigla
        };
        try {
            await api.put('/estados',data)
            alert("Estado atualizado com sucesso!")
            navigate("/estados")
        } catch (error) {
            console.error(error);
            alert("Erro na atualização do Estado!")
        }
    }

    return(

        <div>
            <h3>Atualizar Estados: {nome} - {sigla}</h3>
            <div>
                <Link to="/estados">Voltar</Link>
            </div>
            <form onSubmit={handleUpdateState}>
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

                    <button type="submit">Atualizar</button>
                    <button type="button" onClick={handleClear}>Limpar</button>

            </form>

        </div>
    )
}

export default UpdateEstado