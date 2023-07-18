import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import store from "../../../store/UserStore";
import validationSchema from "../../../utils/schemaValidation";
import { ButtonNext } from "./ButtonNext";

import {
  applyMask,
  applyNumberMask,
  handleZipCodeBlur,
  isCpfOrCnpj,
  isNumber11,
} from "../../../helpers";
import { FormInput } from "../../../components";

export function FormUser() {
  const [isCpf, setIsCpf] = useState(true);
  const [isPhone11, setIsPhone11] = useState(true);

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      cpf_cnpj: "",
      zip: "",
      address: "",
      address_number: "",
      complement: "",
      city: "",
      state: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      store.removeFromUser();
      store.addToUser(values);
      navigate("/payment");
    },
  });

  const handleCpfCnpjChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    formik.handleChange(event);
    isCpfOrCnpj(event.target.value) ? setIsCpf(true) : setIsCpf(false);
  };

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    formik.handleChange(event);
    isNumber11(event.target.value) ? setIsPhone11(true) : setIsPhone11(false);
  };

  return (
    <form
      className="flex flex-col justify-center items-center bg-slate-100 w-1/5 h-4/5 rounded-sm"
      onSubmit={formik.handleSubmit}
    >
      <h1 className="text-center font-extrabold text-zinc-900 text-lg mb-2">
        Checkout
      </h1>
      <FormInput
        id="firstName"
        name="firstName"
        type="text"
        value={formik.values.firstName}
        onChange={formik.handleChange}
        placeholder="First Name"
        error={formik.touched.firstName && formik.errors.firstName}
      />

      <FormInput
        id="lastName"
        name="lastName"
        type="text"
        value={formik.values.lastName}
        onChange={formik.handleChange}
        placeholder="Last Name"
        error={formik.touched.lastName && formik.errors.lastName}
      />

      <FormInput
        id="email"
        name="email"
        type="text"
        value={formik.values.email}
        onChange={formik.handleChange}
        placeholder="Email"
        error={formik.touched.email && formik.errors.email}
      />

      <FormInput
        id="phone"
        name="phone"
        type="text"
        value={applyNumberMask(formik.values.phone, isPhone11)}
        onChange={handlePhoneChange}
        placeholder="Phone"
        error={formik.touched.phone && formik.errors.phone}
      />

      <FormInput
        id="cpf_cnpj"
        name="cpf_cnpj"
        type="text"
        value={applyMask({
          value: formik.values.cpf_cnpj,
          isCpf,
        })}
        onChange={handleCpfCnpjChange}
        placeholder="Cpf or Cnpj"
        error={formik.touched.cpf_cnpj && formik.errors.cpf_cnpj}
      />

      <FormInput
        id="zip"
        name="zip"
        type="text"
        value={formik.values.zip}
        onChange={formik.handleChange}
        onBlur={() => handleZipCodeBlur(formik)}
        placeholder="Zip Code"
        error={formik.touched.zip && formik.errors.zip}
      />

      <FormInput
        id="address"
        name="address"
        type="text"
        value={formik.values.address}
        onChange={formik.handleChange}
        placeholder="Address"
        error={formik.touched.address && formik.errors.address}
      />

      <FormInput
        id="address_number"
        name="address_number"
        type="text"
        value={formik.values.address_number}
        onChange={formik.handleChange}
        placeholder="Address number"
        error={formik.touched.address_number && formik.errors.address_number}
      />

      <FormInput
        id="complement"
        name="complement"
        type="text"
        value={formik.values.complement}
        onChange={formik.handleChange}
        placeholder="Complement"
        error={formik.touched.complement && formik.errors.complement}
      />

      <FormInput
        id="city"
        name="city"
        type="text"
        value={formik.values.city}
        onChange={formik.handleChange}
        placeholder="City"
        error={formik.touched.city && formik.errors.city}
      />

      <FormInput
        id="state"
        name="state"
        type="text"
        value={formik.values.state}
        onChange={formik.handleChange}
        placeholder="State"
        error={formik.touched.state && formik.errors.state}
      />

      <ButtonNext />
    </form>
  );
}
