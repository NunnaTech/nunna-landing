<template>
  <div id="home" class="sm:min-h-screen w-full sm:flex sm:items-center">
    <div class="mx-auto text-center sm:text-left py-5">
      <h1 class="text-center my-5 font-bold text-4xl sm:text-8xl bg-gradient-to-r from-teal-500 via-violet-500 to-orange-500  inline-block text-transparent bg-clip-text" v-t="'Home.title'"/>
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
