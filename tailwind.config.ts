
import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        dental: {
          '50': '#f0f7fc',
          '100': '#dcecf7',
          '200': '#c0dff1',
          '300': '#94cae8',
          '400': '#60aeda',
          '500': '#4295cc',
          '600': '#3378ad',
          '700': '#2b618d',
          '800': '#295375',
          '900': '#264563',
          '950': '#192c41',
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
        display: ["Playfair Display", ...fontFamily.serif],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0", opacity: "0" },
          to: { height: "var(--radix-accordion-content-height)", opacity: "1" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)", opacity: "1" },
          to: { height: "0", opacity: "0" },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        },
        "pulse-gentle": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.7s ease-out forwards",
        "pulse-gentle": "pulse-gentle 3s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    plugin(({ addUtilities }) => {
      addUtilities({
        ".text-shadow-sm": {
          textShadow: "0 1px 2px rgba(0,0,0,0.2)",
        },
        ".text-shadow-md": {
          textShadow: "0 2px 4px rgba(0,0,0,0.2)",
        },
        ".text-shadow-lg": {
          textShadow: "0 4px 8px rgba(0,0,0,0.2)",
        },
        ".text-shadow-xl": {
          textShadow: "0 8px 16px rgba(0,0,0,0.2)",
        },
      });
    }),
  ],
} satisfies Config
