import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { Features } from "./components/sections/Features";
import { About } from "./components/sections/About";
import { Newsletter } from "./components/sections/Newsletter";

function App() {
  return (
    <div className="min-h-screen bg-fantosia-bg text-fantosia-text font-sans selection:bg-fantosia-primary selection:text-fantosia-bg overflow-x-hidden">
      <Navbar />

      <main>
        <Hero />
        <Features />
        <About />
        <Newsletter />
      </main>

      <Footer />

      {/* Global Background Elements */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[9999] mix-blend-overlay"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>

    </div>
  );
}

export default App;
