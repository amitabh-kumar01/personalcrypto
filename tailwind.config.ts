import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      margin: {
        '17': '68px',
        '18': '72px',
        '19': '76px', 
      },
      keyframes: {
        parallax: {
          '0%': { backgroundPosition: 'center 50%' },
          '100%': { backgroundPosition: 'center 100%' },
        },
      },
      animation: {
        parallax: 'parallax 1s linear infinite',
      },
      borderWidth: {
        '10': '10px',  
        '12': '12px',
        '16': '16px',
        '20': '20px',
        '24': '24px',
        '30': '30px',
        '40': '40px',
        '50': '50px',
      },
      translate: {
        '92' : '92%',
        '40': '40%',
        '45': '45%',
        '47': '47%',
        '48' : '48%',
      },
      height: {
        '350': '350px',
        '450': '450px',
        '500': '500px',
        '550': '550px',
        '600': '600px',
        '650': '650px',
        '200': '200px',
        '250': '250px',
        '300': '300px',
      },
      width: {
        '350': '350px',
        '400': '400px',
        '450': '450px',
        '500': '500px',
        '550': '550px',
        '600': '600px',
        '650': '650px',
        '200': '200px',
        '250': '250px',
        '300': '300px',
      },
      fontSize: {
        '40': '40px',
        '13': '13px',
        '18': '18px',
        '16': '16px',

      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        crypOrange: "#FEA301",
        bitBlack: "#222328",
        text: "#353535",
        nLetterbg: "#1F202D",
        customYellow:"#fea301",
        Choosebg: "#FAFAFA",
        customGray:"rgb(34 35 47)"
      },
      fontFamily: {
        varela: ['Varela', 'sans-serif'],
        ubuntu: ['Ubuntu', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
