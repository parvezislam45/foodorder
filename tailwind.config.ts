import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        pulse: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'random-float': 'randomFloat 10s ease-in-out infinite',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: 1 },
          '50%': { transform: 'scale(1.5)', opacity: 0.7 },
        },
        randomFloat: {
          '0%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(50px, -50px)' },
          '50%': { transform: 'translate(-50px, 50px)' },
          '75%': { transform: 'translate(50px, 50px)' },
          '100%': { transform: 'translate(-50px, -50px)' },
        }
      },
      
    },
  },
  plugins: [],
} satisfies Config;
