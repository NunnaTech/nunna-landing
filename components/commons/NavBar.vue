<template>
    <div class="flex items-center justify-around sm:justify-between text-center mt-4">
      <div class="">
        <a href="#" aria-labelledby="Nunna">
          <Icon v-bind="nunnaLogo" v-bind:icon="iconByColorModePreference" />
        </a>
      </div>
      <div class="w-full hidden sm:block">
        <ul class="flex justify-evenly">
          <li :key="i" v-for="({ href, label }, i) in $tm($options.name)" class="py-2 px-3 rounded-lg hover:text-accent hover:bg-primary hover:bg-opacity-5">
            <a :href="$rt(href)" :aria-labelledby="$rt(label)">{{ $rt(label) }}</a>
          </li>
        </ul>
      </div>
      <div class="flex">
        <button class="mr-2" @click="changeTheme()" title="Tema" role="button" aria-label="Tema" aria-labelledby="Tema">
          <img class="mx-auto w-10 hidden dark:block" src="~/assets/imgs/theme/MoonDark.webp" alt="Theme" height="500" width="500">
          <img class="mx-auto w-10 block dark:hidden" src="~/assets/imgs/theme/SunLight.webp" alt="Theme" height="500" width="500">
        </button>
        <button>
          <Icon v-bind="urlmap" @click="changeLang()" />
        </button>
      </div>
      <button class="block sm:hidden text-5xl rounded bg-secondary bg-opacity-5 flex items-center" :class="!menu&&'text-accent'" @click="openMenu()" title="Menú" role="button" aria-label="Menú" aria-labelledby="Menú">
        <MdiIcon :icon="menu ? 'mdiMenu' : 'mdiClose'"/>
      </button>
    </div>
    <div v-if="!menu" class="sm:hidden h-96">
      <div class="flex justify-center h-full text-center">
        <ul @click="closeMenu()"  class="flex w-full px-5 flex-col justify-around">
          <li :key="i" v-for="({ href, label }, i) in $tm($options.name)" class="py-4 outline rounded-lg hover:text-accent hover:bg-primary hover:bg-opacity-5">
            <a :href="$rt(href)" :aria-labelledby="$rt(label)">{{ $rt(label) }}</a>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
import {MixinNavBar} from "../../mixins/MixinNavBar";
import {NavBarData} from "../../data-components/NavBarData";
import Icon from "./Icon.vue";

export default {
  name: "NavBar",
  components: { Icon },
  data() {
    return NavBarData;
  },
  mixins:[MixinNavBar]
}
</script>
