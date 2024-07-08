/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{html,js,ts,jsx,tsx}',
    './pages/**/*.{html,js,ts,jsx,tsx}',
    './components/**/*.{html,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      },
      colors: {
        'primary-muted': 'oklch(var(--primary-muted) / <alpha-value>)'
      }
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
    require('daisyui')
  ],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          ".txt-primary": {
            "color": "rgb(39, 39, 42)"
          },
          ".txt-third": {
            "color": "rgb(255, 66, 78)"
          },
          ".txt-secondary": {
            "color": "rgb(10, 104, 255)"
          },
          ".txt-secondary-hv": {
            "color": "rgba(10, 104, 255, 0.2)"
          },
          ".txt-fourth": {
            "color": "rgb(128, 128, 137)"
          },
          "--primary-muted": "65% 0.2 295",
          primary: "rgb(255, 255, 255)",
          secondary: "#efefef",
        },
      },
    ],
    darkTheme: "light", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
}

