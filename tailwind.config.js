/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                'red-600': '#DC2626',
                'red-700': '#B91C1C',
            },
        },
    },
    plugins: [],
};
