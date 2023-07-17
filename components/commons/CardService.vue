<template>
  <div class="grid grid-cols-1 gap-4 place-content-center p-9 bg-neutral rounded-3xl w-3/4">
    <div :class="ImgPosition">
      <div class="-translate-y-14">
        <img width="72" src="../../assets/Nunna.svg" class="mr-5">
      </div>
      <h1 class="text-2xl">Servicio 1</h1>
    </div>
    <h1 style="margin-top: -30px;">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    </h1>
  </div>
</template>

<script>
export default {
  name: "CardService",
  props:{
    ImgPosition:{
      type:String,
      required:true
    }
  }
}
</script>
