/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      },
      colors: {
        primary: {
          // โทนสีน้ำตาลอบอุ่นแนวโฟล์ค
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#ebd6c2',
          300: '#e0c4a8',
          400: '#d4a276',
          500: '#c78452',
          600: '#b06e3e',
          700: '#8c5e3b',
          800: '#6f4b32',
          900: '#583e2e',
          950: '#3a2a1f'
        },
        dark: {
          // โทนสีมืดแบบอบอุ่น
          100: '#2c2520',
          200: '#241f1b',
          300: '#1e1915',
          400: '#171310',
          500: '#110e0c'
        },
        accent: {
          // โทนสีส้มแดงแนวเพื่อชีวิต
          100: '#ffe2d6',
          200: '#ffc1ad',
          300: '#ff9f83',
          400: '#f67e5a',
          500: '#e85d39',
          600: '#cf4025',
          700: '#a93620',
          800: '#892e1f',
          900: '#6e271c'
        },
        earth: {
          // โทนสีธรรมชาติ
          100: '#e6e2d3',
          200: '#d2c9a8',
          300: '#b9a97d',
          400: '#9c8c5b',
          500: '#7d6f45',
          600: '#5e5234',
          700: '#4a4129',
          800: '#36301f',
          900: '#2a261a'
        }
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'pulse-slow': 'pulse 3s infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        }
      }
    }
  },
  plugins: []
}

