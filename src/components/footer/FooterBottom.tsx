// Imagens
import mastercard from "../../assets/img/master.png";
import visa from "../../assets/img/visa.png";
import diners from "../../assets/img/diners.png";
import elo from "../../assets/img/elo.png";
import hiper from "../../assets/img/hiper.png";
import pagseguro from "../../assets/img/pagseguro.png";
import boleto from "../../assets/img/boleto.png";
import vtexcertified from "../../assets/img/vtex.png";

import m3 from "../../assets/svg/m3.svg";
import vtex from "../../assets/svg/vtex.svg";

// Estilos
import styleFooterBottom from "./FooterBottom.module.scss";

const FooterBottom = () => {
  return (
    <div className={styleFooterBottom["footerBottom"]}>
      <div className={styleFooterBottom["footerBottom-text"]}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </p>
      </div>

      <div className={styleFooterBottom["footerBottom-icons"]}>
        <div>
          <img src={mastercard} alt="MasterCard" />
        </div>

        <div>
          <img src={visa} alt="Visa" />
        </div>

        <div>
          <img src={diners} alt="Diners" />
        </div>

        <div>
          <img src={elo} alt="Elo" />
        </div>

        <div>
          <img src={hiper} alt="HiperCard" />
        </div>

        <div>
          <img src={pagseguro} alt="PagSeguro" />
        </div>

        <div>
          <img src={boleto} alt="Boleto" />
        </div>

        <span></span>

        <div>
          <img src={vtexcertified} alt="VTEX" />
        </div>
      </div>

      <div className={styleFooterBottom["footerBottom-credits"]}>
        <div className={styleFooterBottom["footerBottom-credits-powered"]}>
          <p>Powered by</p>
          <img src={vtex} alt="VTEX" />
        </div>

        <div className={styleFooterBottom["footerBottom-credits-developed"]}>
          <p>Developed by</p>
          <img src={m3} alt="M3" />
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
