/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}" ,
    "/public/*.{html,css,js}" ,
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'custom-gradient': 'linear-gradient(45deg, #e11d48 0%, #4f46e5 100%)',
        'header-gradient': 'linear-gradient(45deg,  #4f46e5 0%, #e11d48 100%)',
      }),
      fontFamily: {
        mont: ['Montserrat', 'sans-serif'], 
      },
      screens: {
        xsm: '400px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      colors: {
        PrimColor: '#e11d48', 
        secColor: '#4f46e5',
        darkColor: '#070a13',
        lightColor: '#f0f0f0',
        lhtColor: '#f1f5f9',
      },
      boxShadow: {
        'custom': '0 0 0.8rem #e11d48',
      },
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 90%': { transform: 'translateX(-2px)' },
          '20%, 80%': { transform: 'translateX(2px)' },
          '30%, 50%, 70%': { transform: 'translateX(-2px)' },
          '40%, 60%': { transform: 'translateX(2px)' },
        },
      },
      animation: {
        shake: 'shake 1.5s infinite ',      
      },
    },
    animationDelay: {
      '7000': '7000ms',
    },
  },
  plugins: [],
}

