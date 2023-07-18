import { ButtonCheckout } from ".";
import { ICardCheckout } from "../@types";

export function CardStarship({ image, name, model, price }: ICardCheckout) {
  return (
    <>
      <article
        className="flex justify-start bg-zinc-900 rounded-md w-full h-52 lg:h-[280px]
        max-w-[500px]"
      >
        <div className="w-[50%] h-full shrink-0 p-2">
          <img
            src={image}
            alt={name}
            className="object-contain h-full w-full rounded-md"
          />
        </div>
        <div className="flex flex-col gap-4 lg:gap-8 justify-end w-full p-2 mb-6">
          <div className="flex flex-col text-sm">
            <h1 className="font-bold text-slate-200">{name}</h1>
            <h2 className="font-medium text-zinc-500">
              <strong>Model:</strong> {model}
            </h2>
            <h2 className="font-medium text-zinc-500">
              <strong>Price:</strong> $ {price}
            </h2>
          </div>
          <ButtonCheckout
            fullWidth
            name={name}
            model={model}
            price={price}
            image={image}
          />
        </div>
      </article>
    </>
  );
}
