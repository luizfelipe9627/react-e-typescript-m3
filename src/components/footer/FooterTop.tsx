// Imagens
import facebook from "../../assets/svg/facebook.svg";
import instragrm from "../../assets/svg/instagram.svg";
import twitter from "../../assets/svg/twitter.svg";
import youtube from "../../assets/svg/youtube.svg";
import linkedin from "../../assets/svg/linkedin.svg";

// Estilos
import styleFooterTop from "./FooterTop.module.scss";

const FooterTop = () => {
  return (
    <div className={styleFooterTop["footerTop"]}>
      <div className={styleFooterTop["footerTop-institucional"]}>
        <h3>Institucional</h3>
        <ul>
          <li>
            <a href="#quem-somos">Quem Somos</a>
          </li>
          <li>
            <a href="#politica-de-privacidade">Politica de Privacidade</a>
          </li>
          <li>
            <a href="#seguranca">Segurança</a>
          </li>
          <li>
            <a href="#seja-revendedor">Seja um Revendedor</a>
          </li>
        </ul>
      </div>

      <div className={styleFooterTop["footerTop-duvidas"]}>
        <h3>Dúvidas</h3>
        <ul>
          <li>
            <a href="#entrega">Entrega</a>
          </li>
          <li>
            <a href="#pagamento">Pagamento</a>
          </li>
          <li>
            <a href="#seguranca">Troca e Devoluções</a>
          </li>
          <li>
            <a href="#duvidas-frequentes">Dúvidas Frequentes</a>
          </li>
        </ul>
      </div>

      <div className={styleFooterTop["footerTop-fale-conosco"]}>
        <h3>Fale Conosco</h3>
        <p>Atendimento Ao Consumidor</p>
        <p>(11) 4159-9504</p>
        <p>Atendimento Online</p>
        <p>(11) 99433-8825</p>
      </div>

      <div className={styleFooterTop["footerTop-icons"]}>
        <div className={styleFooterTop["footerTop-icons-wrapper"]}>
          <a href="#facebook">
            <img src={facebook} alt="Facebook" />
          </a>
          <a href="#instagram">
            <img src={instragrm} alt="Instagram" />
          </a>
          <a href="#twiiter">
            <img src={twitter} alt="Twitter" />
          </a>
          <a href="#youtube">
            <img src={youtube} alt="YouTube" />
          </a>
          <a href="#linkedin">
            <img src={linkedin} alt="LinkedIn" />
          </a>
        </div>

        <p>www.loremipsum.com</p>
      </div>
    </div>
  );
};

export default FooterTop;
