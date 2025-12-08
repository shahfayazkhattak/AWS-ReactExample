import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { Mail } from "lucide-react";

export function Newsletter() {
    return (
        <section id="newsletter" className="py-24 relative overflow-hidden bg-fantosia-bg">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-fantosia-primary/10 to-fantosia-secondary/10 rounded-2xl p-8 md:p-16 border border-white/10 text-center max-w-4xl mx-auto backdrop-blur-sm"
                >
                    <Mail className="w-12 h-12 text-white mx-auto mb-6" />
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                        JOIN THE VANGUARD
                    </h2>
                    <p className="text-fantosia-muted max-w-xl mx-auto mb-8">
                        Get exclusive access to beta keys, developer updates, and in-game rewards.
                        Subscribe to our newsletter today.
                    </p>

                    <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 bg-black/50 border border-fantosia-primary/30 rounded-md px-4 py-3 text-white focus:outline-none focus:border-fantosia-primary focus:ring-1 focus:ring-fantosia-primary transition-all"
                        />
                        <Button type="submit">
                            Subscribe
                        </Button>
                    </form>

                    <p className="text-xs text-fantosia-muted mt-6">
                        By subscribing, you agree to our Privacy Policy and Terms of Service.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
