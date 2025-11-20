// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       // === Fonts ===
//       fontFamily: {
//         'open-sans': ['"Open Sans"', 'sans-serif'],
//         'roboto': ['"Roboto"', 'sans-serif'],
//       },

//       // === Colors (your brand) ===
//       colors: {
//         primary: {
//           50: '#f0f9f5',
//           100: '#e0f3eb',
//           200: '#c1e7d7',
//           300: '#94d6b9',
//           400: '#66c199',
//           500: '#526B61',   // main brand
//           600: '#25473A',   // dark hover
//           700: '#294b3c',
//           800: '#385248',
//           900: '#547367',
//         },
//         accent: {
//           500: '#D8D5C5',
//         }
//       },

//       // === Animations ===
//       keyframes: {
//         fadeIn: {
//           '0%': { opacity: '0', transform: 'translateY(12px)' },
//           '100%': { opacity: '1', transform: 'translateY(0)' },
//         },
//         shine: {
//           '0%': { transform: 'translateX(-100%)' },
//           '100%': { transform: 'translateX(100%)' },
//         }
//       },
//       animation: {
//         fadeIn: 'fadeIn 0.8s ease-out forwards',
//         'fadeIn-delay': 'fadeIn 0.8s ease-out 0.3s forwards',
//         shine: 'shine 1.5s ease-in-out infinite',
//       },

//       // === Drop Shadow ===
//       dropShadow: {
//         sm: '0 1px 2px rgba(0,0,0,0.05)',
//       },
//     },
//   },
//   plugins: [
//     // Optional: Add animation delay utilities
//     function ({ addUtilities }) {
//       addUtilities({
//         '.animation-delay-200': { 'animation-delay': '200ms' },
//         '.animation-delay-300': { 'animation-delay': '300ms' },
//         '.animation-delay-400': { 'animation-delay': '400ms' },
//       });
//     },
//   ],
// };