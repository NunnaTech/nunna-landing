
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode', '@nuxtjs/robots', '@nuxtjs/i18n'],
    colorMode: {
        dataValue: 'theme', // activate data-theme in <html> tag
        preference: 'nunnadark' // default theme
    },
    i18n: {
        locales: [
            { code: 'mx', iso: 'es-MX', file: 'mx.json' },
            { code: 'us', iso: 'en-US', file: 'us.json' }
        ],
        defaultLocale: 'mx',
        langDir: 'locales/',
        lazy: true
    },
    app: {
        head: {
            title: 'Nunna Tech',
            htmlAttrs: {
                lang: 'es'
            },
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { hid: 'description', name: 'description', content: 'Nunna Tech Desarrolladora de Software' },
                { hid: 'keywords', name: 'keywords', content: 'Software, Aplicaciones, Web' },
                { hid: 'author', name: 'author', content: 'Nunna Tech' },
                { hid: 'og:title', property: 'og:title', content: 'Nunna Tech' },
                { hid: 'og:description', property: 'og:description', content: 'Nunna Tech Desarrolladora de Software' },
                { hid: 'og:image', property: 'og:image', content: 'https://avatars.githubusercontent.com/u/92613716' },
            ],
            script: [
                {
                    async: true,
                    src: 'https://www.googletagmanager.com/gtag/js?id=G-E140WWZESC'
                },
                {
                    hid: 'ga-script',
                    innerHTML: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-E140WWZESC');
                  `
                }
            ]
        },
    },

});

