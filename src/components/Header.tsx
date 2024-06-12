import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="flex py-6 w-full">
      <div className="flex flex-row justify-between items-center w-full px-16  px-">
        <div className="w-[185px] h-[41px] bg-blue-500">
          <img src="" alt="" />
        </div>
        <ul className="flex flex-row items-center gap-x-20 text-base">
          <li className="transition ease-in-out hover:font-bold hover:scale-105 overflow-hidden cursor-pointer">Home</li>
          <li className="transition ease-in-out hover:font-bold hover:scale-105 overflow-hidden cursor-pointer">Shop</li>
          <li className="transition ease-in-out hover:font-bold hover:scale-105 overflow-hidden cursor-pointer">About</li>
          <li className="transition ease-in-out hover:font-bold hover:scale-105 overflow-hidden cursor-pointer">Contact</li>
        </ul>
        <div className="flex flex-row items-center gap-9">
          <Button size="icon" variant="default">
            AA
          </Button>
          <Button size="icon" variant="default">
            AA
          </Button>
        </div>
      </div>
    </header>
  );
}
