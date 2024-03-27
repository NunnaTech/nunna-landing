<script>

export default {
  name: "IdentityBlock",
  data() {
    return {
      BG_COLORS: {
        'teal': 'bg-teal-500 dark:bg-opacity-50',
        'violet': 'bg-violet-500 dark:bg-opacity-50',
        'orange': 'bg-orange-500 dark:bg-opacity-50',
        'red': 'bg-red-500 dark:bg-opacity-50',
      }, TXT_COLOR: {
        'teal': 'text-teal-200',
        'violet': 'text-violet-200',
        'orange': 'text-orange-200',
        'red': 'text-red-200',
      }
    }
  }
}
</script>

<template>
  <div id="identity" class="sm:min-h-screen w-full sm:flex sm:items-center sm:justify-center">
    <div class="py-5 text-center">
      <h1 class="my-5 font-bold text-4xl sm:text-6xl bg-gradient-to-r from-teal-500 to-violet-500 inline-block text-transparent bg-clip-text"
          v-t="'IdentityBlock.title'"/>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-16">
        <div :key="i" v-for="({icon, description, color}, i) in $tm('IdentityBlock.items')" class="w-full text-justify">
          <div class="my-7 w-full">
            <div
                :class="`flex items-center justify-center w-16 h-16 rounded-full ${BG_COLORS[$rt(color)]} ${TXT_COLOR[$rt(color)]}`">
              <MdiIcon :icon="$rt(icon)" class="max-w-8 max-h-7"/>
            </div>
          </div>
          <p class="w-full">{{ $rt(description) }} </p>
        </div>
      </div>
    </div>
  </div>
</template>

