import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "../../lib/utils"
import { motion } from "framer-motion"

const buttonVariants = cva(
    "inline-flex items-center justify-center rounded-sm text-sm font-display font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-fantosia-primary disabled:pointer-events-none disabled:opacity-50 uppercase tracking-widest relative overflow-hidden group",
    {
        variants: {
            variant: {
                default:
                    "bg-fantosia-primary text-black hover:bg-white border border-fantosia-primary shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:shadow-[0_0_30px_rgba(0,240,255,0.6)]",
                secondary:
                    "bg-fantosia-secondary text-white hover:bg-fantosia-secondary/80 border border-fantosia-secondary shadow-[0_0_20px_rgba(157,0,255,0.4)]",
                outline:
                    "border border-fantosia-primary/50 text-fantosia-primary bg-transparent hover:bg-fantosia-primary/10 hover:border-fantosia-primary hover:shadow-[0_0_15px_rgba(0,240,255,0.2)]",
                ghost: "text-fantosia-text hover:bg-fantosia-card hover:text-white",
                link: "text-fantosia-primary underline-offset-4 hover:underline",
            },
            size: {
                default: "h-12 px-8 py-2 clip-path-slant", // Custom clip-path class if needed, or just standard
                sm: "h-9 rounded-sm px-4",
                lg: "h-14 rounded-sm px-10 text-base",
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
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            {...props}
        >
            {/* Glitch overlay on hover for primary/default */}
            {variant === 'default' && (
                <span className="absolute inset-0 w-full h-full bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 ease-in-out skew-x-12" />
            )}
            <span className="relative z-10 flex items-center">{props.children}</span>
        </Comp>
    )
})
Button.displayName = "Button"

export { Button, buttonVariants }
