/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeUp: {
          from: { opacity: 0, transform: 'translateY(16px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        modalIn: {
          from: { opacity: 0, transform: 'scale(0.93) translateY(14px)' },
          to: { opacity: 1, transform: 'scale(1) translateY(0)' },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.6s ease-out",
        'modal-in': 'modalIn 0.3s cubic-bezier(0.34, 1.4, 0.64, 1) forwards',
      },
    },
  },
  plugins: [],
};