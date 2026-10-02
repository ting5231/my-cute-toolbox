/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // 背景
        milk: '#FFF9FB',
        blush: '#FFF3F7',
        petal: '#FCE7EF',
        // 主色
        sakura: {
          300: '#F5B8CD',
          400: '#EFA7C1',
          500: '#D989AA',
          600: '#B9688A', // 深一階，給小字 / icon 用以維持對比
        },
        line: '#F4CAD9',
        // 文字
        ink: {
          DEFAULT: '#6D5660',
          deep: '#4F4147',
        },
        // 點綴
        butter: {
          100: '#FFF8E4',
          200: '#FFEFC2',
          400: '#F4D98A',
        },
        lavender: {
          100: '#F6F1FF',
          200: '#E9E0FB',
          400: '#BFA9EC',
        },
      },
      fontFamily: {
        cute: [
          'Quicksand',
          '"Zen Maru Gothic"',
          '"Noto Sans TC"',
          '"PingFang TC"',
          '"Microsoft JhengHei"',
          'system-ui',
          'sans-serif',
        ],
        display: ['Fredoka', 'Quicksand', '"Zen Maru Gothic"', 'system-ui', 'sans-serif'],
        symbol: [
          '"Segoe UI Symbol"',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Noto Sans Symbols 2"',
          '"Noto Sans"',
          'system-ui',
          'sans-serif',
        ],
      },
      boxShadow: {
        sticker: '0 1px 0 rgba(255,255,255,.9) inset, 0 10px 24px -14px rgba(217,137,170,.55), 0 2px 6px -3px rgba(217,137,170,.25)',
        lift: '0 1px 0 rgba(255,255,255,.9) inset, 0 18px 34px -16px rgba(217,137,170,.6), 0 4px 10px -4px rgba(217,137,170,.3)',
        soft: '0 6px 18px -10px rgba(217,137,170,.5)',
      },
      borderRadius: {
        card: '24px',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(var(--r, 0deg))' },
          '50%': { transform: 'translateY(-8px) rotate(var(--r, 0deg))' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(14px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        pop: {
          '0%': { transform: 'scale(1)' },
          '35%': { transform: 'scale(1.45)' },
          '60%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)' },
        },
        burst: {
          '0%': { opacity: '0.9', transform: 'scale(0.4)' },
          '100%': { opacity: '0', transform: 'scale(1.8)' },
        },
        toastIn: {
          from: { opacity: '0', transform: 'translate(-50%, 16px) scale(.96)' },
          to: { opacity: '1', transform: 'translate(-50%, 0) scale(1)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-6deg)' },
          '50%': { transform: 'rotate(6deg)' },
        },
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        'float-slow': 'float 7s ease-in-out infinite',
        'fade-up': 'fadeUp .6s cubic-bezier(.2,.7,.3,1) both',
        pop: 'pop .45s cubic-bezier(.3,1.6,.5,1)',
        burst: 'burst .5s ease-out forwards',
        'toast-in': 'toastIn .28s cubic-bezier(.2,.9,.3,1.2) both',
        wiggle: 'wiggle .6s ease-in-out',
      },
    },
  },
  plugins: [],
}
