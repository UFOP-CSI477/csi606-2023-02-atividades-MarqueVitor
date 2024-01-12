import { useEffect, useState } from "react";
import api from "../../../services/api";
import { Link } from "react-router-dom";

export interface LocaisInterface {
    id: number;
    nome: string;
    rua: string;
    numero: string;
    complemento: string;
    cidade: {
      nome: string;
    };
  }
  
  
const ListLocais = () => {

    const [locais, setLocais] = useState<LocaisInterface[]>([]);

    useEffect(() => {
      {/* Caminho utilizado pela API*/}
      api.get("/locais").then((response) => {
        setLocais(response.data);
      });

    }, []);

    const handleDeleteLocais = async(id:number) =>{

      // Validações 
      if(!window.confirm("Confirma exclusão do local de doação?")){
        return;
      }

      try {

        await api.delete('/locais/',{
          data:{
            id
          }
        });
        alert("Local de doação excluido com sucesso!")

        // Atualização (Filtrando a lista)- O ideal é pegar da API novamente
        setLocais(locais.filter(local => local.id != id))

      } catch (error) {

        alert("Erro na exclusão do local de doação!")
        console.error(error);
        
      }

    }

  return (

    <div>
      <h3>Lista de Locais de Doação</h3>
      <div>
        <Link to="/locais/create">Cadastrar Locais de Doação</Link>
      </div>
      <div>
        <Link to="/">Voltar</Link>
      </div>
      <table>

        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Rua</th>
            <th>Número</th>
            <th>Complemento</th>
            <th>Cidade</th>
            <th>Atualizar</th>
            <th>Excluir</th>
          </tr>
        </thead>

        <tbody>
            {locais.map((local) => (
              <tr>
                <td>{local.id}</td>
                <td>{local.nome}</td>
                <td>{local.rua}</td>
                <td>{local.numero}</td>
                <td>{local.complemento}</td>
                <td>{local.cidade.nome}</td>
                <td><Link to={`/locais/update/${local.id}`}>Atualizar</Link></td>
                <td><button onClick={()=>handleDeleteLocais(local.id)}>Excluir</button></td>
              </tr>
            ))}
        </tbody>

      </table>
 
    </div>

  );
};

export default ListLocais