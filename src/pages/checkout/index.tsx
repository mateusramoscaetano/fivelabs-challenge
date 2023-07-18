import { CardCheckout } from "./components/CardCheckout";
import { FormUser } from "./components/FormUser";
import store from "../../store/VehicleStore";
import { toJS } from "mobx";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function CheckoutPage() {
  const data = toJS(store.cart);
  const { name, price, model, image } = data[0];
  const navigate = useNavigate();

  useEffect(() => {
    if (!data.length) {
      navigate("/");
    }
  }, []);

  if (!data.length) {
    return null;
  }
  return (
    <>
      <div
        className="bg-[url('/sky.jpg')] min-h-screen bg-cover flex flex-col lg:flex-row 
        items-center gap-12 p-8 lg:justify-center"
      >
        <CardCheckout name={name} model={model} price={price} image={image} />

        <FormUser />
      </div>
    </>
  );
}
