import viacep from "../data/services/viacep";
import { FormikValues } from "formik";

export async function handleZipCodeBlur(formik: FormikValues) {
  const zipCode = formik.values?.zip?.replace(/\D/g, "");

  if (zipCode) {
    const response = await viacep.get(`/${zipCode}/json/`);
    const data = response.data;

    formik.setValues({
      ...formik.values,
      zip: data.cep || "",
      address: data.logradouro || "",
      address_number: data.numero || "",
      complement: data.complemento || "",
      city: data.localidade || "",
      state: data.uf || "",
    });
  }
}
