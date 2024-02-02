module.exports = {
    plugins: [
        require('daisyui'),
    ],
    darkMode: ['class', '[data-theme="nunnadark"]'],
    daisyui: {
        themes: [{
            nunnalight: {
                "primary": "#2E3440",
                "secondary": "#4C566A",
                "accent": "#2E3440",
                "neutral": "#D8DEE9",
                "base-100": "#EDEEF0",
                "info": "#92cfe8",
                "success": "#6edea9",
                "warning": "#fcb35a",
                "error": "#f96c8d",

            },
            nunnadark: {
                "primary": "#D8DEE9",
                "secondary": "#D8DEE9",
                "accent": "#12C2A3",
                "neutral": "#111827",
                "base-100": "#050D17",
                "info": "#12aff3",
                "success": "#2caf84",
                "warning": "#b99609",
                "error": "#e84545",
            }
        },], // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
        darkTheme: "nunnadark", // name of one of the included themes for dark mode
        base: true, // applies background color and foreground color for root element by default
        styled: true, // include daisyUI colors and design decisions for all components
        utils: true, // adds responsive and modifier utility classes
        rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
        prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
        logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    },
};
