import { ReactNode } from "react";
import { IoPersonOutline, IoCartOutline } from "react-icons/io5";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

type HeaderProps = {
  children?: ReactNode;
};

export function Header({ children }: HeaderProps) {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  return (
    <>
      <div className="flex bg-slate-100 items-center flex-row w-screen h-16 lg:h-24 justify-between px-4 lg:px-8 py-2 lg:py-4">
        <img
          src={logo}
          alt="logomarca"
          width={400}
          onClick={goToHome}
          className="cursor-pointer"
        />
        <div className="flex flex-row gap-4 lg:gap-8">
          <IoPersonOutline className="cursor-pointer" color="black" size={20} />
          <IoCartOutline className="cursor-pointer" color="black" size={20} />
        </div>
      </div>
      {children}
    </>
  );
}
