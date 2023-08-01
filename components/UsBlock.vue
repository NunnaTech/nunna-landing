<template>
  <div id="us" class="w-full h-full flex items-center justify-center">
    <div class="py-5">
      <h1 class="text-center text-accent font-bold text-4xl sm:text-6xl mb-2">
        Nosotros
      </h1>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <UserCard v-for="username in usernames" :key="username" :username="username"/>
      </div>
    </div>

  </div>
</template>

<script>
import UserCard from "./commons/UserCard.vue";

export default {
  name: "UsBlock",
  components: {UserCard},
  data() {
    return {
      usernames:['AlexisLoya', 'GandyA23', 'JairDavid', 'Sterplay2010', 'SebastianCarv', 'DallasSpawn', 'HectorSaldes']
    }
  },
  mounted() {

  },
  methods: {}
}
</script>
