// Bibliotecas
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// Estilos
import "../src/styles/utils/all.scss";

// Componentes
import Home from "./pages/Home";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <Home />
  </BrowserRouter>
);
