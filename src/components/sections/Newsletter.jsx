import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { Mail, ArrowRight } from "lucide-react";

export function Newsletter() {
    return (
        <section id="newsletter" className="py-32 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-fantosia-bg via-fantosia-surface to-black" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative bg-white/5 border border-white/10 rounded-3xl p-8 md:p-20 text-center max-w-5xl mx-auto backdrop-blur-md overflow-hidden"
                >
                    {/* Decorative Glows */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-fantosia-primary to-transparent opacity-50" />
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-fantosia-primary/20 rounded-full blur-[80px]" />
                    <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-fantosia-secondary/20 rounded-full blur-[80px]" />

                    <div className="relative z-10">
                        <div className="w-16 h-16 bg-gradient-to-br from-fantosia-primary to-fantosia-secondary rounded-2xl mx-auto mb-8 flex items-center justify-center shadow-lg transform rotate-3">
                            <Mail className="w-8 h-8 text-white" />
                        </div>

                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 tracking-tight">
                            JOIN THE <span className="text-fantosia-primary">VANGUARD</span>
                        </h2>
                        <p className="text-fantosia-muted max-w-xl mx-auto mb-10 text-lg font-light">
                            Get exclusive access to beta keys, developer updates, and in-game rewards.
                            Be the first to enter the simulation.
                        </p>

                        <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
                            <div className="relative flex-1">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full bg-black/40 border border-white/10 rounded-sm px-6 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-fantosia-primary focus:ring-1 focus:ring-fantosia-primary transition-all font-sans"
                                />
                            </div>
                            <Button type="submit" size="lg" className="whitespace-nowrap">
                                Subscribe <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </form>

                        <p className="text-xs text-fantosia-muted/50 mt-8 uppercase tracking-widest">
                            No spam. Only critical updates.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
