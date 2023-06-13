// Estilos
import styleNav from "./Nav.module.scss";

const Nav = () => {
  return (
    <nav className={styleNav["nav"]}>
      <ul>
        <li>
          <a href="#cursos">Cursos</a>
        </li>

        <li>
          <a href="#saiba-mais">Saiba mais</a>
        </li>

        <li>
          <a href="#institucionais">Institucionais</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
