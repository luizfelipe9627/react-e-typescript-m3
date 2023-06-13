// Imagem
import logoM3 from "../../assets/svg/logo.svg";

// Estilo
import styleLogo from "./Logo.module.scss";

const Logo = () => {
  return (
    <a href="#logo">
      <img src={logoM3} alt="M3 Academy" className={styleLogo["logo"]} />
    </a>
  );
};

export default Logo;
