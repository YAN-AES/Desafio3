import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        banana: "bg-yellow-600 ",
        cta: "text-base bg-brown2 font-poppins font-bold text-white1",
        subscribe: "bg-transparent border-b-[2px] border-black outline-none shadow-none ring-transparent rounded-none",
        transparent: "bg-transparent",
        footer: "bg-white rounded-full shadow-md",
        shoppingcart: "bg-transparent border border-black font-poppins",
        placeorder: "bg-transparent border border-black font-poppins text-xl",
        submit: "bg-brown2 border-none text-white font-poppins text-base font-normal",
        login: "bg-beige2 shadow-md font-poppins text-xl",
        productpage: "bg-tranparent border-2 border-black font-poppins text-xl"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
        cta: "px-16 py-6 rounded-none",
        subscribe: "h-8",
        shoppingcart: "px-7 py-1.5 rounded-full",
        placeorder: "px-24 py-4 rounded-2xl",
        submit: "px-24 py-4 rounded-md",
        login: "rounded-md gap-3 justify-start px-[75px] py-4",
        productpage: "px-12 h-16 rounded-lg"
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
