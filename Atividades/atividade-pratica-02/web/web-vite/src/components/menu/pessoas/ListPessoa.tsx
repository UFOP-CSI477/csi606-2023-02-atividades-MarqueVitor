import { useEffect, useState } from "react";
import api from "../../../services/api";
import { Link } from "react-router-dom";

export interface PessoaInterface {
    id: number;
    nome: string;
    rua: string;
    numero: string;
    complemento: string;
    rg: string;
    cidade: {
      nome: string;
    };
    sangue: {
      tipo: string;
      fator: string;
    };
}
  
const ListPessoas = () => {

    const [pessoas, setPessoas] = useState<PessoaInterface[]>([]);

    useEffect(() => {
      {/* Caminho utilizado pela API*/}
      api.get("/pessoa").then((response) => {
        setPessoas(response.data);
      });

    }, []);

    const handleDelePessoa = async(id:number) =>{

      // Validações 
      if(!window.confirm("Confirma exclusão da pessoa?")){
        return;
      }

      try {

        await api.delete('/pessoa/',{
          data:{
            id
          }
        });
        alert("Pessoa excluida com sucesso!")

        // Atualização (Filtrando a lista)- O ideal é pegar da API novamente
        setPessoas(pessoas.filter(pessoa => pessoa.id != id))

      } catch (error) {

        alert("Erro na exclusão da pessoa!")
        console.error(error);
        
      }

    }

  return (

    <div>
      <h3>Lista de Pessoas</h3>
      <div>
        <Link to="/pessoas/create">Cadastrar Pessoa</Link>
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
            <th>RG</th>
            <th>Cidade</th>
            <th>Tipo Sanguíneo</th>
            <th>Fator</th>
            <th>Atualizar</th>
            <th>Excluir</th>
          </tr>
        </thead>

        <tbody>
            {pessoas.map((pessoa) => (
              <tr>
                <td>{pessoa.id}</td>
                <td>{pessoa.nome}</td>
                <td>{pessoa.rua}</td>
                <td>{pessoa.numero}</td>
                <td>{pessoa.complemento}</td>
                <td>{pessoa.rg}</td>
                <td>{pessoa.cidade.nome}</td>
                <td>{pessoa.sangue.tipo}</td>
                <td>{pessoa.sangue.fator}</td>
                <td><Link to={`/pessoas/update/${pessoa.id}`}>Atualizar</Link></td>
                <td><button onClick={()=>handleDelePessoa(pessoa.id)}>Excluir</button></td>
              </tr>
            ))}
        </tbody>

      </table>
    </div>

  );
};

export default ListPessoas