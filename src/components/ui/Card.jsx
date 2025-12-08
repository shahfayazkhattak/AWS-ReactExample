import * as React from "react"
import { cn } from "../../lib/utils"
import { motion } from "framer-motion"

const Card = React.forwardRef(({ className, ...props }, ref) => (
    <motion.div
        ref={ref}
        whileHover={{ y: -5 }}
        className={cn(
            "rounded-xl border border-fantosia-primary/20 bg-fantosia-card text-fantosia-text shadow-sm backdrop-blur-sm",
            className
        )}
        {...props}
    />
))
Card.displayName = "Card"

export { Card }
