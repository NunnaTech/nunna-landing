<template>
  <div id="home" class="sm:min-h-screen w-full sm:flex sm:items-center">
    <div class="mx-auto text-center sm:text-left py-5">
      <h1 class="text-center my-5 text-accent font-bold text-4xl sm:text-6xl" v-t="'Home.title'"/>
      <h2 class="text-center font-bold text-2xl sm:text-4xl" v-t="'Home.subtitle'"/>
      <p class="text-center my-4 font-light" v-t="'Home.description'"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeBlock"
}
</script>
