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
                    bg: "#050511", // Very dark blue/black
                    card: "rgba(255, 255, 255, 0.05)",
                    primary: "#00f0ff", // Neon Cyan
                    secondary: "#7000ff", // Neon Purple
                    accent: "#ff0099", // Neon Pink
                    text: "#e0e0e0",
                    muted: "#94a3b8",
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Orbitron', 'sans-serif'], // We might need to import these
            },
            backgroundImage: {
                'hero-gradient': "linear-gradient(to bottom, #050511 0%, transparent 50%, #050511 100%)",
                'glass': "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
            }
        },
    },
    plugins: [],
}
