// Bibliotecas
import { Routes, Route } from "react-router-dom";

// Estilos
import styleContentInstitucional from "./ContentInstitucional.module.scss";

import ContentPagamento from "./ContentPagamento";
import ContentEntrega from "./ContentEntrega";
import ContentTroca from "./ContentTroca";
import ContentSeguranca from "./ContentSeguranca";
import ContentContato from "./ContentContato";
import ContentSobre from "./ContentSobre";

const ContentInstitucional = () => {
  return (
    <div className={styleContentInstitucional["contentInstitucional"]}>
      <Routes>
        <Route path="/" element={<ContentSobre />} />
        <Route path="/sobre" element={<ContentSobre />} />
        <Route path="/forma-de-pagamento" element={<ContentPagamento />} />
        <Route path="/entrega" element={<ContentEntrega />} />
        <Route path="/troca-e-devolucao" element={<ContentTroca />} />
        <Route path="/seguranca-e-privacidade" element={<ContentSeguranca />} />
        <Route path="/contato" element={<ContentContato />} />
      </Routes>
    </div>
  );
};

export default ContentInstitucional;
