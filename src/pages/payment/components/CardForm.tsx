import { useFormik } from "formik";
import validationSchema from "../../../utils/schemaValidationPayment";

import {
  applyMaskCreditCard,
  applyMaskDate,
  toastError,
  toastSucess,
} from "../../../helpers";
import { ButtonFinish } from "./ButtonFinish";
import { ButtonCancel } from "./ButtonCancel";
import { FormInput } from "../../../components";

export function CardForm() {
  const formik = useFormik({
    initialValues: {
      card_number: "",
      cvv: "",
      name: "",
      expiration: "",
    },
    validationSchema: validationSchema,
    onSubmit: () => {},
  });

  const handleSubmit = async () => {
    const errors = await formik.validateForm();
    if (Object.keys(errors).length === 0) {
      toastSucess("deu boa");
    } else {
      toastError(formik.errors.card_number || "Invalid card");
    }
  };

  return (
    <>
      <form
        className="flex flex-col justify-center items-center bg-slate-100 rounded-sm"
        onSubmit={formik.handleSubmit}
      >
        <h1 className="text-center font-bold w-80 text-zinc-900 text-xl mb-2">
          Credit Card
        </h1>

        <FormInput
          type="text"
          id="name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          placeholder="Printed Name"
        />

        <FormInput
          type="text"
          id="card_number"
          name="card_number"
          value={applyMaskCreditCard(formik.values.card_number)}
          onChange={formik.handleChange}
          placeholder="Card number"
        />

        <FormInput
          type="text"
          id="cvv"
          name="cvv"
          value={formik.values.cvv}
          onChange={formik.handleChange}
          placeholder="cvv"
        />

        <FormInput
          type="text"
          id="expiration"
          name="expiration"
          value={applyMaskDate(formik.values.expiration)}
          onChange={formik.handleChange}
          placeholder="MM-yy"
        />

        <ButtonFinish title="Finish" handleSubmit={handleSubmit} />
        <ButtonCancel />
      </form>
    </>
  );
}
