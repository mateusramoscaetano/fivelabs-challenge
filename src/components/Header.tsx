import { IoPersonOutline, IoCartOutline } from "react-icons/io5";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();

  const handleGoToHome = () => {
    navigate("/");
  };

  return (
    <header
      className="flex bg-slate-100 items-center flex-row h-16 lg:h-24 
      justify-between px-4 lg:px-8 py-2 lg:py-4"
    >
      <img
        src={logo}
        alt="logomarca"
        onClick={handleGoToHome}
        className="cursor-pointer w-32"
      />
      <div className="flex flex-row gap-4 lg:gap-8">
        <IoPersonOutline className="cursor-pointer" color="black" size={20} />
        <IoCartOutline className="cursor-pointer" color="black" size={20} />
      </div>
    </header>
  );
}
