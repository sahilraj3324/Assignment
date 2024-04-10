/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'sel':'#9400FF',
        'grey': '#4D4D4D',
        'first' : '#FF69B4',
        'sec':'#717171' ,
        'blue':'#00FFFF',
        'yello':'#FEE715',
        'green':'#99F443',
        'dark': '#FFFFDD',
        'hov':'#040D12',
      },
      boxShadow:{
        '3xl': '0px 10px 50px 0px rgba(0,0,0,0.15)'
      },
    },
  },
  plugins: [],
}

