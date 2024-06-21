//* Libraries imports
import { useDispatch, useSelector } from "react-redux";
import { useMutation } from "@tanstack/react-query";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import z from "zod";

//* Hooks imports


//* Types imports
import type { rootReducer } from "@/store/store";
import type { AuthAction } from "@/store/auth/reducer";

//* Firebase imports
import { auth } from "@/firebase/firebaseConfig";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export type LoginInput = z.infer<typeof loginSchema>;

export const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export type RegisterInput = z.infer<typeof registerSchema>;

export function useAuth() {
  const user = useSelector((state: ReturnType<typeof rootReducer>) => state.auth.user);
  const dispatch = useDispatch();

  const login = useMutation({
    mutationFn: async (input: LoginInput) => {
      return signInWithEmailAndPassword(auth, input.email, input.password)
        .then((userCredential) => {
          const user = userCredential.user;
          dispatch({ type: "auth/addUser", payload: user } as AuthAction);
        });
    },
  });

  const register = useMutation({
    mutationFn: async (input: RegisterInput) => {
      return createUserWithEmailAndPassword(auth, input.email, input.password)
        .then((userCredential) => {
          const user = userCredential.user;
          dispatch({ type: "auth/addUser", payload: user } as AuthAction);
        });
    }
  });

  const logout = () => {
    dispatch({ type: "auth/removeUser" } as AuthAction);
  };

  const isAuthenticated = !!user;

  return {
    user,
    login,
    register,
    logout,
    isAuthenticated,
  };
}