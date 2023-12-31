import { useNavigate } from "react-router-dom";
export function ButtonCancel() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/");
  };

  return (
    <>
      <button
        type="button"
        onClick={handleSubmit}
        className=" mt-2 flex w-full max-w-[15rem] h-12 items-center text-center justify-center cursor-pointer bg-red-400 hover:bg-opacity-90 text-white rounded-lg"
      >
        Cancel
      </button>
    </>
  );
}
