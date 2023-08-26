/** @type {import('tailwindcss').Config} */
import tailwindCss3d from 'tailwindcss-3d';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      rotate: {
        30: '30deg',
        60: '60deg',
      },
      boxShadow: {
        outer: '0px 5px 10px 0px rgba(255,255,255,0.7);',
        'outer-hover': '0px 10px 20px 2px rgba(255,255,255,0.7);',
        inner1: 'inset 0 5px 10px 0 rgba(0,255,0,0.7);',
        'inner1-hover': 'inset 0px 10px 20px 2px rgba(0,255,0,0.7);',
        inner2: 'inset 0 5px 10px 0 rgba(255,0,0,0.7);',
        'inner2-hover': 'inset 0 10px 20px 2px rgba(255,0,0,0.7);',
        inner3: 'inset 0 5px 10px 0 rgba(0,0,0,0.7);',
        'inner3-hover': 'inset 0 8px 15px 2px rgba(0,0,0,0.7);',
        inner4: 'inset 0 5px 10px 0 rgba(255,255,255,0.7);',
        'inner4-hover': 'inset 0 8px 15px 2px rgba(255,255,255,0.7);',
      },
      screens: {
        xs: '480px',
        '3xl': '2000px',
        '4xl': '2400px',
      },
      fontFamily: {
        header: ['Sansita', 'sans-serif'],
      },
      fontSize: {
        xsmall: ['.6rem', '.9rem'],
        xsmaller: ['.45rem', '.62rem'],
        xsmallest: ['.3rem', '.45rem'],
      },
      colors: {
        'background-black': ' #19181F',
        'transparent-black': ' #19181F80',
        'transparent-white': '#ffffffbf',
        'transparent-red': '#960000b3',
        'transparent-green': '#00ffffb3',
        'translucid-black': '#0000005e',
        'background-div1': '#23202A',
        'background-div2': '#1E1B24',
        'purplish-gray': '#C2C6DD',
        'not-so-white': '#FAFAFA',
      },
    },
  },
  plugins: [
    tailwindCss3d({ legacy: true })
  ],
}
