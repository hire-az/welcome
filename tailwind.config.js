/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        fontFamily: {
            nuni: ['Nunito,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji'],
            sans: ['inter', 'Roboto', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica', 'Apple Color Emoji', 'Arial, sans-serif', 'Segoe UI Emoji', 'Segoe UI Symbol']
        },
        screens: {
            xs: { max: '480px' }, // Mobile (iPhone 3 - iPhone XS Max).
            sm: { min: '480px', max: '768px' }, // Mobile (matches max: iPhone 11 Pro Max landscape @ 896px).
            md: { min: '768px', max: '1024px' }, // Tablet (matches max: iPad Pro @ 1112px).
            lg: { min: '1024px' }, // Desktop smallest.
            xl: { min: '1020px' } // Desktop widescreen.
        },
        borderColor: theme => ({
            ...theme('colors'),
            DEFAULT: '#e9e9e9',
            primary: '#3490dc',
            secondary: '#ffed4a',
            danger: '#e3342f'
        }),
        extend: {
            width: {
                left: '75%',
                right: '25%'
            },
            borderColor: {
                DEFAULT: '#e9e9e9'
            },
            colors: {
                header: '#1a1a1ae6',
                cerulean: {
                    default: '#095977',
                    100: '#0D84AF',
                    200: '#0C79A1',
                    300: '#0B6F93',
                    400: '#0A6485',
                    500: '#095c79',
                    600: '#084F68',
                    700: '#07445A',
                    800: '#06394C',
                    900: '#052E3E'
                },
                primaryBlueDark: '#0068b3',
                primaryBlueHoverDark: '#1070b5',
                graphlightblue: '#47b7f8',
                graphlightgreen: '#19652a',
                graphdarkgreen: '#40d763',
                warning: '#efecc8',
                warningDark: '#6e6a33',
                redDark: 'rgb(54, 36, 34)',
                primaryLight: '#202020',
                error: '#efc8c8',
                errorDark: '#6e3333',
                primaryDark: '#1a1c1e',
                secondaryDark: '#24282e',
                tertiaryDark: '#3c414c',
                selectedDark: '#434343',
                hoverDark: 'rgba(255, 255, 255, 0.055)',
                secondaryLight: '#737373',
                divider: '#262626',
                dividerLight: '#1f1f1f',
                dividerDark: '#404449',
                input: '#040404'
            },
            animation: {
                'ping-slow': 'ping 2.5s cubic-bezier(1, 1, 0.2, 1) infinite'
            }
        }
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/aspect-ratio')
    ]
};
