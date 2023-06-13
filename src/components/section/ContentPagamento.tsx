// Estilos
import styleContentInstitucional from "./ContentInstitucional.module.scss";

const ContentPagamento = () => {
  return (
    <div className={styleContentInstitucional["contentInstitucional"]}>
      <h2>Forma de Pagamento</h2>

      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>

      <p>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old.
      </p>
    </div>
  );
};

export default ContentPagamento;
