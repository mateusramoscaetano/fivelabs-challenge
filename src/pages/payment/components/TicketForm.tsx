import { toJS } from "mobx";
import store from "../../../store/UserStore";
import storeVehicle from "../../../store/VehicleStore";
import { ButtonCancel } from "./ButtonCancel";
import { ButtonFinish } from "./ButtonFinish";
import { FormInput } from "../../../components";
export function TicketForm() {
  function handleSubmit() {
    console.log("submit");
  }

  const data = toJS(store.user);
  const vehicle = toJS(storeVehicle.cart);

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
          className="text-zinc-500 h-8 p-2 mb-2 rounded-md enabled:hover:border-gray-400"
          type="text"
          id="name"
          name="name"
          onChange={() => console.log("changed")}
          value={`${data[0].firstName} ${data[0].lastName}`}
          placeholder="Printed Name"
        />

        <FormInput
          className="text-zinc-500 h-8 p-2 mb-2 rounded-md enabled:hover:border-gray-400"
          type="text"
          id="address"
          name="address"
          onChange={() => console.log("changed")}
          value={data[0].address}
          placeholder="Address"
        />

        <div className="flex flex-col w-60 text-sm">
          <input
            className="text-zinc-500 h-8 p-2 mb-2 rounded-md enabled:hover:border-gray-400"
            type="text"
            id="address_number"
            name="address_number"
            value={data[0].address_number}
            placeholder="House Number"
          />
        </div>

        <div className="flex flex-col w-60 text-sm">
          <input
            className="text-zinc-500 h-8 p-2 mb-2 rounded-md enabled:hover:border-gray-400"
            type="text"
            id="cpf"
            name="cpf"
            value={data[0].cpf_cnpj}
            placeholder="CPF or CNPJ"
          />
        </div>
        <div className="flex flex-col w-60 text-sm">
          <input
            className="text-zinc-500 h-8 p-2 mb-2 rounded-md enabled:hover:border-gray-400"
            type="text"
            id="price"
            name="price"
            value={`$ ${vehicle[0].price}`}
            placeholder="CPF or CNPJ"
          />
        </div>
        <ButtonFinish title="Generate Ticket" handleSubmit={handleSubmit} />
        <ButtonCancel />
      </form>
    </>
  );
}
