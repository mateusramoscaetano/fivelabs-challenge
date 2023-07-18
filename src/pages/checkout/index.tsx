import { CardCheckout } from "./components/CardCheckout";
import { FormUser } from "./components/FormUser";
import store from "../../store/VehicleStore";
import { toJS } from "mobx";
import { Header } from "../../components/Header";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function CheckoutPage() {
  const data = toJS(store.cart);
  const navigate = useNavigate();

  useEffect(() => {
    if (data.length === 0) {
      navigate("/");
    }
  }, []);

  if (!data.length) {
    return <></>;
  }
  return (
    <>
      <Header />
      <div className="bg-[url('/sky.jpg')] bg-cover flex  w-screen h-screen items-center justify-center ">
        <CardCheckout
          name={data[0].name}
          model={data[0].model}
          price={data[0].price}
          image={data[0].image}
        />

        <FormUser />
      </div>
    </>
  );
}
