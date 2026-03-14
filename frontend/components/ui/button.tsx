import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:bg-destructive/60 dark:focus-visible:ring-destructive/40",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
        Sign_In_main:
          "text-sm font-semibold hover:text-primary transition-colors hidden sm:block cursor-pointer",
        Get_Started_main:
          "bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-lg text-sm font-bold shadow-lg shadow-primary/20 transition-all cursor-pointer",
        Demo_Primary:
          "bg-[#7c3bed] hover:bg-[#7c3bed]/90 text-white shadow-xl shadow-[#7c3bed]/20 rounded-xl font-bold cursor-pointer",
        Demo_Secondary:
          "bg-slate-200 dark:bg-[#12121a] hover:bg-slate-300 dark:hover:bg-[#1f1f2e] border border-slate-300 dark:border-[#1f1f2e] text-slate-900 dark:text-white rounded-xl font-bold cursor-pointer",
        Pricing_Popular:
          "bg-[#7c3bed] text-white hover:bg-[#7c3bed]/90 shadow-xl shadow-[#7c3bed]/20 rounded-xl font-bold cursor-pointer",
        Pricing_Outline:
          "border border-slate-300 dark:border-[#1f1f2e] text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-[#1f1f2e] rounded-xl font-bold cursor-pointer",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        xs: "h-6 gap-1 rounded-md px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-xs": "size-6 rounded-md [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
        demoHero: "px-8 py-4 text-base h-auto",
        pricing: "py-3 w-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
