import { ICardCheckout } from "../@types";
import { useNavigate } from "react-router-dom";
import storeVehicle from "../store/VehicleStore";

export function ButtonCheckout(vehicle: ICardCheckout) {
  const navigate = useNavigate();

  const handleClick = async () => {
    storeVehicle.removeFromCart();
    storeVehicle.addToCart(vehicle);

    navigate("/checkout");
  };

  return (
    <button
      onClick={handleClick}
      className="flex w-60 h-12 items-center text-center justify-center cursor-pointer
       bg-slate-800 hover:bg-opacity-90 text-white rounded-md"
    >
      Buy
    </button>
  );
}
