//* Components imports
import { ShoppingCartButton } from "@/components/shopping-cart";
import { Button } from "@/components/ui/button";

import { ProductCard } from "@/components/Card";

//* Hooks imports
import { useShoppingCart, type CartItem } from "@/hooks/use-shopping-cart";
import { useProducts } from "@/hooks/queries/use-products";

export function Design() {
  const shoppingCart = useShoppingCart();

  const products = useProducts();

  return (
    <div>
      <h1>Design</h1>
      <p>Design page</p>

      <ShoppingCartButton />

      <div className="bg-purple-600">
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
          className="translate-x-4 bg-yellow-600"
        >
          Add item
        </Button>
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

      <div className="flex flex-wrap items-center justify-center max-w-[1280px] w-full gap-2">
        {
          products.data?.map((product)=>{
            return <ProductCard key={product.id} product={product} />;
          })
        }
      </div>
    </div>
  );
}

function randomString() {
  return Math.random().toString(36).substring(7);
}