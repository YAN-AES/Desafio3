//* Libraries imports
import type { User } from "firebase/auth";


type AddUserAction = {
  type: 'auth/addUser';
  payload: User;
}

type RemoveUserAction = {
  type: 'auth/removeUser';
}

export type AuthAction = AddUserAction | RemoveUserAction;

export type AuthState = {
  user: User | null;
}

export function authReducer(state: AuthState | undefined, action: AuthAction) {
  if (!action) return { user: null };
  if (!state) return { user: null };

  switch (action.type) {
    case 'auth/addUser': {
      return { user: action.payload };
    }

    case 'auth/removeUser': {
      return { user: null };
    }

    default: {
      return state;
    }
  }
}