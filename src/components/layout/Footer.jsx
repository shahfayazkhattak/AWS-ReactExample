import { Github, Twitter, Youtube } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-black py-12 border-t border-fantosia-primary/20 relative overflow-hidden">
            {/* Glow effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-fantosia-primary/50 to-transparent"></div>

            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-display font-bold text-white mb-2">FANTOSIA</h3>
                        <p className="text-fantosia-muted text-sm">
                            &copy; {new Date().getFullYear()} Fantosia Studios. All rights reserved.
                        </p>
                    </div>

                    <div className="flex gap-6">
                        <a href="#" className="text-fantosia-muted hover:text-fantosia-primary transition-colors">
                            <Twitter className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-fantosia-muted hover:text-fantosia-primary transition-colors">
                            <Youtube className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-fantosia-muted hover:text-fantosia-primary transition-colors">
                            <Github className="w-5 h-5" />
                        </a>
                    </div>

                    <div className="flex gap-4 text-sm text-fantosia-muted">
                        <a href="#" className="hover:text-white transition-colors">Privacy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms</a>
                        <a href="#" className="hover:text-white transition-colors">Support</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
