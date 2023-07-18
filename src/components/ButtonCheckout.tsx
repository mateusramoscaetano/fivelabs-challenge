import { ICardCheckout } from "../@types";
import { useNavigate } from "react-router-dom";
import storeVehicle from "../store/VehicleStore";

interface ButtonCheckoutProps extends ICardCheckout {
  fullWidth?: boolean;
}

export function ButtonCheckout({ fullWidth, ...rest }: ButtonCheckoutProps) {
  const vehicle = rest;

  const navigate = useNavigate();

  const handleClick = async () => {
    storeVehicle.removeFromCart();
    storeVehicle.addToCart(vehicle);

    navigate("/checkout");
  };

  return (
    <button
      onClick={handleClick}
      className={`flex ${
        fullWidth ? "w-full" : "w-60"
      } h-12 items-center text-center 
      justify-center cursor-pointer bg-slate-800 hover:bg-opacity-90 text-white rounded-md`}
    >
      Buy
    </button>
  );
}
