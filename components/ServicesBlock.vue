<template>
  <div id="services" class="w-full h-full sm:h-screen sm:flex sm:items-center sm:justify-center">
    <div class="py-5">
      <h1 class="text-center text-accent font-bold text-4xl sm:text-6xl" v-t="'NavBar.title2'"/>
      <div class="grid grid-rows-4 gap-5">
        <div class="text-justify sm:text-left">
          <div class="w-full flex justify-center sm:justify-start">
            <div class="flex items-center justify-center w-16 h-16 bg-accent text-white rounded-full">
              <span class="i-ph-person-arms-spread w-1/2 h-1/2"></span>
            </div>
          </div>
          <div>
            <h2 class="font-medium my-2" v-t="'Services.title1'"/>
            <p v-t="'Services.description1'"/>
          </div>
        </div>
        <div class="text-justify sm:text-right">
          <div class="w-full flex justify-center sm:justify-end">
            <div class="flex items-center justify-center w-16 h-16 bg-accent text-white rounded-full">
              <span class="i-ph-devices w-1/2 h-1/2"></span>
            </div>
          </div>
          <div>
            <h2 class="font-medium my-2" v-t="'Services.title2'"/>
            <p v-t="'Services.description2'"/>
          </div>
        </div>
        <div class="text-justify sm:text-left">
          <div class="w-full flex justify-center sm:justify-start">
            <div class="flex items-center justify-center w-16 h-16 bg-accent text-white rounded-full">
              <span class="i-ph-shield-plus w-1/2 h-1/2"></span>
            </div>
          </div>
          <div>
            <h2 class="font-medium my-2" v-t="'Services.title3'"/>
            <p v-t="'Services.description3'"/>
          </div>
        </div>
        <div class="text-justify sm:text-right">
          <div class="w-full flex justify-center sm:justify-end">
            <div class="flex items-center justify-center w-16 h-16 bg-accent text-white rounded-full">
              <span class="i-ph-database w-1/2 h-1/2"></span>
            </div>
          </div>
          <div>
            <h2 class="font-medium my-2" v-t="'Services.title4'"/>
            <p v-t="'Services.description4'"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServicesBlock",
}
</script>
