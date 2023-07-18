import { IoPersonOutline, IoCartOutline } from "react-icons/io5";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  return (
    <>
      <div className=" flex bg-slate-100 items-center flex-row w-screen h-24 justify-between p-8">
        <img
          src={logo}
          alt="logomarca"
          width={400}
          onClick={goToHome}
          className="cursor-pointer"
        />
        <div className="flex flex-row m-2 gap-12 text-black text-sm font-bold items-center">
          <h3
            onClick={goToHome}
            className="hover:border-b-purple-950 cursor-pointer"
          >
            Home
          </h3>
          <h3 className="cursor-pointer">About</h3>
          <h3 className="cursor-pointer">Contact</h3>
        </div>
        <div className="flex flex-row gap-8">
          <IoPersonOutline color="black" size={20} />
          <IoCartOutline color="black" size={20} />
        </div>
      </div>
    </>
  );
}
