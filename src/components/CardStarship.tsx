import { ButtonCheckout } from ".";
import { ICardCheckout } from "../@types";

export function CardStarship({ image, name, model, price }: ICardCheckout) {
  return (
    <>
      <div className="flex bg-zinc-900 w-auto rounded-md m-8 justify-start">
        <div className="relative w-1/2 sm:w-1/3 md:w-3/5 h-full ">
          <img
            src={image}
            alt={name}
            className=" object-cover w-full h-full rounded-md"
          />
        </div>
        <div className="flex flex-col justify-center ">
          <div className="flex flex-col  ml-2 mt-14 w-auto h-24">
            <span className="text-sm text-left font-bold text-slate-200">
              {name}
            </span>
            <span className="text-sm text-left w-60 flex-wrap font-medium text-zinc-500">
              <strong>Model:</strong> {model}
            </span>
            <span className="text-sm text-left font-medium text-zinc-500">
              <strong>Price:</strong> $ {price}
            </span>
          </div>
          <div className="flex items-end p-2 justify-center mb-2">
            <ButtonCheckout
              name={name}
              model={model}
              price={price}
              image={image}
            />
          </div>
        </div>
      </div>
    </>
  );
}
