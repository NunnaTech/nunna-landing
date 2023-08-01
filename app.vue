<template >
<!-- <BannerBlock/>-->
  <div class="container mx-auto text-2xl">
    <NavBar/>
    <HomeBlock/>
    <AboutBlock/>
    <ServicesBlock/>
    <UsBlock/>
    <ContactBlock/>
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

export default {
  components: {
    BannerBlock,
    NavBar,
    HomeBlock,
    AboutBlock,
    ServicesBlock,
    UsBlock,
    ContactBlock,
    FooterBlock
  },

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

body{
  font-family: Jost, serif;
}
</style>