// Estilos
import styleButtons from "./ButtonsGlobal.module.scss";

// Imagens
import whatsapp from "../../assets/svg/whatsapp.svg";
import arrow from "../../assets/svg/arrowTop.svg";

const ButtonsGlobal = () => {
  function scrollTop() {
    window.scrollTo(0, 0);
  }

  return (
    <div className={styleButtons["buttonsGlobal"]}>
      <a
        href="https://api.whatsapp.com/send?phone=5511952353969"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={whatsapp} alt="WhatsApp" />
      </a>

      <div>
        <img src={arrow} onClick={scrollTop} alt="Voltar para cima" />
      </div>
    </div>
  );
};

export default ButtonsGlobal;
