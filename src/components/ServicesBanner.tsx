import TrophyIcon from "../assets/trophyicon.png";
import HoldBoxIcon from "../assets/holdboxicon.png";
import HeadsetIcon from "../assets/headseticon.png";
import VerifiedIcon from "../assets/verifiedicon.png";

export function ServicesBanner() {
  return (
    <section className="w-full py-24 px-14 bg-beige2 flex flex-col items-center justify-center">
      <div className="w-full flex flex-col gap-14 xl:gap-0 xl:flex-row font-poppins xl:justify-between">
        <div className="flex flex-row gap-3">
            <img src={TrophyIcon} alt="" />
            <div className="flex flex-col gap-1">
                <p className="font-semibold text-black1 text-2xl">High Quality</p>
                <p className="font-medium text-gray3 text-xl">crafted from top materials</p>
            </div>
        </div>
        <div className="flex flex-row gap-3">
            <img src={VerifiedIcon} alt="" />
            <div className="flex flex-col gap-1">
            <p className="font-semibold text-black1 text-2xl">Warranty Protection</p>
            <p className="font-medium text-gray3 text-xl">Over 2 years</p>
            </div>
        </div>
        <div className="flex flex-row gap-3">
            <img src={HoldBoxIcon} alt="" />
            <div className="flex flex-col gap-1">
            <p className="font-semibold text-black1 text-2xl">Free Shipping</p>
            <p className="font-medium text-gray3 text-xl">Order over 150 $</p>
            </div>
        </div>
        <div className="flex flex-row gap-3">
            <img src={HeadsetIcon} alt="" />
            <div className="flex flex-col gap-1">
            <p className="font-semibold text-black1 text-2xl">24 / 7 Support</p>
            <p className="font-medium text-gray3 text-xl">Dedicated support</p>
            </div>
        </div>
      </div>
    </section>
  );
}
