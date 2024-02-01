<template>
    <div class="mt-5 flex items-center justify-around sm:justify-between text-center">
      <div class="">
        <a href="#" aria-labelledby="Nunna">
          <img class="hidden dark:block mx-auto w-10 h-auto" src="../../assets/imgs/logo/NunnaDark.svg" alt="Logo">
          <img class="block dark:hidden mx-auto w-10 h-auto" src="../../assets/imgs/logo/NunnaLight.svg" alt="Logo">
        </a>
      </div>
      <div class="w-full hidden sm:block">
        <ul class="flex justify-evenly">
          <li class="py-2 px-3 rounded-lg hover:text-accent hover:bg-primary hover:bg-opacity-5"><a href="#about" aria-labelledby="¿Quiénes somos?" v-t="'NavBar.title1'"/></li>
          <li class="py-2 px-3 rounded-lg hover:text-accent hover:bg-primary hover:bg-opacity-5"><a href="#services" aria-labelledby="Servicios" v-t="'NavBar.title2'"/></li>
          <li class="py-2 px-3 rounded-lg hover:text-accent hover:bg-primary hover:bg-opacity-5"><a href="#us" aria-labelledby="Nosotros" v-t="'NavBar.title3'"/></li>
          <li class="py-2 px-3 rounded-lg hover:text-accent hover:bg-primary hover:bg-opacity-5"><a href="#contact" aria-labelledby="Contacto" v-t="'NavBar.title4'"/></li>
        </ul>
      </div>
      <div class="flex">
        <button class="mr-2" @click="changeTheme()" title="Tema" role="button" aria-label="Tema" aria-labelledby="Tema">
          <img class="mx-auto w-10 hidden dark:block" src="../../assets/imgs/theme/MoonDark.webp" alt="Theme" height="500" width="500">
          <img class="mx-auto w-10 block dark:hidden" src="../../assets/imgs/theme/SunLight.webp" alt="Theme" height="500" width="500">
        </button>
        <button>
          <img :src="urlmap" @click="changeLang()"  alt="Lang"/>
        </button>
      </div>
      <button class="block sm:hidden text-5xl rounded bg-secondary bg-opacity-5 flex items-center" :class="!menu&&'text-accent'" @click="openMenu()" title="Menú" role="button" aria-label="Menú" aria-labelledby="Menú">
        <span v-if="menu" class="i-ph-list-bold"></span>
        <span v-if="!menu" class="i-ph-x-bold"></span>
      </button>
    </div>
    <div v-if="!menu" class="sm:hidden h-96">
      <div class="flex justify-center h-full text-center my-5">
        <ul @click="closeMenu()"  class="flex w-full px-5 flex-col justify-around">
          <li class="py-4 outline rounded-lg hover:text-accent hover:bg-primary hover:bg-opacity-5"><a href="#about" aria-labelledby="¿Quiénes somos?" v-t="'NavBar.title1'"/></li>
          <li class="py-4 outline rounded-lg hover:text-accent hover:bg-primary hover:bg-opacity-5"><a href="#services" aria-labelledby="Servicios" v-t="'NavBar.title2'"/></li>
          <li class="py-4 outline rounded-lg hover:text-accent hover:bg-primary hover:bg-opacity-5"><a href="#us" aria-labelledby="Nosotros" v-t="'NavBar.title3'"/></li>
          <li class="py-4 outline rounded-lg hover:text-accent hover:bg-primary hover:bg-opacity-5"><a href="#contact" aria-labelledby="Contacto" v-t="'NavBar.title4'"/></li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      menu: true,
      lang: localStorage.getItem('lang', 'mx')
    }
  },
  computed:{
    urlmap(){
      return `https://flagsapi.com/${String(this.lang).toUpperCase()}/flat/48.png`
    }
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
}
</script>
