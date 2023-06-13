// Bibliotecas
import { Routes, Route, NavLink } from "react-router-dom";

// Componentes
import ContentPagamento from "./ContentPagamento";
import ContentEntrega from "./ContentEntrega";
import ContentTroca from "./ContentTroca";
import ContentSeguranca from "./ContentSeguranca";
import FormContato from "./FormContato";
import ContentSobre from "./ContentSobre";

// Estilos
import styleNavInstitucional from "./NavInstitucional.module.scss";
import styleSection from "./Section.module.scss";

const Institucional = () => {
  return (
    <section className={styleSection["section"]}>
      <nav className={styleNavInstitucional["navInstitucional"]}>
        <ul>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? styleNavInstitucional.active : undefined
              }
              to="/"
            >
              Sobre
            </NavLink>
          </li>

          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? styleNavInstitucional.active : undefined
              }
              to="/forma-de-pagamento"
            >
              Forma de Pagamento
            </NavLink>
          </li>

          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? styleNavInstitucional.active : undefined
              }
              to="/entrega"
            >
              Entrega
            </NavLink>
          </li>

          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? styleNavInstitucional.active : undefined
              }
              to="/troca-e-devolucao"
            >
              Troca e Evolução
            </NavLink>
          </li>

          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? styleNavInstitucional.active : undefined
              }
              to="/seguranca-e-privacidade"
            >
              Segurança e Privacidade
            </NavLink>
          </li>

          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? styleNavInstitucional.active : undefined
              }
              to="/contato"
            >
              Contato
            </NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<ContentSobre />} />
        <Route path="/sobre" element={<ContentSobre />} />
        <Route path="/forma-de-pagamento" element={<ContentPagamento />} />
        <Route path="/entrega" element={<ContentEntrega />} />
        <Route path="/troca-e-devolucao" element={<ContentTroca />} />
        <Route path="/seguranca-e-privacidade" element={<ContentSeguranca />} />
        <Route path="/contato" element={<FormContato />} />
      </Routes>
    </section>
  );
};

export default Institucional;
