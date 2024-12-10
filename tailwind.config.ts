import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        borderPulse: 'borderPulse 2s infinite',
        movingBorder: "movingBorder 5s linear infinite",
      },
      keyframes: {
        borderPulse: {
          '0%': { borderColor: 'transparent' },
          '50%': { borderColor: '#10b981' }, // Green (Tailwind's emerald-500)
          '100%': { borderColor: 'transparent' },
        },
        movingBorder: {
          "0%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
          "100%": { "background-position": "0% 50%" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
