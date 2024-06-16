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
    <div className='flex flex-row w-full gap-2 p-2 justify-evenly py-7 border-t-[1px] border-t-gray3'>
      <Button
        className='w-full'
        variant="shoppingcart"
        size="shoppingcart"
      >
        Cart
      </Button>
      <Button
        className='w-full'
        variant="shoppingcart"
        size="shoppingcart"
      >
        Checkout
      </Button>
      <Button
        className='w-full'
        variant="shoppingcart"
        size="shoppingcart"
      >
        Comparison
      </Button>
    </div>
  );
}