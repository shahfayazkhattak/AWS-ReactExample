import { Github, Twitter, Youtube, Twitch, Disc } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-black py-16 border-t border-white/10 relative overflow-hidden">
            {/* Glow effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-fantosia-primary/30 to-transparent"></div>

            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-2xl font-display font-black text-white mb-4 tracking-widest">FANTOSIA</h3>
                        <p className="text-fantosia-muted text-sm max-w-xs font-light leading-relaxed mb-6">
                            The next evolution of competitive gaming. Built on the blockchain, powered by quantum computing, played by legends.
                        </p>
                        <div className="flex gap-4">
                            {[Twitter, Youtube, Twitch, Github].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-fantosia-muted hover:bg-fantosia-primary hover:text-black transition-all duration-300">
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-display font-bold uppercase tracking-widest text-sm mb-6">Menu</h4>
                        <ul className="space-y-4 text-sm text-fantosia-muted">
                            {['Game Features', 'Story & Lore', 'Community', 'Support'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="hover:text-fantosia-primary transition-colors">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-display font-bold uppercase tracking-widest text-sm mb-6">Legal</h4>
                        <ul className="space-y-4 text-sm text-fantosia-muted">
                            {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'EULA'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="hover:text-fantosia-primary transition-colors">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-fantosia-muted text-xs">
                        &copy; {new Date().getFullYear()} Fantosia Studios. All rights reserved.
                    </p>
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        <span className="text-xs text-fantosia-muted font-mono">SERVERS ONLINE</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
