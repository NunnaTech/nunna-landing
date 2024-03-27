<template>
  <div id="us" class="w-full sm:min-h-screen flex items-center justify-center">
    <div class="py-5 text-center">
      <h1 class="my-5 font-bold text-4xl sm:text-6xl bg-gradient-to-r from-red-500 to-orange-500 inline-block text-transparent bg-clip-text" v-t="'NavBar.3.label'"/>
      <div class="grid grid-cols-1 sm:grid-cols-4 gap-5">
        <UserCard v-for="user in users_data" :key="user.social_media.github" :user="user" />
      </div>
    </div>
  </div>
</template>

<style>
  @import url("~/assets/css/avatars.css");
</style>

<script>
import UserCard from "./commons/UserCard.vue";
import {UsBlockData} from "../data-components/UsBlockData";

export default {
  name: "UsBlock",
  components: {UserCard},
  data() {
    return UsBlockData;
  },
}
</script>
