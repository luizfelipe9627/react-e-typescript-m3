// Bibliotecas
import { useContext } from "react";

// Componentes
import { MenuContext } from "./MenuContext";
import MenuOpened from "./MenuOpened";

// Imagens
import openMenu from "../../assets/svg/openMenu.svg";

const Menu = () => {
  const { isOpened, setIsOpened } = useContext(MenuContext);

  return (
    <div>
      <MenuOpened isOpened={isOpened} setIsOpened={setIsOpened} />

      <img src={openMenu} alt="Abrir menu" onClick={() => setIsOpened(true)} className="menu-icon"/>
    </div>
  );
};

export default Menu;
