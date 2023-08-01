export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],
    colorMode: {
        dataValue: 'theme', // activate data-theme in <html> tag
        preference: 'nunnadark', // default theme
    },
});

