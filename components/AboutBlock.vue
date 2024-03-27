<template>
  <div id="about" class="sm:min-h-screen w-full sm:flex sm:items-center sm:justify-center ">
    <div class="py-5 text-center">
      <h1 class="my-5  font-bold text-4xl sm:text-6xl bg-gradient-to-r from-orange-500 to-red-500 inline-block text-transparent bg-clip-text" v-t="'NavBar.0.label'"/>
      <p :key="i" v-for="(p, i) in $tm($options.name)" class="my-4 font-light text-justify sm:text-center">
        {{ $rt(p) }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutBlock"
}
</script>
