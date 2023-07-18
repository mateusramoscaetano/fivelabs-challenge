import * as yup from "yup";
import { parse, isAfter, isValid } from "date-fns";

const validationSchema = yup.object({
  card_number: yup
    .string()
    .required("Card number is required")
    .test("card-number-validate", "Is not a valid card number", (value) => {
      const strippedValue = value.replace(/\D/g, "");
      return strippedValue.length === 16;
    }),
  cvv: yup
    .string()
    .required("Cvv is required")
    .test("cvv-number-validate", "Is not a valid card number", (value) => {
      const strippedValue = value.replace(/\D/g, "");
      return strippedValue.length === 3;
    }),
  name: yup.string().required("Name is required"),
  expiration: yup
    .string()
    .required("Expiration is required")
    .test(
      "expiration-date-validate",
      "Is not a valid expiration date",
      (value) => {
        const strippedValue = value.replace(/\D/g, "");

        if (strippedValue.length !== 4) {
          return false;
        }

        const year = strippedValue.slice(2, 4);
        const month = strippedValue.slice(0, 2);

        const currentDate = new Date();
        const expirationDate = parse(
          `20${year}-${month}-01`,
          "yyyy-MM-dd",
          new Date()
        );

        return isAfter(expirationDate, currentDate) && isValid(expirationDate);
      }
    ),
});

const validationSchemaTicket = () => {
  return yup.object({
    name: yup.string().required("Printed Name is required"),
    address: yup.string().required("Address is required"),
    address_number: yup.string().required("Address number is required"),
    cpf_cnpj: yup
      .string()
      .required("CPF or CNPJ is required")
      .test("valid-cpf-cnpj", "Invalid CPF or CNPJ", (value) => {
        const strippedValue = value.replace(/\D/g, "");
        return strippedValue.length === 11 || strippedValue.length === 14;
      }),
  });
};

export { validationSchema, validationSchemaTicket };
