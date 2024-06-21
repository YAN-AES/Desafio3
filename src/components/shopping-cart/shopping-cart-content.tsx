//* Components imports
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { ShoppingCartCard } from "./shopping-cart-card";

//* Hooks imports
import { useShoppingCart, type CartItem } from '@/hooks/use-shopping-cart';

export function ShoppingCartContent() {
  const shoppingCart = useShoppingCart();

  const handleRemoveItem = (item: CartItem) => {
    shoppingCart.removeItem(item.id);
  }

  return (
    <ScrollArea className="w-full h-full max-h-full">
      <ul className="flex flex-col w-full pr-2">
        {
          shoppingCart.cart?.map((item) => {
            return (
              <ShoppingCartCard
                key={item.id}
                item={item}
                onRemove={handleRemoveItem}
              />
            )
          })
        }
      </ul>
      <ScrollBar />
    </ScrollArea>
  );
}