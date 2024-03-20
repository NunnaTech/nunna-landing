<script>
import moment from "moment";

export default {
  name: "ProjectCard",
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  methods: {
    formatDate(date) {
      return moment(date).format('ll');
    },
  }
}
</script>

<template>
  <div class="p-5 px-10 w-full rounded-3xl dark:bg-[#091629] shadow-md border border-primary border-opacity-20">
    <h3 class="text-right text-sm">{{ formatDate(project.date) }}</h3>
    <img class="w-14 h-14 mb-8" :src="project.images.logo" alt="Logo">
    <img class="w-full rounded-lg my-2" :src="project.images.cover" alt="Logo">
    <h2 class="font-medium text-3xl">{{ project.project_name }}</h2>
    <p class="text-sm text-gray-500  my-2">{{ project.short_description }}</p>
    <p class="text-justify">{{ project.large_description }}</p>

    <div class="flex flex-wrap items-center justify-around mt-2">
      <span v-for="(tech, i) in project.tech_stack" :key="i"
            class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-accent text-white ">
      {{ tech }}
    </span>
    </div>


    <a :href="project.github"
       target="_blank"
        class="mt-5 inline-block rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
       :aria-label="`See ${project.project_name} on GitHub`"
    >
      GitHub
    </a>
    
  </div>
</template>