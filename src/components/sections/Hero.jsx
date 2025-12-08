import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { ChevronRight, Play } from "lucide-react";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-hero-gradient z-0 pointer-events-none" />
            <div className="absolute inset-0 z-0 opacity-30">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-fantosia-secondary/40 rounded-full blur-[128px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fantosia-primary/40 rounded-full blur-[128px] animate-pulse delay-1000" />
            </div>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>

            <div className="container relative z-10 px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-fantosia-primary/10 border border-fantosia-primary/30 text-fantosia-primary text-sm font-medium tracking-wider mb-6">
                        ENTER THE METAVERSE
                    </span>
                    <h1 className="text-5xl md:text-8xl font-display font-black text-white leading-tight mb-8 tracking-tighter drop-shadow-[0_0_15px_rgba(0,240,255,0.3)]">
                        WELCOME TO <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-fantosia-primary via-blue-500 to-fantosia-secondary">
                            FANTOSIA
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-fantosia-muted max-w-2xl mx-auto mb-10 leading-relaxed">
                        Experience the next generation of competitive gaming.
                        Immerse yourself in a world where speed meets strategy.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button size="lg" className="w-full sm:w-auto group">
                            Start Your Journey
                            <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button variant="outline" size="lg" className="w-full sm:w-auto">
                            <Play className="mr-2 w-4 h-4" />
                            Watch Trailer
                        </Button>
                    </div>
                </motion.div>

                {/* Stats / Social Proof */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto border-t border-white/10 pt-8"
                >
                    {[
                        { label: "Active Players", value: "2M+" },
                        { label: "Tournaments", value: "500+" },
                        { label: "Prize Pool", value: "$10M" },
                        { label: "Rating", value: "4.9/5" },
                    ].map((stat, i) => (
                        <div key={i} className="text-center">
                            <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                            <div className="text-sm text-fantosia-muted uppercase tracking-wider">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
