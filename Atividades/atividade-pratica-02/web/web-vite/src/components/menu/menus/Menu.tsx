import { Link } from "react-router-dom";
//import "./menu.css"

const Menu = () => {

  return (
    <div>
      <h2>Controle de Doação de Sangue</h2>
      <ul>
        <li><Link to = "/estados">Estados</Link></li>
        <li><Link to = "/cidades">Cidades</Link></li>
        <li><Link to = "/pessoas">Pessoas</Link></li>
        <li><Link to = "/tipos">Tipos Sanguineos</Link></li>
        <li><Link to = "/locais">Locais de Doações</Link></li>
        <li><Link to = "/doacoes">Doações</Link></li>
      </ul>
    </div>
  );

}

export default Menu