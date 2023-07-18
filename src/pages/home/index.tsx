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
      <div className="bg-[url('/sky.jpg')] bg-cover bg-repeat w-full min-h-screen">
        <main
          className="px-6 md:px-8 lg:px-14 w-screen min-h-screen grid grid-cols-1 
          md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 
          justify-items-center pt-10"
        >
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
