//* Components imports
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export function ContactForm() {
  return (
    <form action="" className="w-full">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col w-full gap-5">
          <Label>Your name</Label>
          <Input className="h-12 font-medium font-poppins border-gray3 placeholder:font-poppins placeholder:font-normal" placeholder="Abc"></Input>
        </div>
        <div className="flex flex-col w-full gap-5">
          <Label>Email adress</Label>
          <Input className="h-12 font-medium font-poppins border-gray3 placeholder:font-poppins placeholder:font-normal" placeholder="Abc@def.com"></Input>
        </div>
        <div className="flex flex-col w-full gap-5">
          <Label>Subject</Label>
          <Input className="h-12 font-medium font-poppins border-gray3 placeholder:font-poppins placeholder:font-normal" placeholder="This is an optional"></Input>
        </div>
        <div className="flex flex-col w-full gap-5">
          <Label>Message</Label>
          <Input className="h-12 font-medium font-poppins border-gray3 placeholder:font-poppins placeholder:font-normal" placeholder="Hi! I'd like to ask about"></Input>
        </div>
        <Button variant="submit" size="submit">
          Submit
        </Button>
      </div>
    </form>
  );
}
