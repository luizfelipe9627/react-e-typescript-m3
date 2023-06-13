/* eslint-disable react-refresh/only-export-components */
// Bibliotecas
import * as Yup from "yup";

export default Yup.object().shape({
  nome: Yup.string()
    .required("*Campo Obrigatório.")
    .min(3, "Insira seu nome completo."),
  email: Yup.string().required("*Campo Obrigatório.").email("Email inválido."),
  cpf: Yup.string()
    .required("*Campo Obrigatório.")
    .min(11, "CPF inválido.")
    .max(11, "CPF inválido."),
  nascimento: Yup.string()
    .required("*Campo Obrigatório.")
    .min(8, "Data de nascimento inválido.")
    .max(8, "Data de nascimento inválido."),
  telefone: Yup.string()
    .required("*Campo Obrigatório.")
    .min(11, "Telefone inválido.")
    .max(11, "Telefone inválido."),
  termos: Yup.boolean().oneOf([true], "*"),
});
