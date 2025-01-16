/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
        "text-grey": "#66676e",
        "text-interactive": "#6328e0",
        "border-secondary": "#d0d1d3"
      },
      fontSize: {
        "xs": "0.75rem",
        "sm": "0.875rem",
        "base": "1rem",
        "lg": "1.125rem",
        "xl": "1.25rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "3.75rem",
        "7xl": "4.5rem",
        "8xl": "6rem",
        "9xl": "8rem"
      },
      fontFamily: {
        "helveticaRegular": ["HelveticaNowText-Regular", "Helvetica", "sans-serif"],
        "helveticaMedium": ["HelveticaNowText-Medium", "Helvetica", "sans-serif"],
        "helveticaBold": ["HelveticaNowText-Bold", "Helvetica", "sans-serif"],
        "tiemposLight": "Tiempos-Light",
        "tiemposReguar": "Tiempos-Regular",
        "tiemposMedium": "Tiempos-Medium"
      }
  	}
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("tailwindcss-animate"),
  ],
}

