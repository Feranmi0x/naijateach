import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        locked: "bg-neutral-200 text-primary-foreground hover:bg-neutral-200/90 border-neutral-400 border-b-4 active:border-b-0",
        default: "bg-white text-black rounded-full border-gray-300 border-b-4 border-r-4 text-sm font-bold w-44 active:border-2 uppercase opacity-40",
        primary: "bg-yelloww text-white rounded-full border-b-4 border-r-4 uppercase text-sm font-extrabold border-yellow-600 active:border-2 tracking-wide hover:bg-yellow-400",
        primaryOutline: "text-skyy bg-white rounded-full uppercase text-sm font-extrabold border-gray-200 border-b-4 border-r-4 border-t-2 border-l-2 active:border-2 tracking-wide hover:bg-gray-100",
        secondary: "bg-logo text-white rounded-full border-gray-200 border-b-4 border-r-4 w-44 uppercase text-sm font-bold active:border-2",
        secondary2: "bg-yelloww rounded-none text-white border-gray-200 border-b-4 border-r-4 w-44 uppercase text-sm font-bold active:border-2",
        secondaryOutline: "text-sky-400 bg-white rounded-full w-44 uppercase text-sm font-bold active:border-2 ",
        danger: "bg-rose-500 text-white rounded-full border-b-4 border-r-4 uppercase text-sm font-extrabold border-rose-600 active:border-2 tracking-wide hover:bg-rose-400",
        dangerOutline: "text-rose-500 bg-white rounded-full w-44 uppercase text-sm font-bold active:border-2 ", 
        super: "bg-indigo-500 text-white rounded-full border-gray-200 border-b-4 border-r-4 w-44 uppercase text-sm font-bold active:border-2",
        superOutline: "text-indigo-500 bg-white rounded-full w-44 uppercase text-sm font-bold active:border-2 ",
        ghost: "text-slate-500 bg-transparent rounded-full uppercase text-sm font-bold hover:bg-slate-100 ",
        sidebar: "bg-transparent text-white uppercase text-sm font-extrabold w-full drop-shadow-xl",
        sidebarOutline: "text-logo bg-lime-100 border-logo border-[0.5px] px-2 uppercase text-sm font-bold rounded-md w-full",
        
      },
      size: {
        default: "h-11 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-12 px-8",
        icon: "h-10 w-10",
        rounded: "rounded-none"
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
