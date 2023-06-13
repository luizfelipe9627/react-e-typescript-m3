// Estilos
import styleForm from "./Form.module.scss";

// Imagem
import search from "../../assets/svg/search.svg";

const Form = () => {
  return (
    <form action="./" className={styleForm["form"]}>
      <input
        type="text"
        id="search"
        className={styleForm["form-search"]}
        placeholder="Buscar..."
        required
      />

      <button type="submit" className={styleForm["form-search-icon"]}>
        <img src={search} alt="Lupa de pesquisa" />
      </button>
    </form>
  );
};

export default Form;
