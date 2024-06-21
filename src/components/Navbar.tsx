//* Libraries imports
import { Link } from "react-router-dom";

//* Components Imports
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

//* Local imports
import { Button } from "./ui/button";
import Logo from "../assets/logo2.png";
import ProfileIcon from "@/assets/profileicon.png";
import { ShoppingCartButton } from "./shopping-cart";
import ListIcon from "@/assets/list-icon.svg";

export function Navbar() {
  return (
    <nav className="flex w-full py-6 font-medium font-poppins bg-white z-30">
      <div className="flex flex-row items-center justify-between w-full px-16">
        <div className="flex flex-row items-center gap-2">
          <Link to="/home" className="flex flex-row items-center gap-2">
            <div>
              <img src={Logo} alt="" />
            </div>
            <p className="text-4xl font-bold hidden lg:flex">Furniro</p>
          </Link>
        </div>
        <ul className="md:flex flex-row items-center justify-between text-base w-full max-w-[480px] hidden">
          <li className="transition ease-in-out cursor-pointer hover:scale-105">
            <Link to="/home">Home</Link>
          </li>
          <li className="transition ease-in-out cursor-pointer hover:scale-105">
            <Link to="/shop">Shop</Link>
          </li>
          <li className="transition ease-in-out cursor-pointer hover:scale-105">
            <Link to="/error">About</Link>
          </li>
          <li className="transition ease-in-out cursor-pointer hover:scale-105">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="flex flex-row items-center justify-between w-full max-w-40">
          <Button size="icon" variant="transparent">
            <Link to="/login">
              <img src={ProfileIcon} alt="" />
            </Link>
          </Button>
          <ShoppingCartButton />
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger className="md:hidden">
                <img src={ListIcon} alt="" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="flex flex-col w-full border-none">
                <DropdownMenuLabel className="text-3xl flex flex-row w-full gap-2 font-poppins">
                  <img src={Logo} alt="" />
                  Furniro.
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-xl font-poppins font-semibold hover:scale-105">
                  <Link to="/home">Home</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-xl font-poppins font-semibold hover:scale-105">
                  <Link to="/shop">Shop</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-xl font-poppins font-semibold hover:scale-105">
                  <Link to="/error">About</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-xl font-poppins font-semibold hover:scale-105">
                  <Link to="/contact">Contact</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
}
