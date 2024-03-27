<template>
  <div id="services" class="sm:min-h-screen w-full sm:flex sm:items-center sm:justify-center">
    <div class="py-5 text-center">
      <h1 class="my-5  font-bold text-4xl sm:text-6xl bg-gradient-to-r from-purple-500 to-red-500 inline-block text-transparent bg-clip-text" v-t="'NavBar.1.label'"/>
      <div class="gap-5">
        <div :key="i" v-for="({icon, title, description, color}, i) in $tm($options.name)" :class="`my-7 grid md:grid-flow-row-dense md:grid-rows-1 md:grid-cols-6 text-justify ${setPositionClasses('alignment-text', i)}`">
          <div :class="`my-7 w-full flex justify-center ${setPositionClasses('alignment-div-and-icon', i)}`">
            <div
                :class="`flex items-center justify-center w-16 h-16 rounded-full ${BG_COLORS[this.$rt(color)]} ${TXT_COLOR[this.$rt(color)]}`">
              <MdiIcon :icon="$rt(icon)" class="max-w-8 max-h-7"/>
            </div>
          </div>
          <div class="md:col-span-5">
            <h2 :class="`font-medium`">{{ $rt(title) }}</h2>
            <p class="my-4 font-light">{{ $rt(description) }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "ServicesBlock",
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
  },
  methods: {
    /**
     * Get classes to draw in landing.
     * @param {String} element
     * @param {Number} position
     * @returns {String}
     */
    setPositionClasses(element, position) {
      const ELEMENTS = {
        "alignment-text": ["sm:text-left", "sm:text-right"],
        "alignment-div-and-icon": ["md:order-first sm:text-start", "md:order-last sm:text-end"],
      }

      return ELEMENTS[element][position % 2]
    }
  }
})
</script>
