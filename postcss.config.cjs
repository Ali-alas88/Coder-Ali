const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

module.exports = {
    plugins: [
        tailwindcss({ /* Tailwind CSS configuration options here */ }),
        autoprefixer({
            // Autoprefixer configuration options here (optional)
        }),
    ],
};
