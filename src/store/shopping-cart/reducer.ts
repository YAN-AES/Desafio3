//* Types imports
import type { Product } from "@/schemas/product";

export type CartItem = Omit<Product, 'stock'> & { quantity: number };

export type ShoppingCartState = {
  items: CartItem[],
  total: number
}

type AddItemAction = {
  type: 'cart/addItem'
  payload: CartItem
}

type RemoveItemAction = {
  type: 'cart/removeItem'
  payload: {
    id: string;
  }
}

type ClearCartAction = {
  type: 'cart/clear'
}

export type ShoppingCartAction = AddItemAction | RemoveItemAction | ClearCartAction;

export function shoppingCartReducer(state: ShoppingCartState | undefined, action: ShoppingCartAction) {
  if (!action) return { items: [], total: 0 };
  if (!state) return { items: [], total: 0 };

  const { items } = state;

  switch (action.type) {
    case 'cart/addItem': {
      const item = action.payload;
      const itemIndex = items.findIndex((i) => i.id === item.id);

      if (itemIndex >= 0) {
        items[itemIndex].quantity += 1;
      } else {
        items.push({ ...item, quantity: 1 });
      }

      return {
        items: [...items],
        total: items.reduce((acc, item) => acc + item.price * item.quantity, 0)
      };
    }

    case 'cart/removeItem': {
      const itemToRemoveIndex = items.findIndex((i) => i.id === action.payload.id);

      if (itemToRemoveIndex >= 0) {
        items[itemToRemoveIndex].quantity -= 1;

        if (items[itemToRemoveIndex].quantity <= 0) {
          items.splice(itemToRemoveIndex, 1);
        }
      }

      return {
        items: [...items],
        total: items.reduce((acc, item) => acc + item.price * item.quantity, 0)
      };
    }

    case 'cart/clear':
      return { items: [], total: 0 };

    default:
      return state;
  }
}