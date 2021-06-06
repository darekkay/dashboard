/** @type {import('@types/tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
  presets: [require("@darekkay/styles/tailwind.config")],

  theme: {
    // remove line-height from base fontSize definition
    fontSize: {
      0: "1rem",
      1: "1.2rem",
      2: "1.4rem",
      3: "1.6rem",
      4: "1.8rem",
      5: "2rem",
      6: "2.4rem",
      7: "3rem",
    },

    extend: {
      minWidth: {
        250: "250px",
      },
    },
  },
};
