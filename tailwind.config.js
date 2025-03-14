import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // Ensure this is set properly
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',       // Indigo Blue (Primary)
        secondary: '#F59E0B',     // Amber (Secondary)
        accent: '#10B981',        // Emerald Green (Accent)
        background: '#F3F4F6',    // Light Gray (Background)
         darkBackground: '#333'
      },
    },
  },
  plugins: [
    daisyui,
  ],
}

