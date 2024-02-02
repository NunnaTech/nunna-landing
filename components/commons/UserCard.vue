<template>
  <div class="p-1 text-center w-full rounded-3xl bg-neutral bg-opacity-20 backdrop-filter backdrop-blur-md shadow-md border border-primary border-opacity-20">
    <img class="mask mask-circle mx-auto w-1/2 sm:w-1/5 py-5" :src="user.avatar_url" alt="{{ username }}"/>
    <h2 class="text-accent font-medium">{{user.name}}</h2>
    <p class="my-4 truncate font-light" v-text="user.bio"/>
    <div class="w-full flex items-center justify-around text-3xl py-3">
      <a :href="'https://twitter.com/'+user.twitter_username" target="_blank" :aria-labelledby="'Twitter '+username">
        <MdiIcon icon="mdiTwitter"/>
      </a>
      <a :href="user.html_url" target="_blank" :aria-labelledby="'Github '+username">
        <MdiIcon icon="mdiGithub"/>
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