// Bibliotecas
import React from "react";

// Estilos
import menuOpened from "./Menu.module.scss";

// Imagens
import menuClose from "../../assets/svg/closeMenu.svg";

interface MenuProps {
  isOpened: boolean;
  setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuOpened = ({ isOpened, setIsOpened }: MenuProps) => {
  return (
    <div
      className={
        isOpened
          ? `${menuOpened['menuWrapper']} ${menuOpened["menuOpened"]}`
          : `${menuOpened["menuWrapper"]}`
      }
    >
      <div className={menuOpened["menuContent"]}>
        <div className={menuOpened["menuContent-header"]}>
          <div>
            <a href="#entrar">Entrar</a>
          </div>

          <div>
            <img
              src={menuClose}
              alt="Fechar menu"
              onClick={() => setIsOpened(false)}
            />
          </div>
        </div>

        <nav className={menuOpened["menuContent-nav"]}>
          <ul>
            <li>Cursos</li>
            <li>Saiba mais</li>
            <li>Institucionais</li>
          </ul>
        </nav>
      </div>

      <div
        className={menuOpened["menuOverlay"]}
        onClick={() => setIsOpened(false)}
      />
    </div>
  );
};

export default MenuOpened;
