import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'off-white': '#FEFAFB',
        'grey-text': '#4D4D4D',
        'green': '#2E5761',
        'orange': '#BF5428',
        'grey-bg': '#EAEEEF',
        'light-green': '#FDFDFD',
      },
    },
  },
  plugins: [],
};
export default config;
