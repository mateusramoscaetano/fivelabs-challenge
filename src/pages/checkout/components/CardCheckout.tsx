import { MyComponentProps } from "../../../@types";

export function CardCheckout(props: MyComponentProps) {
  return (
    <>
      <div className="bg-slate-100 w-2/5 h-4/5 flex flex-col rounded-md m-8 justify-between">
        <div className="relative flex-1 overflow-hidden">
          <img
            className="rounded-md w-full h-full object-cover"
            src={props.image}
            alt={props.name}
          />
        </div>
        <div className="flex flex-col justify-between h-64">
          <div className="flex flex-col items-center ml-2 mt-20 w-auto h-24">
            <span className="text-sm text-left font-bold text-zinc-800">
              {props.name}
            </span>
            <span className="text-sm text-left  flex-wrap font-medium text-zinc-500">
              <strong>Model:</strong> {props.model}
            </span>
            <span className="text-sm text-left font-medium text-zinc-500">
              <strong>Price:</strong> $ {props.price}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
