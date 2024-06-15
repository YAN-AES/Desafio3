import { Button } from "./ui/button";
import { Input } from "./ui/input";
import FacebookIcon from "../assets/facebookicon.png";
import InstagramIcon from "../assets/instagramicon.png";
import LinkedinIcon from "../assets/linkedinicon.png";
import TwitterIcon from "../assets/twittericon.png";

export function Footer() {
  return (
    <footer className="font-poppins flex flex-col p-28 gap-12">
      <div className="flex flex-row items-start justify-between">
        <div className="flex flex-col gap-12">
          <p className="font-bold text-2xl">Furniro.</p>
          <p className="font-normal text-base text-gray3">
            400 University Drive Suite 200 Coral <br />
            Gables,
            <br />
            FL 33134 USA
          </p>
          <div className="flex gap-4">
            <Button size="icon" variant="footer"><img src={FacebookIcon} alt="" /></Button>
            <Button size="icon" variant="footer"><img src={InstagramIcon} alt="" /></Button>
            <Button size="icon" variant="footer"><img src={TwitterIcon} alt="" /></Button>
            <Button size="icon" variant="footer"><img src={LinkedinIcon} alt="" /></Button>
          </div>
        </div>
        <div className="flex flex-col gap-12">
          <p className="text-gray3 font-medium">Links</p>
          <div className="flex flex-col gap-12 font-medium">
            <a href="">Home</a>
            <a href="">Shop</a>
            <a href="">About</a>
            <a href="">Contact</a>
          </div>
        </div>
        <div className="flex flex-col gap-12">
          <p className="text-gray3 font-medium">Help</p>
          <div className="flex flex-col gap-12 font-medium">
            <a href="">Payment Options</a>
            <a href="">Returns</a>
            <a href="">Privacy Policies</a>
          </div>
        </div>
        <div className="flex flex-col gap-12">
          <p className="text-gray3 font-medium">Newsletter</p>
          <div className="flex flex-row gap-3 ">
            <Input placeholder="Enter Your Email Adress" className="border-b-black border-b-[2px] border-x-0 border-t-0 rounded-none h-8 font-poppins placeholder:font-poppins p-0"></Input>
            <Button variant="subscribe" size="subscribe">
              SUBSCRIBE
            </Button>
          </div>
        </div>
      </div>
      <div className="h-[1px] w-full bg-gray3"></div>
      <p className="text-base">2023 furniro. All rights reserved</p>
    </footer>
  );
}
