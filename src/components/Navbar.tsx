//* Libraries imports
import { Link } from "react-router-dom";

//* Local imports
import { Button } from "./ui/button";
import Logo from "../assets/logo2.png";
import ProfileIcon from "@/assets/profileicon.png";
import { ShoppingCartButton } from "./shopping-cart";

export function Navbar() {
  return (
    <nav className="flex w-full py-6 font-medium font-poppins bg-white z-30">
      <div className="flex flex-row items-center justify-between w-full px-16">
        <div className="flex flex-row items-center gap-2">
          <div>
            <img src={Logo} alt="" />
          </div>
          <p className="text-4xl font-bold">Furniro</p>
        </div>
        <ul className="flex flex-row items-center justify-between text-base w-full max-w-[480px]">
          <li className="transition ease-in-out cursor-pointer hover:scale-105">
            <Link to="/">
              Home
            </Link>
          </li>
          <li className="transition ease-in-out cursor-pointer hover:scale-105">
            <Link to="/">
              Shop
            </Link>
          </li>
          <li className="transition ease-in-out cursor-pointer hover:scale-105">
            <Link to="/">
              About
            </Link>
          </li>
          <li className="transition ease-in-out cursor-pointer hover:scale-105">
            <Link to="/">
              Contact
            </Link>
          </li>
        </ul>
        <div className="flex flex-row items-center gap-9">
          <Button size="icon" variant="transparent">
            <img src={ProfileIcon} alt="" />
          </Button>
          <ShoppingCartButton />
        </div>
      </div>
    </nav>
  );
}
