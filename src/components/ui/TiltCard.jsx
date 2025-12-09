import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export function TiltCard({ children, className }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"]);

    function handleMouseMove(event) {
        const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
        const xPos = (event.clientX - left) / width - 0.5;
        const yPos = (event.clientY - top) / height - 0.5;

        x.set(xPos);
        y.set(yPos);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
    }

    return (
        <motion.div
            className={`perspective-1000 ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        >
            <div style={{ transform: "translateZ(20px)" }}>
                {children}
            </div>
        </motion.div>
    );
}
