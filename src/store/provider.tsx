//* Libraries imports
import type { ReactNode } from 'react';
import { Provider } from 'react-redux';

//* Store imports
import { store } from "./store";

type StoreProviderProps = {
  children: ReactNode
}

export function StoreProvider(props: StoreProviderProps) {
  return (
    <Provider store={store}>
      {props.children}
    </Provider>
  )
}

