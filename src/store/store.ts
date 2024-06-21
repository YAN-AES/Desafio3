//* Libraries imports
import { createStore } from 'redux';

//* Reducers imports
import { shoppingCartReducer, type ShoppingCartAction, type ShoppingCartState } from "./shopping-cart/reducer";
import { authReducer, type AuthAction, type AuthState } from "./auth/reducer";

type CounterState = {
  value: number
}

type CounterAction = {
  type: string
}

export function counterReducer(state: CounterState | undefined, action: CounterAction) {
  switch (action.type) {
    case 'counter/incremented':
      if (state)
        return { value: state.value + 1 }
      return { value: 1 }
    case 'counter/decremented':
      if (state)
        return { value: state.value - 1 }
      return { value: -1 }
    default: {
      if (state)
        return state
      return { value: 0 }
    }
  }
}

type RootState = {
  counter: CounterState,
  shoppingCart: ShoppingCartState,
  auth: AuthState
}

type RootAction = CounterAction | ShoppingCartAction;

export function rootReducer(state: RootState | undefined, action: RootAction) {
  return {
    counter: counterReducer(state?.counter, action as CounterAction),
    shoppingCart: shoppingCartReducer(state?.shoppingCart, action as ShoppingCartAction),
    auth: authReducer(state?.auth, action as AuthAction)
  }
}

const store = createStore(rootReducer);

export { store };