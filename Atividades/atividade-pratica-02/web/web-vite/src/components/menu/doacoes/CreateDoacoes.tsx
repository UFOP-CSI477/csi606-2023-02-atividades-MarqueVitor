import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

import api from "../../../services/api";
import { Link } from "react-router-dom";
import { PessoaInterface } from "../pessoas/ListPessoa";
import { LocaisInterface } from "../locais/ListLocais";

const CreateDoacao = () => {

    const [pessoaID, setPessoaID] = useState(0);
    const [localID, setLocalID] = useState(0);
    const [date, setData] = useState('');
    const navigate = useNavigate();
    const [pessoas, setPessoas] = useState<PessoaInterface[]>([]);
    const [locais, setLocais] = useState<LocaisInterface[]>([]);

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
  
    const handleClear = () => {
        setPessoaID(0);
        setLocalID(0);
        setData('');
    };

    const handleNewDoacao= async (event: React.FormEvent<HTMLFormElement>) => {

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
            pessoa_id:pessoaID,
            local_id:localID,
            data: formattedDate
        };
        try {
            await api.post('/doacoes',data)
            alert("Doação cadastrada com sucesso!")
            navigate("/doacoes")
        } catch (error) {
            console.error(error);
            alert("Erro no cadastro de doação!")
        }
    }

    return(

        <div>
            <h3>Cadastro de Doações</h3>
            <div>
                <Link to="/doacoes">Voltar</Link>
            </div>
            <form onSubmit={handleNewDoacao}>

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

                    <button type="submit">Cadastrar</button>
                    <button type="button" onClick={handleClear}>Limpar</button>

            </form>

        </div>
    )
}

export default CreateDoacao