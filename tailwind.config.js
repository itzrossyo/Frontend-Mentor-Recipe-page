/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html'], // Separate file paths with commas
    theme: {
        extend: {
            colors: {
                divBackground: 'hsl(330, 100%, 98%)',
                bodyBackGround: 'hsl(30, 54%, 90%)',
            },
            fontFamily: {
                OutfitRegular: ['Outfit-Regular', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
