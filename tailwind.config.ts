import type {Config} from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        'princess-pink': 'hsl(var(--princess-pink))',
        'soft-lavender': 'hsl(var(--soft-lavender))',
        'cream-white': 'hsl(var(--cream-white))',
        'rose-blush': 'hsl(var(--rose-blush))',
        'pearl-white': 'hsl(var(--pearl-white))',
        'neon-pink': 'hsl(var(--neon-pink))',
        'neon-purple': 'hsl(var(--neon-purple))',
        'neon-lavender': 'hsl(var(--neon-lavender))',
        'dark-pink': 'hsl(var(--dark-pink))',
        'deep-purple': 'hsl(var(--deep-purple))',
        'hot-pink': 'hsl(var(--hot-pink))',
        'magenta': 'hsl(var(--magenta))',
        'violet': 'hsl(var(--violet))',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "float": {
          "0%, 100%": { transform: 'translateY(0px) rotate(0deg)' },
          "50%": { transform: 'translateY(-20px) rotate(5deg)' },
        },
        "sparkle": {
          "0%, 100%": { opacity: '1', transform: 'scale(1)' },
          "50%": { opacity: '0.3', transform: 'scale(1.2)' },
        },
        "glow": {
          "0%, 100%": { filter: 'drop-shadow(0 0 8px hsl(var(--hot-pink))) drop-shadow(0 0 12px hsl(var(--neon-pink)))' },
          "50%": { filter: 'drop-shadow(0 0 25px hsl(var(--hot-pink))) drop-shadow(0 0 35px hsl(var(--deep-purple)))' },
        },
        "heartbeat": {
          "0%, 100%": { transform: 'scale(1)' },
          "25%": { transform: 'scale(1.1)' },
          "50%": { transform: 'scale(1.05)' },
          "75%": { transform: 'scale(1.15)' },
        },
        "fadeIn": {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        "slideUp": {
          from: { opacity: '0', transform: 'translateY(50px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        "rainbow": {
          "0%": { filter: 'hue-rotate(0deg)' },
          "100%": { filter: 'hue-rotate(360deg)' },
        },
        "pulse-glow": {
          "0%, 100%": {
            opacity: '1',
            transform: 'scale(1)',
            filter: 'drop-shadow(0 0 5px hsl(var(--neon-pink)))',
          },
          "50%": {
            opacity: '0.8',
            transform: 'scale(1.05)',
            filter: 'drop-shadow(0 0 15px hsl(var(--neon-pink))) drop-shadow(0 0 25px hsl(var(--neon-purple)))',
          },
        },
        "swing": {
          "0%, 100%": { transform: 'rotate(0deg)' },
          "15%": { transform: 'rotate(5deg)' },
          "30%": { transform: 'rotate(-5deg)' },
          "45%": { transform: 'rotate(3deg)' },
          "60%": { transform: 'rotate(-3deg)' },
          "75%": { transform: 'rotate(1deg)' },
        },
        "bounce-in": {
          "0%": {
            opacity: '0',
            transform: 'scale(0.3) translateY(100px)',
          },
          "50%": {
            opacity: '1',
            transform: 'scale(1.05) translateY(-10px)',
          },
          "100%": {
            opacity: '1',
            transform: 'scale(1) translateY(0)',
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 3s ease-in-out infinite",
        "sparkle": "sparkle 1.5s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite",
        "heartbeat": "heartbeat 1.5s ease-in-out infinite",
        "fadeIn": "fadeIn 0.8s ease-out forwards",
        "slideUp": "slideUp 0.6s ease-out forwards",
        "rainbow": "rainbow 2s linear infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "swing": "swing 2s ease-in-out infinite",
        "bounce-in": "bounce-in 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards",
      },
      backgroundImage: {
        'gradient-princess': 'linear-gradient(135deg, hsl(var(--hot-pink)), hsl(var(--neon-purple)))',
        'gradient-dreamy': 'linear-gradient(180deg, hsl(var(--princess-pink)), hsl(var(--deep-purple)))',
        'gradient-neon': 'linear-gradient(45deg, hsl(var(--neon-pink)), hsl(var(--magenta)))',
        'gradient-magical': 'linear-gradient(135deg, hsl(var(--dark-pink)), hsl(var(--violet)), hsl(var(--hot-pink)))',
        'gradient-royal': 'linear-gradient(45deg, hsl(var(--deep-purple)), hsl(var(--neon-pink)))',
        'gradient-vibrant': 'linear-gradient(135deg, hsl(var(--magenta)), hsl(var(--neon-purple)), hsl(var(--violet)))',
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
