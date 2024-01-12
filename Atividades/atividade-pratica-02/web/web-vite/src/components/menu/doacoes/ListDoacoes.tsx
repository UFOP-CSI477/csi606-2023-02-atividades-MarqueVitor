import { useEffect, useState } from "react";
import api from "../../../services/api";
import { Link } from "react-router-dom";
import {format} from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface DoacaoInterface {
    id: number;
    pessoa: {
      nome: string;
      rua: string;
      numero: string;
      complemento: string;
      rg: string;
      sangue: {
        tipo: string;
        fator: string;
      };
    };
    local: {
      nome: string;
      cidade: {
        nome: string;
      };
    };
    data: string;
  }  
  
const ListDoacao = () => {

    const [doacoes, setDoacao] = useState<DoacaoInterface[]>([]);

    useEffect(() => {
      {/* Caminho utilizado pela API*/}
      api.get("/doacoes").then((response) => {
        setDoacao(response.data);
      });

    }, []);

    const handleDeleteDoacao = async(id:number) =>{

      // Validações 
      if(!window.confirm("Confirma exclusão de doação?")){
        return;
      }

      try {

        await api.delete('/doacoes/',{
          data:{
            id
          }
        });
        alert("Doação excluida com sucesso!")

        // Atualização (Filtrando a lista)- O ideal é pegar da API novamente
        setDoacao(doacoes.filter(doacao => doacao.id != id))

      } catch (error) {

        alert("Erro na exclusão do local de doação!")
        console.error(error);
        
      }

    }

  return (

    <div>
      <h3>Lista de Doações</h3>
      <div>
        <Link to="/doacao/create">Cadastrar Doações</Link>
      </div>
      <div>
        <Link to="/">Voltar</Link>
      </div>
      <table>

        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>RG</th>
            <th>Tipo</th>
            <th>Fator</th>
            <th>Local</th>
            <th>Data</th>
            <th>Atualizar</th>
            <th>Excluir</th>
          </tr>
        </thead>

        <tbody>
            {doacoes.map((doacao) => (
              <tr>
                <td>{doacao.id}</td>
                <td>{doacao.pessoa.nome}</td>
                <td>{doacao.pessoa.rg}</td>
                <td>{doacao.pessoa.sangue.tipo}</td>
                <td>{doacao.pessoa.sangue.fator}</td>
                <td>{doacao.local.nome}</td>
                <td>{format(new Date(doacao.data), 'dd/MM/yyyy', { locale: ptBR })}</td>
                <td><Link to={`/doacoes/update/${doacao.id}`}>Atualizar</Link></td>
                <td><button onClick={()=>handleDeleteDoacao(doacao.id)}>Excluir</button></td>
              </tr>
            ))}
        </tbody>

      </table>
 
    </div>

  );
};

export default ListDoacao