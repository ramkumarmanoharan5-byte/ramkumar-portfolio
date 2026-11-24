import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm text-sm font-semibold tracking-wide cursor-pointer transition-[color,background-color,border-color,box-shadow,translate,scale] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "btn-sweep bg-primary text-primary-foreground shadow-[0_10px_24px_-14px_var(--burgundy)] [--sweep:var(--ink)] hover:shadow-[0_16px_30px_-14px_var(--burgundy)]",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "btn-sweep border border-foreground/40 bg-transparent text-foreground [--sweep:var(--burgundy)] hover:border-primary hover:text-primary-foreground",
        secondary: "btn-sweep bg-cream text-foreground [--sweep:var(--paper)]",
        ghost: "btn-sweep text-foreground [--sweep:oklch(0.339_0.137_28.9/10%)] hover:text-primary",
        link: "text-primary underline-offset-4 hover:underline",
        onDark: "btn-sweep bg-cream text-primary [--sweep:var(--ink)] hover:text-cream",
        outlineOnDark:
          "btn-sweep border border-primary-foreground/50 bg-transparent text-primary-foreground [--sweep:var(--cream)] hover:border-cream hover:text-primary",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-8 px-3 text-xs",
        lg: "btn-magnetic h-12 px-7 text-[0.9rem]",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
