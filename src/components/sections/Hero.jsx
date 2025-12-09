import { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { Button } from "../ui/Button";
import { ChevronRight, Play } from "lucide-react";

export function Hero() {
    const containerRef = useRef(null);
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    // Mouse tilt effect
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseX = useSpring(x, { stiffness: 50, damping: 20 });
    const mouseY = useSpring(y, { stiffness: 50, damping: 20 });

    function handleMouseMove(event) {
        const { clientX, clientY } = event;
        const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
        const xPos = (clientX - left) / width - 0.5;
        const yPos = (clientY - top) / height - 0.5;
        x.set(xPos * 20); // Tilt amount
        y.set(yPos * 20);
    }

    return (
        <section
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 perspective-1000"
        >
            {/* Dynamic Background */}
            <div className="absolute inset-0 bg-hero-gradient z-0 pointer-events-none" />

            {/* Floating Orbs */}
            <motion.div style={{ y: y1, x: mouseX }} className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-fantosia-secondary/20 rounded-full blur-[120px] mix-blend-screen" />
            <motion.div style={{ y: y2, x: mouseY }} className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-fantosia-primary/10 rounded-full blur-[140px] mix-blend-screen" />

            {/* Grid & Noise */}
            <div className="absolute inset-0 z-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />

            <div className="container relative z-10 px-6 text-center perspective-1000">
                <motion.div
                    style={{ rotateX: mouseY, rotateY: mouseX }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, type: "spring" }}
                    className="relative inline-block"
                >
                    {/* Glitch/Glow Text Effect Wrapper */}
                    <div className="relative">
                        <span className="absolute -inset-1 blur-xl bg-gradient-to-r from-fantosia-primary to-fantosia-secondary opacity-30 animate-pulse-glow"></span>

                        <span className="relative inline-block py-1 px-4 rounded-full bg-fantosia-surface/80 border border-fantosia-primary/30 text-fantosia-primary text-xs md:text-sm font-display tracking-[0.2em] mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(0,240,255,0.2)]">
                            SYSTEM ONLINE // FANTOSIA // SEASON 4
                        </span>

                        <h1 className="text-6xl md:text-9xl font-display font-black text-white leading-none mb-6 tracking-tighter mix-blend-overlay">
                            FANTOSIA
                        </h1>
                        <h1 className="absolute top-0 left-0 w-full text-6xl md:text-9xl font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-transparent leading-none tracking-tighter opacity-80 select-none pointer-events-none">
                            FANTOSIA
                        </h1>
                    </div>

                    <p className="text-lg md:text-2xl text-fantosia-text/80 max-w-2xl mx-auto mb-12 font-light leading-relaxed tracking-wide">
                        The Metaverse is broken. <span className="text-fantosia-primary font-medium text-shadow-glow">Rewrite the code.</span>
                        <br />Dominate the connection.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Button size="lg" className="w-full sm:w-auto min-w-[200px] text-lg">
                            Initialize
                            <ChevronRight className="ml-2 w-5 h-5" />
                        </Button>
                        <Button variant="outline" size="lg" className="w-full sm:w-auto min-w-[200px] text-lg">
                            <Play className="mr-2 w-5 h-5" />
                            Trailer
                        </Button>
                    </div>
                </motion.div>
            </div>

            {/* Decorative HUD Elements */}
            <div className="absolute bottom-10 left-10 hidden md:block text-[10px] text-fantosia-primary/40 font-mono">
                <div className="flex flex-col gap-1">
                    <span>COORDS: 84.92.11</span>
                    <span>STATUS: STABLE</span>
                    <span>PING: 1MS</span>
                </div>
            </div>
        </section>
    );
}
