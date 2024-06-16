import { Button } from "./ui/button";
import Logo from "../assets/logo2.png";
import ProfileIcon from "../assets/profileicon.png";
import { ShoppingCartButton } from "./shopping-cart";

export function Navbar() {
  return (
    <nav className="flex py-6 w-full font-poppins font-medium">
      <div className="flex flex-row justify-between items-center w-full px-16  px-">
        <div className="flex flex-row gap-2 items-center">
          <div>
            <img src={Logo} alt="" />
          </div>
          <p className="font-bold text-4xl">Furniro</p>
        </div>
        <ul className="flex flex-row items-center gap-x-20 text-base">
          <li className="transition ease-in-out hover:scale-105 overflow-hidden cursor-pointer">
            Home
          </li>
          <li className="transition ease-in-out hover:scale-105 overflow-hidden cursor-pointer">
            Shop
          </li>
          <li className="transition ease-in-out hover:scale-105 overflow-hidden cursor-pointer">
            About
          </li>
          <li className="transition ease-in-out hover:scale-105 overflow-hidden cursor-pointer">
            Contact
          </li>
        </ul>
        <div className="flex flex-row items-center gap-9">
          <Button size="icon" variant="transparent">
            <img src={ProfileIcon} />
          </Button>
          <ShoppingCartButton />
        </div>
      </div>
    </nav>
  );
}
