/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000",
        dimgray: {
          "100": "#616161",
          "200": "#585858",
        },
        tomato: "rgba(255, 51, 52, 0.72)",
        linen: "#f4ece1",
        salmon: "#ff7171",
        pink: "rgba(252, 195, 189, 0)",
        lightpink: "rgba(227, 171, 163, 0)",
        firebrick: "#cc3d3d",
        darkslategray: "#2f2f2f",
        gray: {
          "100": "#909090",
          "200": "rgba(148, 140, 140, 0.31)",
        },
        floralwhite: {
          "100": "#fff8f0",
          "200": "rgba(255, 249, 240, 0.1)",
        },
        darkorange: "#ff7e00",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
      },
      borderRadius: {
        "26xl": "45px",
        "6xl": "25px",
        "65xl": "84px",
        "11xl": "30px",
      },
    },
    fontSize: {
      "8xl": "27px",
      "3xl": "22px",
      "6xl": "25px",
      xl: "20px",
      "13xl": "32px",
      "7xl": "26px",
      lgi: "19px",
      "39xl": "58px",
      "27xl": "46px",
      "16xl": "35px",
      "22xl": "41px",
      "14xl": "33px",
      lg: "18px",
      base: "16px",
      "89xl": "108px",
      "35xl": "54px",
      inherit: "inherit",
    },
    screens: {
      mq1425: {
        raw: "screen and (max-width: 1425px)",
      },
      lg: {
        max: "1200px",
      },
      mq825: {
        raw: "screen and (max-width: 825px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
