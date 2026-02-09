/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Seguimos usando 'class' para dark mode
  content: ["./src/**/*.{html,ts}"],
  safelist: [
    // Estas clases se incluyen siempre, incluso si Tailwind no las detecta en los templates
    'dark:bg-background',
    'dark:text-foreground',
    'dark:border-border',
    'dark:card',
    'dark:card-foreground',
    'dark:primary',
    'dark:primary-foreground',
    'dark:muted',
    'dark:muted-foreground',
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },

        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },

        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },

        chart: {
          "1": "hsl(var(--chart-1) / <alpha-value>)",
          "2": "hsl(var(--chart-2) / <alpha-value>)",
          "3": "hsl(var(--chart-3) / <alpha-value>)",
          "4": "hsl(var(--chart-4) / <alpha-value>)",
          "5": "hsl(var(--chart-5) / <alpha-value>)",
        },
      },

      borderRadius: {
        lg: "var(--radius)",
      },

      fontFamily: {
        sans: ["var(--font-sans)"],
        serif: ["var(--font-serif)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  plugins: [],
};
