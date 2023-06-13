// Estilos
import styleNewsletter from "./Newsletter.module.scss";

const Newsletter = () => {
  return (
    <div className={styleNewsletter["newsletter"]}>
      <div className={styleNewsletter["newsletter-wrapper"]}>
        <h2>Assine nossa newsletter</h2>

        <form className={styleNewsletter["newsletter-form"]}>
          <input type="email" id="email" placeholder="E-mail" required />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
