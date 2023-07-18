import { useEffect, useState } from "react";
import api from "../../data/services/api";

import { Vehicle } from "../../@types";
import { CardStarship, Header } from "../../components";

export function Main() {
  const [starships, setStarships] = useState<Vehicle[]>([]);

  async function getAllVehicles() {
    try {
      const response = await api.get("/starships");

      setStarships(response.data.results);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getAllVehicles();
  }, []);

  return (
    <>
      <div className="bg-[url('/sky.jpg')] bg-repeat-y bg-cover  bg-center flex-1  w-screen min-h-screen">
        <Header />
        <main className="mt-12 pl-48 pr-48 w-screen min-h-screen grid grid-cols-3 justify-center">
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
