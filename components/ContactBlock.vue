<template>
  <div id="contact" class="w-full h-full sm:h-screen sm:flex sm:items-center sm:justify-center">
    <div class="py-5">
      <h1 class="text-center text-accent font-bold text-4xl sm:text-6xl mb-2">
        Contactanos
      </h1>
      <p class="text-justify sm:text-center">"¿Listo para llevar tu idea al siguiente nivel? ¡Nos encantaría escucharte!
        Contáctanos hoy y descubre cómo
        podemos transformar tu visión en una solución digital efectiva. Estamos aquí para ti."</p>
      <form action="" method="post">
        <div class="grid grid-cols-2 gap-12 my-7">
          <input type="text" placeholder="Nombre Completo" class="input input-bordered bg-neutral w-full text-xl"/>
          <input type="email" placeholder="Correo Electrónico" class="input input-bordered bg-neutral w-full text-xl"/>
          <textarea class="col-span-2 text-xl textarea textarea-bordered bg-neutral" placeholder="Mensaje" rows="5"></textarea>
        </div>
        <div class="flex justify-center">
          <button type="submit" class="btn btn-accent btn-lg">Enviar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactBlock",
}
</script>

