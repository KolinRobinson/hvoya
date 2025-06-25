import type { Config } from 'tailwindcss'

const range = (length: number): number[] => Array.from(Array(length).keys())

export default {
  content: [
    './core/**/*.{html,js,vue,ts}',
    './modules/**/*.{html,js,vue,ts}',
    './pages/**/*.{html,js,vue,ts}',
    './components/**/*.{html,js,vue,ts}',
    './layouts/**/*.{html,js,vue,ts}',
    './app.vue',
  ],
  theme: {
    colors: {
      brand: {
        DEFAULT: '#000000',
      },
      black: {
        DEFAULT: '#000000',
      },
      white: {
        DEFAULT: '#FFFFFF',
        30: '#EEEDEA',
      },
      oat: {
        DEFAULT: '#F5F4F1',
      },
      gray: {
        DEFAULT: '#999999',
        30: '#EEEEEE',
        60: '#D0D5DD',
        90: '#535353',
      },
      neutral: {
        DEFAULT: '#4B4B4B',
        800: '#4B4B4B',
        700: '#999999',
        600: '#E3DFD9',
        500: '#D3CCC4',
        400: '#C8C1B9',
        300: '#EEEEEE',
        200: '#E0DAD3',
        150: '#EEEDEA',
      },
      taupe: {
        DEFAULT: '#8C7A71',
        30: '#A89F97',
        60: '#A89588',
        90: '#7A685F',
        100: '#62584F',
        200: '#4E443C',
      },
      red: {
        DEFAULT: '#EE6363',
      },
      green: {
        DEFAULT: '#50B313',
      },
      transparent: {
        DEFAULT: 'rgba(255, 255, 255, 0)',
      },
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      brand: ['Host Grotesk', 'sans-serif'],
    },
    fontSize: {
      // Desktop headings
      '5xl': '64px', // Desktop Headline 1
      '4xl': '48px', // Desktop Headline 2
      '3xl': '32px', // Desktop Headline 3
      '2xl': '24px', // Desktop Headline 4
      xl: '20px', // Desktop Headline 5 and 6
      // Body text
      lg: '18px', // text-lg
      base: '16px', // text-base
      sm: '14px', // text-sm
      xs: '12px', // text-xs
    },
    lineHeight: {
      normal: '1.5',
      tight: '1.2',
      '3': '30px', // 3rem for subtitle
    },
    fontWeight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
    borderRadius: {
      none: '0',
      sm: '2px',
      md: '4px',
      lg: '6px',
      DEFAULT: '8px', // .rounded (8px)
      xl: '1rem',
      '2xl': '1.5rem',
      full: '9999px',
    },
    boxShadow: {
      soft: '0 2px 8px rgba(0, 0, 0, 0.05)',
    },
    spacing: range(30).reduce(
      (acc, step) => ({
        ...acc,
        [step]: `${(step * 5) / 10}rem`,
      }),
      {}
    ),
    gridTemplateColumns: {
      '12': 'repeat(12, 80px)', // 12 columns of 80px each with 20px gap
    },
    gap: {
      grid: '20px',
    },
    container: {
      center: true,
      padding: '20px',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
  },
  plugins: [],
} satisfies Config
