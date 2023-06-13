// Bibliotecas
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "react-headless-accordion";

// Estilos
import styleAccordionFooterTop from "./AccordionFooterTop.module.scss";

const AccordionFooterTop = () => {
  return (
    <Accordion className={styleAccordionFooterTop["accordionFooterTop"]}>
      <AccordionItem>
        <AccordionHeader
          className={styleAccordionFooterTop["accordionFooterTop-title"]}
        >
          <h3>Institucional</h3>
        </AccordionHeader>

        <AccordionBody>
          <a href="#quem-somos">Quem Somos</a>
          <a href="#politica-de-privacidade">Politica de Privacidade</a>
          <a href="#seguranca">Segurança</a>
          <a href="#seja-revendedor">Seja um Revendedor</a>
        </AccordionBody>
      </AccordionItem>

      <AccordionItem>
        <AccordionHeader>
          <h3>Dúvidas</h3>
        </AccordionHeader>

        <AccordionBody>
          <a href="#entrega">Entrega</a>
          <a href="#pagamento">Pagamento</a>
          <a href="#seguranca">Troca e Devoluções</a>
          <a href="#duvidas-frequentes">Dúvidas Frequentes</a>
        </AccordionBody>
      </AccordionItem>

      <AccordionItem>
        <AccordionHeader>
          <h3>Fale Conosco</h3>
        </AccordionHeader>

        <AccordionBody>
          <p>Atendimento Ao Consumidor</p>
          <p>(11) 4159-9504</p>
          <p>Atendimento Online</p>
          <p>(11) 99433-8825</p>
        </AccordionBody>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionFooterTop ;
