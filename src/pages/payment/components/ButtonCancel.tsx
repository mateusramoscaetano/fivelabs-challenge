import { useNavigate } from "react-router-dom";
export function ButtonCancel() {
  const navigate = useNavigate();

  return (
    <>
      <button
        type="button"
        onClick={() => navigate("/")}
        className=" mt-2 flex w-60 h-12 items-center text-center justify-center cursor-pointer bg-red-400 hover:bg-opacity-90 text-white rounded-lg"
      >
        Cancel
      </button>
    </>
  );
}
