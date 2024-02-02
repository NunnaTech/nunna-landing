<template>
  <div id="home" class="sm:min-h-screen w-full sm:flex sm:items-center">
    <div class="grid md:grid-cols-2 sm:grid-cols-1">
      <div class="flex flex-col justify-center content-center sm:items-center">
        <div class="text-center sm:text-left py-5">
          <h1 class="my-5 text-accent font-bold text-4xl sm:text-6xl" v-t="'Home.title'"/>
          <h2 class="font-bold text-2xl sm:text-4xl" v-t="'Home.subtitle'"/>
          <p class="my-4 font-light" v-t="'Home.description'"/>
        </div>
      </div>
      <div class="flex flex-col">
        <img class="rounded-3xl"
            src="https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
            alt="Home image" height="auto" width="auto" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeBlock"
}
</script>
