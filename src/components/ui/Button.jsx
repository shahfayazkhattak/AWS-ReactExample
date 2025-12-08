import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "../../lib/utils"
import { motion } from "framer-motion"

const buttonVariants = cva(
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-fantosia-primary disabled:pointer-events-none disabled:opacity-50 uppercase tracking-wider",
    {
        variants: {
            variant: {
                default:
                    "bg-fantosia-primary text-fantosia-bg hover:bg-fantosia-primary/90 shadow-[0_0_15px_rgba(0,240,255,0.5)] hover:shadow-[0_0_25px_rgba(0,240,255,0.7)]",
                secondary:
                    "bg-fantosia-secondary text-white hover:bg-fantosia-secondary/80 shadow-[0_0_15px_rgba(112,0,255,0.5)]",
                outline:
                    "border border-fantosia-primary text-fantosia-primary bg-transparent hover:bg-fantosia-primary/10",
                ghost: "text-fantosia-text hover:bg-fantosia-card hover:text-white",
                link: "text-fantosia-primary underline-offset-4 hover:underline",
            },
            size: {
                default: "h-10 px-6 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-12 rounded-md px-8 text-base",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? motion.slot : motion.button
    return (
        <Comp
            className={cn(buttonVariants({ variant, size, className }))}
            ref={ref}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            {...props}
        />
    )
})
Button.displayName = "Button"

export { Button, buttonVariants }
