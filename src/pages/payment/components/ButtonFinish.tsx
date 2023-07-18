interface ButtonFinishProps {
  handleSubmit?: () => void;
  title: string;
}

export function ButtonFinish({ handleSubmit, title }: ButtonFinishProps) {
  return (
    <>
      <button
        type="button"
        onClick={handleSubmit}
        className=" mt-4 flex w-full max-w-[15rem] h-12 items-center text-center justify-center cursor-pointer
       bg-slate-800 hover:bg-opacity-90 text-white rounded-lg"
      >
        {title}
      </button>
    </>
  );
}
