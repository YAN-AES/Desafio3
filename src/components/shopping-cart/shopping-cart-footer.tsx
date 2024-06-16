//* Libraries imports

//* Components imports
import { Button } from '@/components/ui/button';

//* Hooks imports
// import { useShoppingCart } from '@/hooks/use-shopping-cart';

export function ShoppingCartFooter() {
  // const shoppingCart = useShoppingCart();

  // const handleClearCart = () => {
  //   shoppingCart.clearCart();
  // }

  return (
    <div className='flex flex-row w-full gap-2 p-2 justify-evenly bg-emerald-600'>
      <Button
        className='w-full'
        variant="outline"
      >
        Cart
      </Button>
      <Button
        className='w-full'
        variant="outline"
      >
        Checkout
      </Button>
      <Button
        className='w-full'
        variant="outline"
      >
        Comparison
      </Button>
    </div>
  );
}