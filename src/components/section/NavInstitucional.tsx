// Estilos
import styleNavInstitucional from "./NavInstitucional.module.scss";

const NavInstitucional = () => {
  return (
    <nav className={styleNavInstitucional["navInstitucional"]}>
      <ul>
        <li className={styleNavInstitucional["active"]} >
          <a href="sobre">Sobre</a>
        </li>

        <li>
          <a href="forma-de-pagamento">Forma de Pagamento</a>
        </li>

        <li>
          <a href="entrega">Entrega</a>
        </li>

        <li>
          <a href="troca-e-devolucao">Troca e Evolução</a>
        </li>

        <li>
          <a href="seguranca-e-privacidade">Segurança e Privacidade</a>
        </li>

        <li>
          <a href="contato">Contato</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavInstitucional;
