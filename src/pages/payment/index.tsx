import { useEffect, useState } from "react";
import { TicketForm } from "./components/TicketForm";
import { CardForm } from "./components/CardForm";
import storeVehicle from "../../store/VehicleStore";
import { toJS } from "mobx";
import { useNavigate } from "react-router-dom";

export function FormPayment() {
  const data = toJS(storeVehicle.cart);
  const navigate = useNavigate();
  const [view, setView] = useState("Credit");

  const handleViewChange = (selectedView: string) => {
    setView(selectedView);
  };

  useEffect(() => {
    if (data.length === 0) {
      navigate("/");
    }
  }, []);

  if (!data.length) {
    return <></>;
  }
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-[url('/sky.jpg')] bg-cover">
      <div className="flex flex-col justify-center items-center bg-slate-100 w-1/5 h-3/5 rounded-lg pl-24 pr-24">
        <nav className="flex text-slate-800 font-extrabold text-xl mt-8 w-full justify-between ">
          <h3
            className={`cursor-pointer ${
              view === "Credit" ? "text-blue-500 underline" : ""
            }`}
            onClick={() => handleViewChange("Credit")}
          >
            Credit Card
          </h3>
          <h3
            className={`cursor-pointer ${
              view === "Ticket" ? "text-blue-500 underline" : ""
            }`}
            onClick={() => handleViewChange("Ticket")}
          >
            Ticket
          </h3>
        </nav>

        <div className="flex justify-center items-center mt-8 w-full">
          {view === "Credit" ? <CardForm /> : <TicketForm />}
        </div>
      </div>
    </div>
  );
}
