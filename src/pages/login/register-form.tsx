//* Librairies imports
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

//* Hooks imports
import { useAuth, registerSchema, type RegisterInput } from "@/hooks/auth";

//* Components imports
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

export function RegisterForm() {
  const auth = useAuth();
  const form = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
    }
  });

  const onSubmit = form.handleSubmit(async (data) => {
    auth.register.mutate(data, {
      onSuccess: () => {
        toast.success("Account created successfully");
      },
      onError: (error) => {
        toast.error(error.message);
      }
    });
  });

  return (
    <form onSubmit={onSubmit}>
      <Card>
        <CardHeader>
          <CardTitle className="font-poppins">Create Account</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex flex-col gap-5">
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                maxLength={256}
                className="h-12 font-medium font-poppins border-gray3 placeholder:font-poppins placeholder:font-normal"
                {
                ...form.register("email", {
                  disabled: auth.register.isPending
                })
                }
              />
              <span>
                {form.formState.errors.email?.message}
              </span>
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                maxLength={256}
                className="h-12 font-medium font-poppins border-gray3 placeholder:font-poppins placeholder:font-normal"
                {
                ...form.register("password", {
                  disabled: auth.register.isPending
                })
                }
              />
              <span>
                {form.formState.errors.password?.message}
              </span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex items-center justify-center">
          <Button
            variant="submit"
            disabled={auth.register.isPending}
          >
            Register
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}