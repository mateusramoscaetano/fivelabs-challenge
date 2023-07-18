import { ButtonCheckout } from ".";
import { MyComponentProps } from "../@types";

export function CardStarship(props: MyComponentProps) {
  return (
    <>
      <div className="bg-slate-100 flex rounded-md m-8 justify-start">
        <div className="relative w-80 h-64 mr-12">
          <img
            src={props.image}
            alt={props.name}
            className=" w-full h-full rounded-md object-cover object-left"
          />
        </div>
        <div className="flex flex-col justify-between h-64">
          <div className="flex flex-col  ml-2 mt-14 w-auto h-24">
            <span className="text-sm text-left font-bold text-zinc-800">
              {props.name}
            </span>
            <span className="text-sm text-left w-60 flex-wrap font-medium text-zinc-500">
              <strong>Model:</strong> {props.model}
            </span>
            <span className="text-sm text-left font-medium text-zinc-500">
              <strong>Price:</strong> $ {props.price}
            </span>
          </div>
          <div className="flex items-end p-2 justify-center mb-2">
            <ButtonCheckout
              name={props.name}
              model={props.model}
              price={props.price}
              image={props.image}
            />
          </div>
        </div>
      </div>
    </>
  );
}
