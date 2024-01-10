import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

import api from "../../../services/api";
import { Link } from "react-router-dom";
import { EstadoInterface } from "../estados/ListEstados";

const CreateCidade = () => {

    const [nome, setNome] = useState('');
    const [estadoID, setStateID] = useState(0);
    const navigate = useNavigate();
    const [estados, setEstados] = useState<EstadoInterface[]>([]);

    useEffect(() => {
        {/* Caminho utilizado pela API*/}
        api.get("/estados").then((response) => {
          setEstados(response.data);
        });
  
      }, []);
  
    const handleClear = () => {
        setNome('');
        setStateID(0);
    };

    const handleNewCidade = async (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        // Realiza a verificação de campos vazios
        if (!nome.trim() || !estadoID) {
            alert("Por favor, preencha todos os campos.");
            return;
        }  

        // Enviar dados
        const data = {
            nome,
            estado_id:estadoID
        };
        try {
            await api.post('/cidades',data)
            alert("Cidade cadastrada com sucesso!")
            navigate("/cidades")
        } catch (error) {
            console.error(error);
            alert("Erro no cadastro da Cidade!")
        }
    }

    return(

        <div>
            <h3>Cadastro de Cidades: {nome} - {estadoID}</h3>
            <div>
                <Link to="/cidades">Voltar</Link>
            </div>
            <form onSubmit={handleNewCidade}>
                    <div>
                        <label htmlFor="nome">Nome da Cidade</label>
                        <input 
                            type="text" 
                            name="nome"
                            id="id"
                            value={nome}
                            onChange={e => setNome(e.target.value)}
                            />
                    </div>

                    <div>
                        <label htmlFor="estadoID">Estado</label>
                        <select name="estadoID" id="estadoID" onChange={e => setStateID(parseInt(e.target.value))}>
                            <option value="0" selected>Estado</option>
                            {
                                estados.map(estado =>(
                                    <option value={estado.id}>{estado.nome}</option>
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

export default CreateCidade