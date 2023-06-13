// Estilos
import styleBreadcrumb from "./Breadcrumb.module.scss";

// Imagens
import home from "../../assets/svg/home.svg";
import arrow from "../../assets/svg/arrowRight.svg";

const Breadcrumb = () => {
  return (
    <div className={styleBreadcrumb["breadcrumb"]}>
      <img src={home} alt="Home" />
      <img src={arrow} alt="Flecha" />
      <p>Institucional</p>
    </div>
  );
};

export default Breadcrumb;
