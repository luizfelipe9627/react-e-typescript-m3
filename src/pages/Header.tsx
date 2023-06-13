// Componentes
import Logo from "../components/header/Logo";
import Form from "../components/header/Form";
import User from "../components/header/User";
import Nav from "../components/header/Nav";
import Menu from "../components/header/Menu";

import { MenuProvider } from "../components/header/MenuContext";

// Estilos
import styleHeaderWrapper from "../components/header/HeaderWrapper.module.scss";

const Header = () => {
  return (
    <header>
      <div className={styleHeaderWrapper["headerWrapper"]}>
        <MenuProvider>
          <Menu />
        </MenuProvider>

        <Logo />
        <Form />
        <User />
      </div>

      <Nav />
    </header>
  );
};

export default Header;
