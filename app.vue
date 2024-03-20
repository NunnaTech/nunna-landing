<template >
<!-- <BannerBlock/>-->
  <div class="container mx-auto text-2xl">
    <NavBar/>
   <div class="px-5 sm:py-0">
    <HomeBlock/>
    <AboutBlock/>
    <ServicesBlock/>
    <ProjectsBlock/>
    <UsBlock/>
    <ContactBlock/>
  </div>
  <FooterBlock/>
  </div>
</template>

<script>
import BannerBlock from "./components/BannerBlock.vue";
import NavBar from "./components/commons/NavBar.vue";
import HomeBlock from "./components/HomeBlock.vue";
import AboutBlock from "./components/AboutBlock.vue";
import ServicesBlock from "./components/ServicesBlock.vue";
import UsBlock from "./components/UsBlock.vue";
import ContactBlock from "./components/ContactBlock.vue";
import FooterBlock from "./components/FooterBlock.vue";
import ProjectsBlock from "./components/ProjectsBlock.vue";

export default {
  components: {
    BannerBlock,
    NavBar,
    HomeBlock,
    AboutBlock,
    ServicesBlock,
    ProjectsBlock,
    UsBlock,
    ContactBlock,
    FooterBlock
  },
  mounted() {
    let lang = localStorage.getItem('lang');
    if(!lang){
      let lang = 'mx'
      localStorage.setItem('lang', lang);
    }
    this.$i18n.setLocale(lang);
  }
}
</script>

<style>

@font-face {
  font-family: Jost;
  src: url('~/assets/fonts/jost/italic.ttf'), ;
  font-display: swap;
}

@font-face {
  font-family: Jost;
  src: url('~/assets/fonts/jost/variable.ttf');
  font-style: normal;
  font-display: swap;
}

body{
  font-family: Jost, serif;
}
</style>