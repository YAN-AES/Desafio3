import PinIcon from "@/assets/pinicon.png";
import PhoneIcon from "@/assets/phoneicon.png";
import ClockIcon from "@/assets/clockicon.png";

import { ContactForm } from "./form";
import { Header } from "@/components/Header";
import { ServicesBanner } from "@/components/ServicesBanner";

export function Contact() {
  return (
    <main className="flex flex-col items-center justify-center w-full">
      <Header />
      <section className="flex flex-col items-center justify-center font-poppins pt-24 pb-28 gap-3">
        <span className="font-semibold text-4xl">Get In Touch With Us</span>
        <span className="text-gray3 px">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us <br />
          An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
        </span>
      </section>
      <section className="flex flex-row items-start justify-center font-poppins gap-16 w-full pb-16">
        <div className="flex flex-col gap-10 w-full max-w-[392px]">
          <div className="flex flex-row items-start justify-start gap-8">
            <div className="w-8 items-center justify-center">
              <img src={PinIcon} alt="" />
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-medium text-2xl">Address</span>
              <span>
                236 5th SE Avenue,
                <br />
                New York NY10000,
                <br />
                United States
              </span>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-8">
            <div className="w-8 items-center justify-center">
              <img src={PhoneIcon} alt="" />
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-medium text-2xl">Phone</span>
              <span>
                Mobile: +(84) 546-6789 <br />
                Hotline: +(84) 456-6789
              </span>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-8">
            <div className="w-8 items-center justify-center">
              <img src={ClockIcon} alt="" />
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-medium text-2xl">Working Time</span>
              <span>
                Monday-Friday: 9:00 - <br /> 22:00 <br />
                Saturday-Sunday: 9:00 - <br /> 21:00 <br />
              </span>
            </div>
          </div>
        </div>
        <div className="flex w-full max-w-[528px]">
          <ContactForm />
        </div>
      </section>
      <ServicesBanner />
    </main>
  );
}
