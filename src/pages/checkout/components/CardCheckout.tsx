import { ICardCheckout } from "../../../@types";

export function CardCheckout({ image, name, model, price }: ICardCheckout) {
  return (
    <>
      <div
        className="bg-slate-100 flex flex-col justify-evenly rounded-md 
        w-full max-w-[31.25rem] lg:h-[450px]"
      >
        <div className="overflow-hidden">
          <img
            className="rounded-md w-full h-[11.25rem] object-contain"
            src={image}
            alt={name}
          />
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex flex-col items-center px-2 py-4">
            <span className="text-sm text-left font-bold text-zinc-800">
              {name}
            </span>
            <span className="text-sm text-left flex-wrap font-medium text-zinc-500">
              <strong>Model:</strong> {model}
            </span>
            <span className="text-sm text-left font-medium text-zinc-500">
              <strong>Price:</strong> $ {price}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
