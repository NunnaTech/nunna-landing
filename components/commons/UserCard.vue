<template>
  <div class="p-1 text-center w-full rounded-3xl bg-neutral bg-opacity-20 backdrop-filter backdrop-blur-md shadow-md border border-primary border-opacity-20">
    <img class="mask mask-circle mx-auto w-1/2 sm:w-1/5 py-5" :src="user.avatar_url" alt="{{ username }}"/>
    <h2 class="text-accent font-medium">{{user.name}}</h2>
    <p class="my-4 truncate font-light" v-text="user.bio"/>
    <div class="w-full flex items-center justify-around text-3xl py-3">
      <a :href="'https://twitter.com/'+user.twitter_username" target="_blank" :aria-labelledby="'Twitter '+username">
        <span class="i-ph-twitter-logo"></span>
      </a>
      <a :href="user.html_url" target="_blank" :aria-labelledby="'Github '+username">
        <span class="i-ph-github-logo"></span>
      </a>
    </div>
  </div>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "UserCard",
  props: {
    username: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      user: {}
    }
  },
  mounted() {
    this.getUser()
  },
  methods: {
    getUser() {
      fetch(`https://api.github.com/users/${this.username}`)
        .then(res => res.json())
        .then(data => {this.user = data})
    }
  }
})
</script>