import { motion } from "framer-motion";
import { Card } from "../ui/Card";
import { Zap, Shield, Users, Trophy } from "lucide-react";

const features = [
    {
        icon: <Zap className="w-8 h-8 text-fantosia-primary" />,
        title: "Lightning Fast",
        description: "Experience zero-latency gameplay powered by our distributed quantum servers."
    },
    {
        icon: <Users className="w-8 h-8 text-fantosia-accent" />,
        title: "Massive Multiplayer",
        description: "Join factions and compete in 100v100 battles that reshape the world map."
    },
    {
        icon: <Shield className="w-8 h-8 text-fantosia-secondary" />,
        title: "Anti-Cheat 3.0",
        description: "Fair play guaranteed by our proprietary AI-driven behavior analysis."
    },
    {
        icon: <Trophy className="w-8 h-8 text-yellow-400" />,
        title: "Pro League",
        description: "Weekly tournaments with real cash prizes and global rankings."
    }
];

export function Features() {
    return (
        <section id="features" className="py-24 relative overflow-hidden bg-fantosia-bg">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-display font-bold text-white mb-4"
                    >
                        GAME FEATURES
                    </motion.h2>
                    <p className="text-fantosia-muted max-w-2xl mx-auto">
                        Built for performance, designed for glory. Discover what makes Fantosia unique.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="p-6 h-full border-fantosia-primary/10 hover:border-fantosia-primary/40 transition-colors">
                                <div className="mb-4 bg-white/5 w-16 h-16 rounded-lg flex items-center justify-center backdrop-blur-sm">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                                <p className="text-fantosia-muted leading-relaxed">
                                    {feature.description}
                                </p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
