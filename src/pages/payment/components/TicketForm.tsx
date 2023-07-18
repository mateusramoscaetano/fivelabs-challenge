import { toJS } from "mobx";
import store from "../../../store/UserStore";
import storeVehicle from "../../../store/VehicleStore";
import { ButtonCancel } from "./ButtonCancel";
import { ButtonFinish } from "./ButtonFinish";
import { FormInput } from "../../../components";
import { applyMaskCpfOrCnpj, toastError, toastSucess } from "../../../helpers";
import { useFormik } from "formik";
import { validationSchemaTicket } from "../../../utils/schemaValidationPayment";

export function TicketForm() {
  const data = toJS(store.user);
  const vehicle = toJS(storeVehicle.cart);

  const formik = useFormik({
    initialValues: {
      address: data[0].address,
      address_number: data[0].address_number,
      cpf: data[0].cpf_cnpj,
      name: `${data[0].firstName} ${data[0].lastName}`,
      price: vehicle[0].price,
    },
    validationSchema: validationSchemaTicket,
    onSubmit: () => {},
  });

  const handleSubmit = async () => {
    const errors = await formik.validateForm();
    if (Object.keys(errors).length === 0) {
      toastSucess("Successully buy");
    } else {
      toastError(formik.errors.cpf || "All fields are required ");
    }
  };

  return (
    <>
      <form
        className="flex flex-col justify-center items-center bg-slate-100  rounded-sm"
        onSubmit={handleSubmit}
      >
        <h1 className="text-center font-bold w-80 text-zinc-900 text-xl mb-2">
          Ticket
        </h1>

        <FormInput
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
          placeholder="Printed Name"
        />

        <FormInput
          type="text"
          id="address"
          name="address"
          onChange={formik.handleChange}
          value={formik.values.address}
          placeholder="Address"
        />

        <FormInput
          type="text"
          id="address_number"
          name="address_number"
          onChange={formik.handleChange}
          value={formik.values.address_number}
          placeholder="House Number"
        />

        <FormInput
          type="text"
          id="cpf"
          name="cpf"
          onChange={formik.handleChange}
          value={applyMaskCpfOrCnpj(formik.values.cpf)}
          placeholder="CPF or CNPJ"
        />

        <FormInput
          type="text"
          id="price"
          name="price"
          onChange={() => formik.values.price}
          value={`$ ${formik.values.price}`}
          placeholder="CPF or CNPJ"
        />

        <ButtonFinish title="Generate Ticket" handleSubmit={handleSubmit} />
        <ButtonCancel />
      </form>
    </>
  );
}
