//* Libraries imports
import { useSelector, useDispatch } from 'react-redux';

//* Store imports
import type { CartItem, ShoppingCartAction } from "@/store/shopping-cart/reducer";
import type { rootReducer } from "@/store/store";

function useShoppingCart() {
  const cart = useSelector((state: ReturnType<typeof rootReducer>) => state.shoppingCart.items);
  const total = useSelector((state: ReturnType<typeof rootReducer>) => state.shoppingCart.total);
  const dispatch = useDispatch();

  const addItem = (item: CartItem) => {
    dispatch({ type: 'cart/addItem', payload: item } as ShoppingCartAction);
  }

  const removeItem = (id: string) => {
    dispatch({ type: 'cart/removeItem', payload: { id } } as ShoppingCartAction);
  }

  const clearCart = () => {
    dispatch({ type: 'cart/clear' } as ShoppingCartAction);
  }

  return {
    cart,
    total,
    addItem,
    removeItem,
    clearCart
  };
}

export {
  type CartItem,
  useShoppingCart
};