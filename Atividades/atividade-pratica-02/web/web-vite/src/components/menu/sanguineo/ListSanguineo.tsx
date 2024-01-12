import { useEffect, useState } from "react";
import api from "../../../services/api";
import { Link } from "react-router-dom";
import {format} from 'date-fns';
import { ptBR } from 'date-fns/locale';


export interface TiposInterface {
    id: number;
    tipo: string;
    fator: string;
    created_at: string;
    update_at: string;
}
  
const ListTipos = () => {

    const [tipos, setTipos] = useState<TiposInterface[]>([]);

    useEffect(() => {
      {/* Caminho utilizado pela API*/}
      api.get("/tipos").then((response) => {
        setTipos(response.data);
      });

    }, []);

    const handleDeleteTipos = async(id:number) =>{

      // Validações 
      if(!window.confirm("Confirma exclusão do tipo sanguíneo?")){
        return;
      }

      try {

        await api.delete('/tipos/',{
          data:{
            id
          }
        });
        alert("Tipo sanguíneo excluido com sucesso!")

        // Atualização (Filtrando a lista)- O ideal é pegar da API novamente
        setTipos(tipos.filter(tipo => tipo.id != id))

      } catch (error) {

        alert("Erro na exclusão do tipo sanguíneo!")
        console.error(error);
        
      }

    }

  return (

    <div>
      <h3>Lista de Tipos Sanguíneos</h3>
      <div>
        <Link to="/tipos/create">Cadastrar Tipos Sanguíneos</Link>
      </div>
      <div>
        <Link to="/">Voltar</Link>
      </div>
      <table>

        <thead>
          <tr>
            <th>ID</th>
            <th>Tipo</th>
            <th>Fator</th>
            <th>Criado</th>
            <th>Alterado</th>
            <th>Atualizar</th>
            <th>Excluir</th>
          </tr>
        </thead>

        <tbody>
            {tipos.map((tipo) => (
              <tr>
                <td>{tipo.id}</td>
                <td>{tipo.tipo}</td>
                <td>{tipo.fator}</td>
                <td>{format(new Date(tipo.created_at), 'dd/MM/yyyy', { locale: ptBR })}</td>
                <td>{format(new Date(tipo.update_at), 'dd/MM/yyyy', { locale: ptBR })}</td>
                <td><Link to={`/tipos/update/${tipo.id}`}>Atualizar</Link></td>
                <td><button onClick={()=>handleDeleteTipos(tipo.id)}>Excluir</button></td>
              </tr>
            ))}
        </tbody>

      </table>
 
    </div>

  );
};

export default ListTipos