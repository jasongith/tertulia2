/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'tertulia': {
                    'cream': '#F5F1E8',
                    'beige': '#E8DCC4',
                    'tan': '#D4B896',
                    'brown': '#8B6F47',
                    'dark-brown': '#5C4A2F',
                    'coffee': '#3E2723',
                    'amber': '#D97706',
                    'warm-gray': '#78716C',
                }
            },
            fontFamily: {
                'serif': ['Cormorant Garamond', 'serif'],
                'sans': ['Lato', 'sans-serif'],
            },
            animation: {
                'fade-in': 'fadeIn 0.6s ease-in-out',
                'slide-up': 'slideUp 0.5s ease-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
        },
    },
    plugins: [],
}
