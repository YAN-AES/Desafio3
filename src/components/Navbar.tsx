import { Button } from "./ui/button";
import Logo from "../assets/logo2.png";
import ProfileIcon from "../assets/profileicon.png";
import { ShoppingCartButton } from "./shopping-cart";

export function Navbar() {
  return (
    <nav className="flex w-full py-6 font-medium font-poppins">
      <div className="flex flex-row items-center justify-between w-full px-16">
        <div className="flex flex-row items-center gap-2">
          <div>
            <img src={Logo} alt="" />
          </div>
          <p className="text-4xl font-bold">Furniro</p>
        </div>
        <ul className="flex flex-row items-center text-base gap-x-20">
          <li className="transition ease-in-out cursor-pointer hover:scale-105">
            Home
          </li>
          <li className="transition ease-in-out cursor-pointer hover:scale-105">
            Shop
          </li>
          <li className="transition ease-in-out cursor-pointer hover:scale-105">
            About
          </li>
          <li className="transition ease-in-out cursor-pointer hover:scale-105">
            Contact
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
