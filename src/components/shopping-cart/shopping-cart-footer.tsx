//* Libraries imports
import { useState } from "react";
import { useNavigate } from "react-router-dom";

//* Components imports
import { Button } from '@/components/ui/button';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

//* Hooks imports
import { useAuth } from "@/hooks/auth";

export function ShoppingCartFooter() {

  return (
    <div className='flex flex-row w-full gap-2 p-2 justify-evenly py-7 border-t-[1px] border-t-gray3'>
      <Button
        className='w-full'
        variant="shoppingcart"
        size="shoppingcart"
      >
        Cart
      </Button>
      <CheckoutButton />
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

function CheckoutButton() {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  const auth = useAuth();

  const handleCheckout = () => {
    //if user is logged in
    if (auth.isAuthenticated) {
      //redirect to checkout page
      navigate('/checkout');
    } else {
      //open alert dialog
      setIsOpen(true);
    }
  }

  const handleRedirect = () => {
    console.log('redirect');
    navigate('/login');
  }

  return (
    <>

      <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
        <AlertDialogTrigger asChild>
          <Button
            className='w-full'
            variant="shoppingcart"
            size="shoppingcart"
            onPointerDown={handleCheckout}
          >
            Checkout
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>You need to be logged</AlertDialogTitle>
            <AlertDialogDescription>
              You need to be logged in to continue with the purchase
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction asChild>
              <Button onPointerDown={handleRedirect}>Login</Button>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}