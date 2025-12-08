import { motion } from "framer-motion";
import { Button } from "../ui/Button";

export function About() {
    return (
        <section id="about" className="py-32 relative overflow-hidden bg-black">
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-fantosia-secondary/10 via-fantosia-secondary/5 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-t from-fantosia-primary/5 to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Text Content */}
                    <div className="flex-1 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-fantosia-primary tracking-[0.3em] uppercase text-xs font-bold mb-4 block pl-1 border-l-2 border-fantosia-primary">
                                The Lore
                            </span>
                            <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-6 leading-tight">
                                A UNIVERSE <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                                    REBORN IN CODE
                                </span>
                            </h2>
                            <p className="text-fantosia-muted text-lg leading-relaxed font-light">
                                In the year 2142, the boundaries between physical and digital reality collapsed.
                                <strong className="text-white font-medium"> Fantosia</strong> emerged from the data streams—a hyper-realistic metaverse where the laws of physics are rewritten by code.
                            </p>
                            <p className="text-fantosia-muted text-lg leading-relaxed font-light">
                                You are a <strong className="text-fantosia-primary font-medium">Drifter</strong>, a digital nomad seeking glory in the high-stakes arenas of the Core.
                                Will you align with the Technomancers or the Cyber-Ronin? The choice defines your legacy.
                            </p>

                            <div className="pt-4">
                                <Button variant="secondary" className="mr-4">
                                    Read Full Story
                                </Button>
                                <Button variant="link">
                                    View Timeline
                                </Button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Visual Content */}
                    <div className="flex-1 w-full relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-fantosia-primary to-fantosia-secondary rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative aspect-square md:aspect-video rounded-2xl overflow-hidden border border-white/10 bg-fantosia-surface shadow-2xl"
                        >
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,0,255,0.4),rgba(0,0,0,0))]" />

                            {/* Abstract Visual Placeholder */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <div className="w-32 h-32 border-4 border-fantosia-primary rounded-full flex items-center justify-center animate-slow-spin opacity-50">
                                    <div className="w-24 h-24 border-4 border-fantosia-secondary rounded-full border-t-transparent" />
                                </div>
                                <span className="mt-8 text-fantosia-text/40 text-xl font-display tracking-[0.5em] uppercase">
                                    Simulation Active
                                </span>
                            </div>
                        </motion.div>

                        {/* Floating Element */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-8 -left-8 bg-fantosia-bg border border-white/10 p-4 rounded-lg shadow-xl backdrop-blur-md hidden md:block"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                <span className="text-xs font-mono text-fantosia-primary">SYSTEM OVERRIDE DETECTED</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
