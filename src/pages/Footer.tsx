// Componentes
import Newsletter from "../components/footer/Newsletter";
import FooterTop from "../components/footer/FooterTop";
import FooterBottom from "../components/footer/FooterBottom";
import AccordionFooterTop from "../components/footer/AccordionFooterTop";

const Footer = () => {
  return (
    <footer>
      <Newsletter />
      <AccordionFooterTop />
      <FooterTop/>
      <FooterBottom/>
    </footer>
  );
};

export default Footer;
