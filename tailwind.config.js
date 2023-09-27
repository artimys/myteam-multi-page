/** @type {import('tailwindcss').Config} */

// https://design2tailwind.com/blog/tailwindcss-container-component/
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,

        // padding: {
        //   DEFAULT: "1rem",
        //   desktop: "10.31rem",
        // },

        // Customize breakpoints for .container
        screens: {
          desktop: "1440px",
        },
      },

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
        "about-4": "url('/images/bg-pattern-about-4.svg')",
        "about-mobile-nav-1":
          "url('/images/bg-pattern-about-1-mobile-nav-1.svg')",
        quotes: "url('/images/icon-quotes.svg')",
        "home-3": "url('/images/bg-pattern-home-3.svg')",
      },
    },
  },
  plugins: [],
};
