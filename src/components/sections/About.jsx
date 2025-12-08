import { motion } from "framer-motion";
import { Button } from "../ui/Button";

export function About() {
    return (
        <section id="about" className="py-24 relative overflow-hidden bg-black">
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-fantosia-secondary/10 to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Text Content */}
                    <div className="flex-1">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-fantosia-primary tracking-widest uppercase text-sm font-bold mb-2 block">
                                The Lore
                            </span>
                            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                                A UNIVERSE REBORN
                            </h2>
                            <p className="text-fantosia-muted text-lg mb-6 leading-relaxed">
                                In the year 2142, the boundaries between physical and digital reality collapsed.
                                Fantosia emerged from the data streams—a hyper-realistic metaverse where the laws of physics are rewritten by code.
                            </p>
                            <p className="text-fantosia-muted text-lg mb-8 leading-relaxed">
                                You are a "Drifter," a digital nomad seeking glory in the high-stakes arenas of the Core.
                                Will you align with the Technomancers or the Cyber-Ronin? The choice defines your legacy.
                            </p>

                            <Button variant="secondary">
                                Read Full Story
                            </Button>
                        </motion.div>
                    </div>

                    {/* Visual Content (Placeholder for an image) */}
                    <div className="flex-1 w-full">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative aspect-video rounded-xl overflow-hidden border border-fantosia-primary/20 bg-fantosia-card shadow-[0_0_50px_rgba(112,0,255,0.2)]"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-fantosia-secondary/20 to-fantosia-primary/20 z-10" />
                            {/* This would ideally be an image */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-fantosia-primary/50 text-6xl font-display font-bold opacity-20 rotate-12">
                                    FANTOSIA
                                </span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
