import { useEffect, useState } from "react";
import api from "../../../services/api";
import { Link } from "react-router-dom";
import {format} from 'date-fns';
import { ptBR } from 'date-fns/locale';

export interface EstadoInterface {
  id: number;
  nome: string;
  sigla: string;
  created_at: string;
  updated_at: string;
}

const ListEstados = () => {

    const [estados, setEstados] = useState<EstadoInterface[]>([]);

    useEffect(() => {
      {/* Caminho utilizado pela API*/}
      api.get("/estados").then((response) => {
        setEstados(response.data);
      });

    }, []);

    const handleDeleEstate = async(id:number) =>{

      // Validações 
      if(!window.confirm("Confirma exclusão do estado?")){
        return;
      }

      try {

        await api.delete('/estados/',{
          data:{
            id
          }
        });
        alert("Estado excluido com sucesso!")

        // Atualização (Filtrando a lista)- O ideal é pegar da API novamente
        setEstados(estados.filter(estado => estado.id != id))

      } catch (error) {

        alert("Erro na exclusão do estado!")
        console.error(error);
        
      }

    }

  return (

    <div>
      <h3>Lista de Estados</h3>
      <div>
        <Link to="/estados/create">Inserir Estados</Link>
      </div>
      <div>
        <Link to="/">Voltar</Link>
      </div>
      
      <table>

        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Sigla</th>
            <th>Criado</th>
            <th>Alterado</th>
            <th>Atualizar</th>
            <th>Excluir</th>
          </tr>
        </thead>

        <tbody>
            {estados.map((estado) => (
              <tr>
                <td>{estado.id}</td>
                <td>{estado.nome}</td>
                <td>{estado.sigla}</td>
                <td>{format(new Date(estado.created_at), 'dd/MM/yyyy', { locale: ptBR })}</td>
                <td>{format(new Date(estado.updated_at), 'dd/MM/yyyy', { locale: ptBR })}</td>
                <td><Link to={`/estados/update/${estado.id}`}>Atualizar</Link></td>
                <td><button onClick={()=>handleDeleEstate(estado.id)}>Excluir</button></td>
              </tr>
            ))}
        </tbody>

      </table>
    </div>

  );
};

export default ListEstados