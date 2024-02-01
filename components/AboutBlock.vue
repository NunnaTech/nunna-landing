<template>
  <div id="about" class="w-full flex items-center justify-center">
    <div class="py-5">
      <h1 class="my-5 text-center text-accent font-bold text-4xl sm:text-6xl" v-t="'NavBar.0.label'"/>
      <p :key="i" v-for="(p, i) in $tm(`${this.$options.name}`)" class="my-4 font-light text-justify sm:text-center">
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
