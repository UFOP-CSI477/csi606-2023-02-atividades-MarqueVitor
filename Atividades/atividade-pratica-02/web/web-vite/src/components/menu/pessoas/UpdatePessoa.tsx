import { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';

import api from "../../../services/api";
import { Link } from "react-router-dom";
import {CidadeInterface} from "../cidades/ListCidades"
import { TiposInterface } from "../sanguineo/ListSanguineo";

const UpdatePessoa = () => {

    const [nome, setNome] = useState('');
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');
    const [rg, setRg] = useState('');
    const [cidadeID, setCidadeID] = useState(0);
    const [tipoID, setTipoID] = useState(0);
    const navigate = useNavigate();
    const [cidades, setCidades] = useState<CidadeInterface[]>([]);
    const [tipos, setTipos] = useState<TiposInterface[]>([]);

    const {id} = useParams();

    useEffect(() => {
        {/* Caminho utilizado pela API*/}
        api.get("/cidades").then((response) => {
          setCidades(response.data);
        });
  
      }, []);

    useEffect(() => {
        {/* Caminho utilizado pela API*/}
        api.get("/tipos").then((response) => {
          setTipos(response.data);
        });
  
      }, []);

      useEffect(()=>{

        api.get(`/pessoa/${id}`).then(response =>{
            setNome(response.data.nome);
            setRua(response.data.rua);
            setNumero(response.data.numero);
            setComplemento(response.data.complemento);
            setRg(response.data.rg);
            setCidadeID(response.data.cidadeID);
            setTipoID(response.data.tipoID);
        })

      },[id])
  
    const handleClear = () => {
        setNome('');
        setRua('');
        setNumero('');
        setComplemento('');
        setRg('');
        setCidadeID(0);
        setTipoID(0);
    };

    const handleUpdatePessoa = async (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        // Realiza a verificação de campos vazios
        if (!nome.trim() || !cidadeID || !rua.trim() || !numero.trim() || !complemento.trim() || !rg.trim() || !tipoID) {
            alert("Por favor, preencha todos os campos.");
            return;
        }  

        // Enviar dados
        const data = {
            id,
            nome,
            rua,
            numero,
            complemento,
            rg,
            cidade_id:cidadeID,
            tipo_id:tipoID
        };
        try {
            await api.put('/pessoa',data)
            alert("Dados cadastrais atualizados com sucesso!")
            navigate("/pessoas")
        } catch (error) {
            console.error(error);
            alert("Erro na atualização de dados cadastrais!")
        }
    }

    return(

        <div>
            <h3>Atualização de dados cadastrais: {nome} - {cidadeID}</h3>
            <div>
                <Link to="/pessoas">Voltar</Link>
            </div>
            <form onSubmit={handleUpdatePessoa}>
                    <div>
                        <label htmlFor="nome">Nome</label>
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
                        <label htmlFor="rg">RG</label>
                        <input 
                            type="text" 
                            name="rg"
                            id="id"
                            value={rg}
                            onChange={e => setRg(e.target.value)}
                            />
                    </div>

                    <div>
                        <label htmlFor="cidadeID">Cidade</label>
                        <select name="cidadeID" id="cidadeID" onChange={e => setCidadeID(parseInt(e.target.value))}>
                            <option value="0" selected>Cidades</option>
                            {
                                cidades.map(cidade =>(
                                    <option value={cidade.id}>{cidade.nome}-{cidade.estado.sigla}</option>
                                ))
                            }
                        </select>
                    </div>

                    <div>
                        <label htmlFor="tipoID">Tipo Sanguíneo</label>
                        <select name="tipoID" id="tipoID" onChange={e => setTipoID(parseInt(e.target.value))}>
                            <option value="0" selected>Tipo Sanguíneo</option>
                            {
                                tipos.map(tipo =>(
                                    <option value={tipo.id}>{tipo.tipo}-{tipo.fator}</option>
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

export default UpdatePessoa