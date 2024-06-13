import { Breadcrumb } from "./ui/breadcrumb";
import Logo from "../assets/logo.png";

export function Header() {
  return (
    <header>
      <div className="bg-[url('../assets/logo.png')] flex flex-col w-full items-center justify-center h-[316px] bg-red-400">
        <img src={Logo} alt=""/>
        <h1 className="font-poppins font-medium text-5xl">Shop</h1>
        <Breadcrumb></Breadcrumb>
      </div> 
    </header>
  );
}
