/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
              blurred05: 'rgba(0, 0, 0, .05)',
              blurred1: 'rgba(0, 0, 0, .1)',
              blurred2: 'rgba(0, 0, 0, .2)',
              blurred3: 'rgba(0, 0, 0, .3)',
              blurred4: 'rgba(0, 0, 0, .4)',
            },
        },
    },
    plugins: [],
};
