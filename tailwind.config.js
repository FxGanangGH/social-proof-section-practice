/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{vue,html,js}'],
  theme: {
    extend: {
      colors: {
        primary: {
          500: 'hsl(300, 43%, 22%)',
          600: 'hsl(333, 80%, 67%)'
        },
        secondary: {
          500: 'hsl(303, 10%, 53%)',
          600: 'hsl(300, 24%, 96%)'
        }
      },
      fontSize: {
        'body-content': '15px'
      },
      fontFamily: {
        'league-spartan': ['League Spartan', 'sans-serif']
        // Weight 400, 500, 700
      },
      screens: {
        'semi-lg': '800px'
      }
    }
  },
  plugins: []
}
