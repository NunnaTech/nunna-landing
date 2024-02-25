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
        <Icon :icon="'twitter'" :width="'2rem'" :height="'2rem'"  />
      </a>
    </div>
  </div>
</template>

<script>
import {defineComponent} from 'vue'

import Icon from './Icon.vue'
import {MixinUserCard} from "../../mixins/MixinUserCard";
import {UserCardData} from "../../data-components/UserCardData";

export default defineComponent({
  name: "UserCard",

  components: { Icon },

  data() {
    return UserCardData();
  },
  mixins:[MixinUserCard]
})
</script>