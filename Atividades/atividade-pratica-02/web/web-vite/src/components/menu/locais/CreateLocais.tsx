import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

import api from "../../../services/api";
import { Link } from "react-router-dom";
import { CidadeInterface } from "../cidades/ListCidades";

const CreateLocais = () => {

    const [nome, setNome] = useState('');
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');
    const [cidadeID, setCidadeID] = useState(0);
    const navigate = useNavigate();
    const [cidades, setcidades] = useState<CidadeInterface[]>([]);

    useEffect(() => {
        {/* Caminho utilizado pela API*/}
        api.get("/cidades").then((response) => {
          setcidades(response.data);
        });
  
      }, []);
  
    const handleClear = () => {
        setNome('');
        setRua('');
        setNumero('');
        setComplemento('');
        setCidadeID(0);
    };

    const handleNewLocal = async (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        // Realiza a verificação de campos vazios
        if (!nome.trim() || !cidadeID || !rua.trim() || !numero.trim() || !complemento.trim()   ) {
            alert("Por favor, preencha todos os campos.");
            return;
        }  

        // Enviar dados
        const data = {
            nome,
            rua,
            numero,
            complemento,
            cidade_id:cidadeID
        };
        try {
            await api.post('/locais',data)
            alert("Local de doação cadastrado com sucesso!")
            navigate("/locais")
        } catch (error) {
            console.error(error);
            alert("Erro no cadastro de local de doação!")
        }
    }

    return(

        <div>
            <h3>Cadastro de Locais de Doação: {nome} - {cidadeID}</h3>
            <div>
                <Link to="/locais">Voltar</Link>
            </div>
            <form onSubmit={handleNewLocal}>
                    <div>
                        <label htmlFor="nome">Nome do Local</label>
                        <input 
                            type="text" 
                            name="nome"
                            id="id"
                            value={nome}
                            onChange={e => setNome(e.target.value)}
                            />
                    </div>

                    <div>
                        <label htmlFor="rua">Rua</label>
                        <input 
                            type="text" 
                            name="rua"
                            id="id"
                            value={rua}
                            onChange={e => setRua(e.target.value)}
                            />
                    </div>

                    <div>
                        <label htmlFor="numero">Número</label>
                        <input 
                            type="text" 
                            name="numero"
                            id="id"
                            value={numero}
                            onChange={e => setNumero(e.target.value)}
                            />
                    </div>

                    <div>
                        <label htmlFor="complemento">Complemento</label>
                        <input 
                            type="text" 
                            name="complemento"
                            id="id"
                            value={complemento}
                            onChange={e => setComplemento(e.target.value)}
                            />
                    </div>

                    <div>
                        <label htmlFor="cidadeID">Cidades</label>
                        <select name="cidadeID" id="cidadeID" onChange={e => setCidadeID(parseInt(e.target.value))}>
                            <option value="0" selected>Cidades</option>
                            {
                                cidades.map(cidade =>(
                                    <option key={cidade.id} value={cidade.id}>{cidade.nome}</option>
                                ))
                            }
                        </select>
                    </div>

                    <button type="submit">Cadastrar</button>
                    <button type="button" onClick={handleClear}>Limpar</button>

            </form>

        </div>
    )
}

export default CreateLocais