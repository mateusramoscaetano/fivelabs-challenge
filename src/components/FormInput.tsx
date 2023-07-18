import { ChangeEvent, HTMLAttributes } from "react";

interface FormInputProps extends HTMLAttributes<HTMLInputElement> {
  id: string;
  name: string;
  type: string;
  value: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  error?: string | boolean;
}

export function FormInput(props: FormInputProps) {
  const { error } = props;

  return (
    <div className="flex flex-col w-full text-sm mt-2">
      <input
        className={`${
          error ? "border-red-500" : "border-gray-300"
        } border border-solid text-zinc-500 h-8 p-2 rounded-md`}
        {...props}
      />
      {error && <div className="text-red-500">{error}</div>}
    </div>
  );
}
