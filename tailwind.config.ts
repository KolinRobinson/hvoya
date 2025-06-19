import type { Config } from 'tailwindcss'

const range = (length: number): number[] => Array.from(Array(length).keys());


export default {
    content: [
        './core/**/*.{html,js,vue,ts}',
        './modules/**/*.{html,js,vue,ts}',
        './pages/**/*.{html,js,vue,ts}',
        './components/**/*.{html,js,vue,ts}',
        './layouts/**/*.{html,js,vue,ts}',
        './app.vue'
    ],
    theme: {
        colors: {
            brand: {
                DEFAULT: '#2C2F3A',
            },
            grey: {
                DEFAULT: '#333333', // GREY
                30: '#D9D9D9', // GREY 30
                60: '#E4E1DC', // GREY 60
                300: '#3D3D3D', // GREY 300
                gradient: '#C6C6C6', // Gradient GREY
            },
            white: {
                DEFAULT: '#FFFFFF', // WHITE
                20: '#FAFAFA', // WHITE 20
                50: '#F3F3F3', // WHITE 50
            },
            beje: {
                30: '#F6F1EB', // BEJE 30
                500: '#C3B298', // BEJE 500
                600: '#D4A373', // BEJE 600
                800: '#BD7F43', // BEJE 800

            },
            blue: {
                20: '#C8CED9', // BLUE 20
                30: '#A189E7', // BLUE 30
                700: '#2D2C3F', // BLUE 700
            },
            pink: {
                20: '#F0E4E2', // PINK 20
                30: '#DCA2CC', // PINK 30
            },
        },
        fontFamily: {
            sans: ['Inter', 'sans-serif'],
            second: ['Poppins', 'sans-serif'],
            brand: ['HelveticaNeue', 'sans-serif'],
        },
        fontSize: {
            // Desktop headings
            '5xl': '64px', // Desktop Headline 1
            '4xl': '48px', // Desktop Headline 2
            '3xl': '32px', // Desktop Headline 3
            '2xl': '24px', // Desktop Headline 4
            'xl': '20px',  // Desktop Headline 5 and 6
            // Body text
            'lg': '18px',  // text-lg
            'base': '16px', // text-base
            'sm': '14px',   // text-sm
        },
        lineHeight: {
            'normal': '1.5',
            'tight': '1.2',
            '3': '32px', // 3rem for Desktop Headline 3
        },
        fontWeight: {
            'normal': '400',
            'medium': '500',
            'semibold': '600',
            'bold': '700',
        },
        borderRadius: {
            'none': '0',
            'sm': '2px',
            DEFAULT: '4px', // .rounded (4px)
            'md': '6px',
            'lg': '8px',
            'xl': '1rem',
            '2xl': '1.5rem',
            'full': '9999px',
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
            'grid': '20px',
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
