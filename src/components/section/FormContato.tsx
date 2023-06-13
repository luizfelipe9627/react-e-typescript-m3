// Bibliotecas
import { Formik, Form, Field, ErrorMessage } from "formik";

// Componentes
import FormSchema from "./FormSchema";

// Estilos
import styleFormContato from "./FormContato.module.scss";

const FormContato = () => {
  interface FormikValues {
    nome: string;
    email: string;
    cpf: string;
    nascimento: string;
    telefone: string;
    instagram: string;
    termos: boolean;
  }

  const initialValues = {
    nome: "",
    email: "",
    cpf: "",
    nascimento: "",
    telefone: "",
    instagram: "",
    termos: false,
  };

  return (
    <div className={styleFormContato["contentContato"]}>
      <Formik
        onSubmit={(values: FormikValues, actions) => {
          actions.resetForm();
          console.log(values);
        }}
        initialValues={initialValues}
        validationSchema={FormSchema}
      >
        {({ errors, touched }) => (
          <Form>
            <h2>Preencha o formulário</h2>

            <div className={styleFormContato["infosForm"]}>
              <label htmlFor="nome">Nome</label>
              <Field
                name="nome"
                id="nome"
                className={errors.nome && touched.nome && "Invalid"}
                placeholder="Seu nome completo"
              />
              <ErrorMessage
                component="span"
                name="nome"
                className={styleFormContato["formInvalid"]}
              />
            </div>

            <div className={styleFormContato["infosForm"]}>
              <label htmlFor="email">E-mail</label>
              <Field
                name="email"
                id="email"
                className={errors.email && touched.email && "Invalid"}
                placeholder="Seu e-mail"
              />
              <ErrorMessage
                component="span"
                name="email"
                className={styleFormContato["formInvalid"]}
              />
            </div>

            <div className={styleFormContato["infosForm"]}>
              <label htmlFor="cpf">CPF</label>
              <Field
                name="cpf"
                id="cpf"
                className={errors.cpf && touched.cpf && "Invalid"}
                placeholder="000.000.000-00"
              />
              <ErrorMessage
                component="span"
                name="cpf"
                className={styleFormContato["formInvalid"]}
              />
            </div>

            <div className={styleFormContato["infosForm"]}>
              <label htmlFor="nascimento">Data de Nascimento</label>
              <Field
                name="nascimento"
                id="nascimento"
                className={errors.nascimento && touched.nascimento && "Invalid"}
                placeholder="00.00.0000"
              />
              <ErrorMessage
                component="span"
                name="nascimento"
                className={styleFormContato["formInvalid"]}
              />
            </div>

            <div className={styleFormContato["infosForm"]}>
              <label htmlFor="telefone">Telefone</label>
              <Field
                name="telefone"
                id="telefone"
                className={errors.nascimento && touched.nascimento && "Invalid"}
                placeholder="(00) 00000-0000"
              />
              <ErrorMessage
                component="span"
                name="telefone"
                className={styleFormContato["formInvalid"]}
              />
            </div>

            <div className={styleFormContato["infosForm"]}>
              <label htmlFor="instagram">Instagram</label>
              <Field
                name="instagram"
                id="instagram"
                className={errors.instagram && touched.instagram && "Invalid"}
                placeholder="@seuuser"
              />
              <ErrorMessage
                component="span"
                name="instagram"
                className={styleFormContato["formInvalid"]}
              />
            </div>

            <div className={styleFormContato["checkboxForm"]}>
              <label htmlFor="termos">Declaro que li e aceito</label>
              <Field
                type="checkbox"
                id="termos"
                name="termos"
                className={errors.termos && touched.termos && "Invalid"}
              />
              <ErrorMessage
                component="span"
                name="termos"
                className={styleFormContato["formInvalid-checkbox"]}
              />
            </div>

            <button type="submit">Cadastre-se</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormContato;
