import { auth } from "@/firebase/firebaseConfig";
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import { Button } from "@/components/ui/button";
import { AuthForms } from "./form";

import Logo from "@/assets/logo.png";
import FacebookIcon from "@/assets/facebook-logo.png"
import GoogleLogo from "@/assets/google-logo.png"
import LoginBg from "@/assets/login-bg.jpg"
import { Header } from "@/components/Header";
import { ProductHeader } from "@/components/ProductHeader";

export function Login() {
  const handleGoogle = async () => {
    const provider = await new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  const handleFacebook = async () => {
    const provider = await new FacebookAuthProvider();
    return signInWithPopup(auth, provider);
  };

  return (
    <main>
      <section className="flex flex-col items-center justify-center w-full h-full py-20 max-h-svh relative">
        <img src={LoginBg} alt="" className="absolute left-0 top-0 w-full h-full object-cover z-0 blur-sm"/>
        <div className="flex flex-col items-center justify-center gap-4 font-poppins z-10 bg-white p-10 rounded-xl">
          <div className="flex flex-row items-center justify-center">
            <div>
              <img src={Logo} alt="" />
            </div>
            <span className="text-4xl font-bold">Furniro</span>
          </div>
          <span className="font-semibold">Choose a login option:</span>
          <AuthForms />
          <div className="flex flex-col gap-5">
            <Button onPointerDown={handleGoogle} variant="login" size="login">
              <img src={GoogleLogo} alt="" className="w-8" />Login with Google
            </Button>
            <Button onPointerDown={handleFacebook} variant="login" size="login">
              <img src={FacebookIcon} alt="" className="w-8" />Login with Facebook
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
