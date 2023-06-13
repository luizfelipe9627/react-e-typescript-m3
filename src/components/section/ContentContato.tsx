// Estilos
import styleContentContato from "./ContentContato.module.scss";

const ContentContato = () => {
  return (
    <div className={styleContentContato["contentContato"]}>
      <h2>Preencha o formulário</h2>

      <form>
        <div className={styleContentContato["infosForm"]}>
          <label htmlFor="nome">Nome</label>
          <input type="text" id="nome" placeholder="Seu nome completo"/>

          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" placeholder="Seu e-mail"/>

          <label htmlFor="cpf">CPF</label>
          <input type="text" id="cpf" placeholder="000.000.000-00"/>

          <label htmlFor="nascimento">Data de Nascimento</label>
          <input type="text" id="nascimento" placeholder="00.00.0000"/>

          <label htmlFor="telefone">Telefone</label>
          <input type="text" id="telefone" placeholder="(00) 00000-0000"/>

          <label htmlFor="instagram">Instagram</label>
          <input type="text" id="instagram" placeholder="@seuuser"/>
        </div>

        <div className={styleContentContato["checkboxForm"]}>
          <label htmlFor="termos">
            <span>*</span>
            <p>Declaro que li e aceito</p>
            </label>
          <input type="checkbox" id="termos" />
        </div>
        
        <button>Cadastre-se</button>
      </form>
    </div>
  );
};

export default ContentContato;
