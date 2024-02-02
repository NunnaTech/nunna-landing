export const MixinNavBar = {
    mounted() {
        this.lang = localStorage.getItem('lang', 'mx');
    },
    methods: {
        changeTheme() {
            let theme = localStorage.getItem('nuxt-color-mode')
            if (theme === 'nunnadark') theme = 'nunnalight'
            else theme = 'nunnadark'
            this.$colorMode.preference = theme
        },
        closeMenu() {
            this.menu = true
        },
        changeLang(){
            if(this.lang === 'mx' || this.lang === 'MX'){
                this.lang = 'us'
                localStorage.setItem('lang', this.lang)
            }else{
                this.lang = 'mx'
            }
            this.$i18n.setLocale(this.lang);
            localStorage.setItem('lang', this.lang)
        },
        openMenu() {
            this.menu = !this.menu
        }
    },
    computed:{
        urlmap(){
            return `https://flagsapi.com/${String(this.lang).toUpperCase()}/flat/48.png`
        }
    },
}