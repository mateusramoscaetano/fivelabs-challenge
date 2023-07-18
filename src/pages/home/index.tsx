import { useEffect, useState } from "react";
import api from "../../data/services/api";

import { Vehicle } from "../../@types";
import { CardStarship } from "../../components";
import { toastError } from "../../helpers";

export function Home() {
  const [starships, setStarships] = useState<Vehicle[]>([] as Vehicle[]);

  async function getAllVehicles() {
    try {
      const response = await api.get("/starships");
      const { data } = response;

      setStarships(data.results);
    } catch (error) {
      toastError("Internal Server Error");
    }
  }

  useEffect(() => {
    getAllVehicles();
  }, []);

  return (
    <>
      <div className="  bg-[url('/sky.jpg')]  bg-cover bg-repeat  flex-1  w-full min-h-screen">
        <main className="pl-48 pr-48 w-screen min-h-screen grid grid-cols-3 justify-center">
          {starships.map((starship) => (
            <CardStarship
              key={starship.name}
              name={starship.name}
              price={starship.cost_in_credits}
              model={starship.model}
              image={`/image-${starship.name.replace(/ /g, "_")}.PNG`}
            />
          ))}
        </main>
      </div>
    </>
  );
}
