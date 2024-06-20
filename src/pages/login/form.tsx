import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import type { ReactNode } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function LoginForm() {
  const auth = getAuth();
  const emailLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const emailRegister = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2 bg-beige2">
        <TabsTrigger value="account">Create Account</TabsTrigger>
        <TabsTrigger value="password">Login</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle className="font-poppins">Create Account</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <form className="flex flex-col gap-5">
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  maxLength={256}
                  className="h-12 font-medium font-poppins border-gray3 placeholder:font-poppins placeholder:font-normal"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  maxLength={256}
                  className="h-12 font-medium font-poppins border-gray3 placeholder:font-poppins placeholder:font-normal"
                />
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex items-center justify-center">
            <Button variant="submit">Register</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle className="font-poppins">Password</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <form className="flex flex-col gap-5">
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  maxLength={256}
                  className="h-12 font-medium font-poppins border-gray3 placeholder:font-poppins placeholder:font-normal"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  maxLength={256}
                  className="h-12 font-medium font-poppins border-gray3 placeholder:font-poppins placeholder:font-normal"
                />
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex items-center justify-center">
            <Button variant="submit">Login</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
