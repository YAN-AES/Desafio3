//* Components imports
import { ShoppingCartButton } from "@/components/shopping-cart";
import { Button } from "@/components/ui/button";

//* Hooks imports
import { useShoppingCart, type CartItem } from "@/hooks/use-shopping-cart";

export function Design() {
  const shoppingCart = useShoppingCart();

  return (
    <div>
      <h1>Design</h1>
      <p>Design page</p>
      
      <ShoppingCartButton />

      <Button
        onPointerDown={() => {
          const item: CartItem = {
            id: randomString(),
            name: "Item 1",
            price: 10,
            quantity: 1,
            image: "https://via.placeholder.com/150",
            description: "Description of item 1"
          };

          shoppingCart.addItem(item);
        }}
      >
        Add item
      </Button>
    </div>
  );
}

function randomString() {
  return Math.random().toString(36).substring(7);
}