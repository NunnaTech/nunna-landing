<template>
  <div class="p-1 text-center w-full rounded-3xl bg-neutral bg-opacity-20 backdrop-filter backdrop-blur-md shadow-md border border-primary border-opacity-20">
    <a :class="`hidden dark:block my-4 mask mask-circle mx-auto w-1/2 sm:w-1/5 py-5 css-peeps avatar avatar-dark ${user.social_media.github}`" :src="user.avatar_url" :alt="user.name"></a>
    <a :class="`block dark:hidden my-4 mask mask-circle mx-auto w-1/2 sm:w-1/5 py-5 css-peeps avatar avatar-light ${user.social_media.github}`" :src="user.avatar_url" :alt="user.name"></a>
    <h2 class="text-accent font-medium">{{user.name}}</h2>
    <p class="my-4 truncate font-light" v-t="`Us.${user.social_media.github}`" />
    <div class="w-full flex items-center justify-around text-3xl py-3">
      <a v-if="user.social_media.linkedin" :href="`https://www.linkedin.com/in/${user.social_media.linkedin}`" target="_blank" :aria-labelledby="`LinkedIn ${user.name}`">
        <MdiIcon icon="mdiLinkedin"/>
      </a>
      <a v-if="user.social_media.github" :href="`https://github.com/${user.social_media.github}`" target="_blank" :aria-labelledby="`Github ${user.name}`">
        <MdiIcon icon="mdiGithub"/>
      </a>
      <a v-if="user.social_media.twitter" :href="`https://twitter.com/${user.social_media.twitter}`" target="_blank" :aria-labelledby="'Twitter ' + user.name">
        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" class="fill-current" height="30px"><path d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z"/></svg>
      </a>
    </div>
  </div>
</template>

<script>
import {defineComponent} from 'vue'
import {MixinUserCard} from "../../mixins/MixinUserCard";
import {UserCardData} from "../../data-components/UserCardData";

export default defineComponent({
  name: "UserCard",
  data() {
    return UserCardData();
  },
  mixins:[MixinUserCard]
})
</script>