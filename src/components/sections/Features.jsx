import { motion } from "framer-motion";
import { Card } from "../ui/Card";
import { Zap, Shield, Users, Trophy, Cpu, Globe, Crosshair, Terminal } from "lucide-react";

const features = [
    {
        icon: <Zap className="w-6 h-6 text-fantosia-primary" />,
        title: "Zero Latency",
        description: "Quantum-entangled servers ensure your actions happen instantly, anywhere in the galaxy."
    },
    {
        icon: <Users className="w-6 h-6 text-fantosia-accent" />,
        title: "Factions",
        description: "Join the Cyber-Ronin or Technomancers. Your allegiance determines your tech tree."
    },
    {
        icon: <Shield className="w-6 h-6 text-fantosia-secondary" />,
        title: "Sentinel AI",
        description: "Next-gen anti-cheat powered by a sentient AI that monitors fair play in real-time."
    },
    {
        icon: <Trophy className="w-6 h-6 text-yellow-400" />,
        title: "Global Rankings",
        description: "Climb the ladder. Top 500 players qualify for the quarterly 'Ascension' tournament."
    },
    {
        icon: <Cpu className="w-6 h-6 text-blue-400" />,
        title: "Neural Link",
        description: "Direct BCI support for compatible headsets. Control the game with your mind."
    },
    {
        icon: <Globe className="w-6 h-6 text-emerald-400" />,
        title: "Seamless World",
        description: "No loading screens. Travel from the Neon City to the Wastelands instantly."
    },
    {
        icon: <Crosshair className="w-6 h-6 text-red-500" />,
        title: "Precision Gunplay",
        description: "Physics-based ballistics that reward skill, not RNG."
    },
    {
        icon: <Terminal className="w-6 h-6 text-orange-400" />,
        title: "Mod Support",
        description: "Full API access for community creators. Build your own maps and modes."
    }
];

export function Features() {
    return (
        <section id="features" className="py-32 relative overflow-hidden bg-fantosia-bg">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-fantosia-primary tracking-[0.3em] uppercase text-xs font-bold mb-3 block">
                            System Capabilities
                        </span>
                        <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-6">
                            ENGINEERED FOR <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fantosia-secondary to-fantosia-accent">
                                DOMINANCE
                            </span>
                        </h2>
                        <p className="text-fantosia-muted max-w-2xl mx-auto text-lg">
                            The Fantosia Engine pushes the boundaries of what's possible in a browser-based metaverse.
                        </p>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                        >
                            <Card className="p-8 h-full bg-fantosia-surface/50 border-white/5 hover:border-fantosia-primary/30">
                                <div className="mb-6 bg-fantosia-bg/50 w-12 h-12 rounded-lg flex items-center justify-center border border-white/10 shadow-inner">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-display font-bold text-white mb-3 tracking-wide">{feature.title}</h3>
                                <p className="text-sm text-fantosia-muted leading-relaxed font-light">
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
