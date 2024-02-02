<template>
  <div id="services" class="sm:min-h-screen w-full sm:flex sm:items-center sm:justify-center">
    <div class="py-5">
      <h1 class="my-5 text-center text-accent font-bold text-4xl sm:text-6xl" v-t="'NavBar.1.label'"/>
      <div class="gap-5">
        <div :key="i" v-for="({icon, title, description}, i) in $tm(`${this.$options.name}`)" :class="`my-7 grid md:grid-flow-row-dense md:grid-rows-1 md:grid-cols-6 text-justify ${this.setPositionClasses('alignment-text', i)}`">
          <div :class="`my-7 w-full flex justify-center ${this.setPositionClasses('alignment-div-and-icon', i)}`">
            <div class="flex items-center justify-center w-16 h-16 bg-accent text-white rounded-full">
              <span :class="`${$rt(icon)} w-1/2 h-1/2`"></span>
            </div>
          </div>
          <div class="md:col-span-5">
            <h2 class="font-medium">{{ $rt(title) }}</h2>
            <p class="my-4 font-light">{{ $rt(description) }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

const ELEMENTS = {
  "alignment-text": ["sm:text-left", "sm:text-right"],
  "alignment-div-and-icon": ["md:order-first sm:text-start", "md:order-last sm:text-end"],
}

export default defineComponent({
  name: "ServicesBlock",

  methods: {
    /**
     * Get classes to draw in landing.
     * @param {String} element 
     * @param {Number} position 
     * @returns {String}
     */
    setPositionClasses(element, position) {
      return ELEMENTS[element][position % 2]
    }
  }
})
</script>
