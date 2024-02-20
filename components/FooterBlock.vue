<template>
  <footer class="footer footer-center rounded text-xl">
    <div class="grid sm:grid-flow-col gap-4">
      <a :key="i" v-for="({href, label}, i) in $tm($options.name)" :href="$rt(href)" class="link link-hover" :aria-labelledby="$rt(label)">{{ $rt(label) }}</a>
    </div>
    <div>
      <div class="grid grid-flow-col gap-4">
        <a class="text-4xl mx-8" href="https://www.linkedin.com/in/nunna-tech-dev/" target="_blank">
          <MdiIcon icon="mdiLinkedin" />
        </a>
        <a class="text-4xl mx-8" href="https://twitter.com/Nunna_Tech" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" width="2.25rem" height="2.25rem" viewBox="0 0 30 30" class="fill-current"><path d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z"/></svg>
        </a>
        <a class="text-4xl mx-8" href="https://www.facebook.com/profile.php?id=61555465208464" target="_blank">
          <MdiIcon icon="mdiFacebook" />
        </a>
        <a class="text-4xl mx-8" href=" https://www.youtube.com/@NunnaTech" target="_blank">
          <MdiIcon icon="mdiYoutube" />
        </a>
      </div>
    </div>
    <div class="mb-5">
      <p>Copyright © {{ new Date().getFullYear() }} - All right reserved by Nunna</p>
    </div>
  </footer>
</template>

<style>
  svg {
    size: 30px;
  }
</style>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: "FooterBlock",
})
</script>
