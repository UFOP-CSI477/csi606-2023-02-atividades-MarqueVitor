import { useEffect, useState } from "react";
import api from "../../../services/api";
import { Link } from "react-router-dom";
import {format} from 'date-fns';
import { ptBR } from 'date-fns/locale';


interface CidadeInterface {
    id: number;
    nome: string;
    estado: {
      id: number;
      nome: string;
      sigla: string;
    };
    created_at: string;
    updated_at: string;
}
  
const ListCidades = () => {

    const [cidades, setCidades] = useState<CidadeInterface[]>([]);

    useEffect(() => {
      {/* Caminho utilizado pela API*/}
      api.get("/cidades").then((response) => {
        setCidades(response.data);
      });

    }, []);

    const handleDeleteCidade = async(id:number) =>{

      // Validações 
      if(!window.confirm("Confirma exclusão da cidade?")){
        return;
      }

      try {

        await api.delete('/cidades/',{
          data:{
            id
          }
        });
        alert("Cidade excluido com sucesso!")

        // Atualização (Filtrando a lista)- O ideal é pegar da API novamente
        setCidades(cidades.filter(cidade => cidade.id != id))

      } catch (error) {

        alert("Erro na exclusão da cidade!")
        console.error(error);
        
      }

    }

  return (

    <div>
      <h3>Lista de Cidades</h3>
      <div>
        <Link to="/cidades/create">Inserir Cidades</Link>
      </div>
      <div>
        <Link to="/">Voltar</Link>
      </div>
      <table>

        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Estado</th>
            <th>Criado</th>
            <th>Alterado</th>
            <th>Atualizar</th>
            <th>Excluir</th>
          </tr>
        </thead>

        <tbody>
            {cidades.map((cidade) => (
              <tr>
                <td>{cidade.id}</td>
                <td>{cidade.nome}</td>
                <td>{cidade.estado.nome}-{cidade.estado.sigla}</td>
                <td>{format(new Date(cidade.created_at), 'dd/MM/yyyy', { locale: ptBR })}</td>
                <td>{format(new Date(cidade.updated_at), 'dd/MM/yyyy', { locale: ptBR })}</td>
                <td><Link to={`/cidades/update/${cidade.id}`}>Atualizar</Link></td>
                <td><button onClick={()=>handleDeleteCidade(cidade.id)}>Excluir</button></td>
              </tr>
            ))}
        </tbody>

      </table>
 
    </div>

  );
};

export default ListCidades