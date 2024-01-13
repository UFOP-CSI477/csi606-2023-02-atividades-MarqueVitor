import { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';

import api from "../../../services/api";
import { Link } from "react-router-dom";
import { PessoaInterface } from "../pessoas/ListPessoa";
import { LocaisInterface } from "../locais/ListLocais";

const UpdateDoacao = () => {

    const [pessoaID, setPessoaID] = useState(0);
    const [localID, setLocalID] = useState(0);
    const [date, setData] = useState('');
    const navigate = useNavigate();
    const [pessoas, setPessoas] = useState<PessoaInterface[]>([]);
    const [locais, setLocais] = useState<LocaisInterface[]>([]);

    const {id} = useParams();

    useEffect(() => {
        {/* Caminho utilizado pela API*/}
        api.get("/pessoa").then((response) => {
          setPessoas(response.data);
        });
  
      }, []);

      useEffect(() => {
        {/* Caminho utilizado pela API*/}
        api.get("/locais").then((response) => {
          setLocais(response.data);
        });
  
      }, []);

      useEffect(() => {
        api.get(`/doacoes/${id}`).then(response => {
            setPessoaID(response.data.pessoa.id);
            setLocalID(response.data.local.id);
            setData(response.data.data);
        })
    }, [id])
    
  
    const handleClear = () => {
        setPessoaID(0);
        setLocalID(0);
        setData('');
    };

    const UpdateDoacao= async (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        // Realiza a verificação de campos vazios
        if (!localID || !pessoaID) {
            alert("Por favor, preencha todos os campos.");
            return;
        }  

        // Formata a data para o formato aceito no BD exemplo:"2023-12-16T14:35:00.000Z"
        const formattedDate = new Date(date).toISOString();

        // Enviar dados
        const data = {
            id:id,
            pessoa_id:pessoaID,
            local_id:localID,
            data: formattedDate
        };
        try {
            await api.put('/doacoes',data)
            alert("Doação atualizada com sucesso!")
            navigate("/doacoes")
        } catch (error) {
            console.error(error);
            alert("Erro na atualização de doação!")
        }
    }

    return(

        <div>
            <h3>Atualizar Doações</h3>
            <div>
                <Link to="/doacoes">Voltar</Link>
            </div>
            <form onSubmit={UpdateDoacao}>

                    <div>
                        <label htmlFor="pessoaID">Pessoa</label>
                        <select name="pessoaID" id="pessoaID" defaultValue="0" onChange={e => setPessoaID(parseInt(e.target.value))}>
                            <option value="0" disabled>Pessoas</option>
                            {
                                pessoas.map(pessoa => (
                                <option key={pessoa.id} value={pessoa.id}>{pessoa.nome}</option>
                            ))}
                            </select>

                    </div>

                    <div>
                        <label htmlFor="localID">Local de Doação</label>
                        <select name="localID" id="localID" defaultValue="0" onChange={e => setLocalID(parseInt(e.target.value))}>
                            <option value="0" disabled>Locais</option>
                            {
                                locais.map(local => (
                                <option key={local.id} value={local.id}>{local.nome}</option>
                            ))}
                            </select>

                    </div>

                    <div>
                        <label htmlFor="data">Data</label>
                            <input
                                type="date"
                                id="data"
                                name="data"
                                value={date}
                                onChange={(e) => setData(e.target.value)}
                            />
                    </div>

                    <button type="submit">Atualizar</button>
                    <button type="button" onClick={handleClear}>Limpar</button>

            </form>

        </div>
    )
}

export default UpdateDoacao