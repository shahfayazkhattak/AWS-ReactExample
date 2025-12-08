/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                fantosia: {
                    bg: "#030014", // Deep Void
                    card: "rgba(25, 10, 50, 0.4)", // Translucent Purple-Black
                    primary: "#00f0ff", // Electric Cyan
                    secondary: "#9d00ff", // Deep Neon Violet
                    accent: "#ff0080", // Cyber Pink
                    text: "#eef2ff", // Soft Blue-White
                    muted: "#94a3b8", // Slate
                    surface: "#0f0529", // Dark Surface
                    glow: "#4f00ff" // Glow base
                }
            },
            fontFamily: {
                sans: ['Outfit', 'sans-serif'],
                display: ['Orbitron', 'sans-serif'],
            },
            backgroundImage: {
                'hero-gradient': "radial-gradient(circle at 50% 0%, #1a0b36 0%, #030014 60%)",
                'glass': "linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%)",
                'glass-hover': "linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.05) 100%)",
            },
            animation: {
                'slow-spin': 'spin 20s linear infinite',
                'float': 'float 6s ease-in-out infinite',
                'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                'pulse-glow': {
                    '0%, 100%': { opacity: '0.5', filter: 'brightness(1)' },
                    '50%': { opacity: '1', filter: 'brightness(1.5)' },
                }
            }
        },
    },
    plugins: [],
}
