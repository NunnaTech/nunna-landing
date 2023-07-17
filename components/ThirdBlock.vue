<template>
  <div class="grid mt-12 mb-12">
    <div class="flex justify-start mt-5 ml-12"><CardService ImgPosition="flex justify-start"/></div>
    <div class="flex justify-end mt-5 mr-12" ><CardService ImgPosition="flex justify-end"/></div>
    <div class="flex justify-start mt-5 ml-12"><CardService ImgPosition="flex justify-start"/></div>
    <div class="flex justify-end mt-5 mr-12" ><CardService ImgPosition="flex justify-end"/></div>
  </div>
</template>

<script>
import CardService from "./commons/CardService";
export default {
  name: "ThirdBlock",
  components: {CardService}
}
</script>
