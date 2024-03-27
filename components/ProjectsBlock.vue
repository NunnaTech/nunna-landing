<script>
import {API_FORM_URL} from "../constants";
import ProjectCard from "./commons/ProjectCard.vue";

export default {
  name: "ProjectsBlock",
  components: {
    ProjectCard
  },
  data() {
    return {
      projects: []
    }
  },
  mounted() {
    this.getProjects();
  },
  computed: {
    lang() {
      return this.$i18n.locale;
    }
  },
  watch: {
    lang() {
      this.getProjects();
    }
  },
  methods: {
    getProjects() {
      fetch(`${API_FORM_URL}/projects?lang=${this.lang}`)
          .then(response => response.json())
          .then(data => {
            this.projects = data.data;
          });
    }
  }
}
</script>

<template>
  <div id="projects" class="w-full sm:min-h-screen flex items-center justify-center">
    <div class="py-5 w-full text-center">
      <h1 class="my-5 font-bold text-4xl sm:text-6xl bg-gradient-to-r from-teal-500 to-violet-500 inline-block text-transparent bg-clip-text" v-t="'NavBar.2.label'"/>
      <div class="w-full grid grid-cols-1 sm:grid-cols-3 gap-5 text-left">
        <ProjectCard v-for="(project, i) in projects" :key="i" :project="project"/>
      </div>
    </div>
  </div>
</template>