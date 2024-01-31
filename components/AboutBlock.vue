<template>
  <div id="about" class="w-full h-full sm:h-screen flex items-center justify-center">
    <div class="py-5">
      <h1 class="text-center text-accent font-bold text-4xl sm:text-6xl" v-t="'NavBar.title1'"/>
      <p class="text-justify sm:text-center" v-t="'About.description1'"/>
      <br>
      <p class="text-justify sm:text-center" v-t="'About.description2'"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutBlock"
}
</script>
