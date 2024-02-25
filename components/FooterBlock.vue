<template>
  <footer class="w-full footer footer-center rounded text-xl">
    <div class="grid sm:grid-flow-col gap-4">
      <a :key="i" v-for="({href, label}, i) in $tm($options.name)" :href="$rt(href)" class="link link-hover" :aria-labelledby="$rt(label)">{{ $rt(label) }}</a>
    </div>
    <div>
      <div class="grid grid-flow-col gap-4">
        <a :key="index" v-for="(icon, index) in icons" class="text-4xl mx-2" :href="icon.href" target="_blank">
          <Icon v-bind="icon" />
        </a>

        <a class="text-4xl mx-2" href="https://www.linkedin.com/in/nunna-tech-dev/" target="_blank">
          <MdiIcon icon="mdiLinkedin" />
        </a>
        <a class="text-4xl mx-2" href="https://www.facebook.com/profile.php?id=61555465208464" target="_blank">
          <MdiIcon icon="mdiFacebook" />
        </a>
        <a class="text-4xl mx-2" href=" https://www.youtube.com/@NunnaTech" target="_blank">
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
    width: 2.25rem;
  }
</style>

<script>
import { defineComponent } from 'vue'

import Icon from './commons/Icon.vue'
import { FooterBlockData } from '../data-components/FooterBlockData.js';
import { MixinFooterBlock } from '../mixins/MixinFooterBlock.js';

export default defineComponent({
  name: "FooterBlock",

  components: { Icon },

  data() {
    return FooterBlockData;
  },

  mixins: [ MixinFooterBlock ],
})
</script>
