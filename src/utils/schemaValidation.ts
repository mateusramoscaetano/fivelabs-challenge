import * as yup from "yup";

const validationSchema = yup.object({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup
    .string()
    .required("Phone is required")
    .test("valid-phone", "Invalid phone", (value) => {
      const strippedValue = value.replace(/\D/g, "");
      return strippedValue.length === 11 || strippedValue.length === 10;
    }),
  zip: yup.string().required("Zip code is required"),
  address: yup.string().required("Address is required"),
  address_number: yup.string().required("Address number is required"),
  city: yup.string().required("City is required"),
  state: yup.string().required("State is required"),
  complement: yup.string().required("Complement is required"),
  cpf_cnpj: yup
    .string()
    .required("CPF or CNPJ is required")
    .test("valid-cpf-cnpj", "Invalid CPF or CNPJ", (value) => {
      const strippedValue = value.replace(/\D/g, "");
      return strippedValue.length === 11 || strippedValue.length === 14;
    }),
});

export default validationSchema;
