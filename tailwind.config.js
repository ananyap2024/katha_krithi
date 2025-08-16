/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
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
        border: "var(--color-border)", /* saddle brown with opacity */
        input: "var(--color-input)", /* slightly deeper parchment */
        ring: "var(--color-ring)", /* warm terracotta */
        background: "var(--color-background)", /* warm parchment */
        foreground: "var(--color-foreground)", /* deep brown */
        primary: {
          DEFAULT: "var(--color-primary)", /* warm terracotta */
          foreground: "var(--color-primary-foreground)", /* warm parchment */
        },
        secondary: {
          DEFAULT: "var(--color-secondary)", /* rich saddle brown */
          foreground: "var(--color-secondary-foreground)", /* warm parchment */
        },
        destructive: {
          DEFAULT: "var(--color-destructive)", /* muted sienna */
          foreground: "var(--color-destructive-foreground)", /* warm parchment */
        },
        muted: {
          DEFAULT: "var(--color-muted)", /* slightly deeper parchment */
          foreground: "var(--color-muted-foreground)", /* medium brown */
        },
        accent: {
          DEFAULT: "var(--color-accent)", /* golden yellow */
          foreground: "var(--color-accent-foreground)", /* deep brown */
        },
        popover: {
          DEFAULT: "var(--color-popover)", /* slightly deeper parchment */
          foreground: "var(--color-popover-foreground)", /* deep brown */
        },
        card: {
          DEFAULT: "var(--color-card)", /* slightly deeper parchment */
          foreground: "var(--color-card-foreground)", /* deep brown */
        },
        success: {
          DEFAULT: "var(--color-success)", /* forest green */
          foreground: "var(--color-success-foreground)", /* warm parchment */
        },
        warning: {
          DEFAULT: "var(--color-warning)", /* burnt orange */
          foreground: "var(--color-warning-foreground)", /* deep brown */
        },
        error: {
          DEFAULT: "var(--color-error)", /* muted sienna */
          foreground: "var(--color-error-foreground)", /* warm parchment */
        },
      },
      borderRadius: {
        lg: "var(--radius-lg)", /* 12px */
        md: "var(--radius-md)", /* 8px */
        sm: "var(--radius-sm)", /* 4px */
      },
      fontFamily: {
        'heading': ['Crimson Text', 'serif'],
        'body': ['Source Sans Pro', 'sans-serif'],
        'caption': ['Libre Baskerville', 'serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'fluid-xs': 'clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)',
        'fluid-sm': 'clamp(0.875rem, 0.8rem + 0.375vw, 1rem)',
        'fluid-base': 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
        'fluid-lg': 'clamp(1.125rem, 1rem + 0.625vw, 1.25rem)',
        'fluid-xl': 'clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)',
        'fluid-2xl': 'clamp(1.5rem, 1.3rem + 1vw, 1.875rem)',
        'fluid-3xl': 'clamp(1.875rem, 1.6rem + 1.375vw, 2.25rem)',
        'fluid-4xl': 'clamp(2.25rem, 1.9rem + 1.75vw, 3rem)',
      },
      boxShadow: {
        'cultural-sm': '0 1px 2px var(--shadow-color)',
        'cultural-md': '0 4px 8px var(--shadow-color)',
        'cultural-lg': '0 8px 16px var(--shadow-color)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.4s cubic-bezier(0.4, 0.0, 0.2, 1)',
        'slide-down': 'slideDown 0.4s cubic-bezier(0.4, 0.0, 0.2, 1)',
      },
      keyframes: {
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
        fadeIn: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        slideUp: {
          '0%': {
            transform: 'translateY(10px)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        slideDown: {
          '0%': {
            transform: 'translateY(-10px)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
      },
      transitionTimingFunction: {
        'cultural': 'cubic-bezier(0.4, 0.0, 0.2, 1)',
      },
      zIndex: {
        'header': '100',
        'dropdown': '150',
        'toast': '200',
        'modal': '300',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}