// Estilos
import styleUser from "./User.module.scss";

// Imagem
import cart from "../../assets/svg/cart.svg";

const User = () => {
  return (
    <div className={styleUser["user"]}>
      <a href="#entrar">Entrar</a>

      <a href="#carrinho">
        <img src={cart} alt="Carrinho" />
      </a>
    </div>
  );
};

export default User;
