/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          "midnight-green": "hsl(186, 98%, 17%)", // #014e56
          "light-coral": "hsl(0, 87%, 73%)", // #f67e7e
          white: "hsl(0, 0%, 100%)", // #ffffff
        },

        secondary: {
          "rapture-blue": "hsl(179, 42%, 63%)", // #79c8c7
          "polic-blue": "hsl(187, 41%, 29%)", // #2c6269
          "deep-jungle-green": "hsl(186, 100%, 14%)", // #004047
          "sacramento-state-green": "hsl(186, 96%, 10%)", // #012f34
          "dark-green": "hsl(186, 100%, 8%)", // #002529
        },
      },

      backgroundImage: {
        contactus: "url('/images/bg-pattern-home-6-about-5.svg')",
      },
    },
  },
  plugins: [],
};
