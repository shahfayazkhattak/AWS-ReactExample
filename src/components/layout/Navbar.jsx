import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Gamepad2, Zap } from "lucide-react";
import { Button } from "../ui/Button";

const navLinks = [
    { name: "Game", href: "#features" },
    { name: "Lore", href: "#about" },
    { name: "Community", href: "#newsletter" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                    ? "bg-fantosia-bg/60 backdrop-blur-xl border-b border-white/5 py-4"
                    : "bg-transparent py-8"
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <div className="flex items-center gap-3 group cursor-pointer">
                    <div className="relative">
                        <div className="absolute inset-0 bg-fantosia-primary blur-lg opacity-20 group-hover:opacity-50 transition-opacity" />
                        <Gamepad2 className="w-10 h-10 text-fantosia-primary relative z-10" />
                    </div>
                    <span className="text-2xl font-display font-black tracking-widest text-white group-hover:text-shadow-glow transition-all">
                        FANTOSIA
                    </span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-fantosia-muted hover:text-white transition-colors text-xs font-display font-bold uppercase tracking-[0.2em] relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-fantosia-primary transition-all duration-300 group-hover:w-full" />
                        </a>
                    ))}
                    <Button variant="default" size="sm" className="ml-4">
                        <Zap className="w-4 h-4 mr-2" />
                        Play Now
                    </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "100vh" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-fantosia-bg/95 backdrop-blur-xl border-t border-white/10 overflow-hidden fixed inset-0 top-[80px] z-40"
                    >
                        <div className="flex flex-col p-8 gap-8 items-center justify-center h-full">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-3xl font-display font-bold text-white hover:text-fantosia-primary tracking-widest"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <Button className="w-full max-w-xs mt-8">Play Now</Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
