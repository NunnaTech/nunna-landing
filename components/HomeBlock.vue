<template>
  <div id="home" class="w-full h-full sm:h-screen sm:flex sm:items-center">
    <div class="grid grid-cols-1 sm:grid-cols-2">
      <div class="flex sm:items-center">
        <div class="text-center sm:text-left py-5">
          <h1 class="text-accent font-bold text-4xl sm:text-6xl" v-t="'Home.title'"/>
          <h2 class="my-4 font-bold text-2xl sm:text-4xl" v-t="'Home.subtitle'"/>
          <p v-t="'Home.description'"/>
        </div>
      </div>
      <div>
        <img class="rounded-3xl"
             src="https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
             alt="Home image" height="auto" width="auto">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeBlock"
}
</script>
