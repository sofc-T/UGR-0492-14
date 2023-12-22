// tailwind.config.js
module.exports = {
  content: [
    'html/**/*.html',
    'js/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Sans Georgian', 'sans-serif'],
        allura: ['Allura', 'cursive'],
      },
      fontSize: {
        large: '1.25rem', // Adjust the size as needed
      },
      colors: {
        main: 'rgb(0, 255, 255)',
        lmain: 'rgb(102, 247, 247)',
        comp: 'rgb(255, 102, 0)',
        llmain: 'rgb(186, 246, 246)',
        llcomp: 'rgb(251, 181, 135)',
        lcomp: 'rgb(251, 140, 66)',
      },
    },
  },
  plugins: [],
}

