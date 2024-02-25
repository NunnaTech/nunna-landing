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
        iconByColorModePreference() {
            return `nunna-logo-${this.$colorMode.preference === "nunnadark" ? 'dark' : 'light'}`
        },
        urlmap(){
            return {
                icon: `${this.lang ?? 'us'}-flag`,
                viewBox: '0 0 36 36',
                width: '48px',
                height: '48px',
                ignoreDefaultStyles: true, 
            }
        }
    },
}