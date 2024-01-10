import { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';

import api from "../../../services/api";
import { Link } from "react-router-dom";
import { EstadoInterface } from "../estados/ListEstados";

const UpdateCidade = () => {

    const [nome, setNome] = useState('');
    const [estadoID, setStateID] = useState(0);
    const navigate = useNavigate();
    const [estados, setEstados] = useState<EstadoInterface[]>([]);

    const {id} = useParams();

    useEffect(() => {
        {/* Caminho utilizado pela API*/}
        api.get("/estados").then((response) => {
          setEstados(response.data);
        });
  
      }, []);

      useEffect(()=>{

        api.get(`/cidades/${id}`).then(response =>{
            setNome(response.data.nome);
            setStateID(response.data.estadoID);
        })

      },[id])
  
    const handleClear = () => {
        setNome('');
        setStateID(0);
    };

    const handleUpdateCidade = async (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        // Realiza a verificação de campos vazios
        if (!nome.trim() || !estadoID) {
            alert("Por favor, preencha todos os campos.");
            return;
        }  

        // Enviar dados
        const data = {
            id,
            nome,
            estado_id:estadoID
        };
        try {
            await api.put('/cidades',data)
            alert("Cidade atualizada com sucesso!")
            navigate("/cidades")
        } catch (error) {
            console.error(error);
            alert("Erro na atualização da Cidade!")
        }
    }

    return(

        <div>
            <h3>Atualização de Cidades: {nome} - {estadoID}</h3>
            <div>
                <Link to="/cidades">Voltar</Link>
            </div>
            <form onSubmit={handleUpdateCidade}>
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
                        <select name="estadoID" id="estadoID" value={estadoID} onChange={e => setStateID(parseInt(e.target.value))}>
                            <option value="0" selected>Estados</option>
                            {
                                estados.map(estado =>(
                                    <option value={estado.id}>{estado.nome}</option>
                                ))
                            }
                        </select>
                    </div>

                    <button type="submit">Atualizar</button>
                    <button type="button" onClick={handleClear}>Limpar</button>

            </form>

        </div>
    )
}

export default UpdateCidade