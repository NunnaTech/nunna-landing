<template>
    <div class="flex items-center justify-around sm:justify-between text-center mt-4">
      <div class="">
        <a href="#" aria-labelledby="Nunna">
          <img class="hidden dark:block mx-auto w-10 h-auto" src="~/assets/imgs/logo/NunnaDark.svg" alt="Logo">
          <img class="block dark:hidden mx-auto w-10 h-auto" src="~/assets/imgs/logo/NunnaLight.svg" alt="Logo">
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
          <img :src="urlmap" @click="changeLang()" :alt="`${lang} flag`"/>
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

export default {
  name: "NavBar",
  data() {
    return NavBarData;
  },
  mixins:[MixinNavBar]
}
</script>
