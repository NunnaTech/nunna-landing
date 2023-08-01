<template>
  <div id="services" class="w-full h-full sm:h-screen sm:flex sm:items-center sm:justify-center">
    <div class="py-5">
      <h1 class="text-center text-accent font-bold text-4xl sm:text-6xl">
        Servicios
      </h1>
      <div class="grid grid-rows-4 gap-5">
        <div class="text-justify sm:text-left">
          <div class="w-full flex justify-center sm:justify-start">
            <div class="flex items-center justify-center w-16 h-16 bg-accent text-white rounded-full">
              <span class="i-ph-person-arms-spread w-1/2 h-1/2"></span>
            </div>
          </div>
          <div>
            <h2 class="font-medium my-2">Desarrollo Personalizado de Aplicaciones</h2>
            <p>Trabajamos contigo para entender tu visión y crear una aplicación a medida que se ajuste a tus
              necesidades
              y objetivos comerciales. Desde el diseño hasta el lanzamiento, te acompañamos en cada paso del
              proceso.</p>
          </div>
        </div>
        <div class="text-justify sm:text-right">
          <div class="w-full flex justify-center sm:justify-end">
            <div class="flex items-center justify-center w-16 h-16 bg-accent text-white rounded-full">
              <span class="i-ph-devices w-1/2 h-1/2"></span>
            </div>
          </div>
          <div>
            <h2 class="font-medium my-2">Optimización para Múltiples Plataformas</h2>
            <p>Nuestras aplicaciones no solo funcionan, sino que brillan en todas las plataformas. Ya sea iOS, Android o
              web, optimizamos tu aplicación para garantizar una experiencia de usuario fluida e intuitiva en cualquier
              dispositivo.</p>
          </div>
        </div>
        <div class="text-justify sm:text-left">
          <div class="w-full flex justify-center sm:justify-start">
            <div class="flex items-center justify-center w-16 h-16 bg-accent text-white rounded-full">
              <span class="i-ph-shield-plus w-1/2 h-1/2"></span>
            </div>
          </div>
          <div>
            <h2 class="font-medium my-2">Soporte Técnico Integral</h2>
            <p>Creemos que nuestro trabajo no termina con el lanzamiento de tu aplicación. Ofrecemos soporte técnico
              integral para asegurar que tu aplicación siga funcionando a la perfección y se mantenga actualizada con
              las últimas tendencias y tecnologías.*</p>
          </div>
        </div>
        <div class="text-justify sm:text-right">
          <div class="w-full flex justify-center sm:justify-end">
            <div class="flex items-center justify-center w-16 h-16 bg-accent text-white rounded-full">
              <span class="i-ph-database w-1/2 h-1/2"></span>
            </div>
          </div>
          <div>
            <h2 class="font-medium my-2">Estrategia y Análisis de Datos</h2>
            <p>Con nuestro enfoque basado en datos, te ayudamos a entender a tu público objetivo y cómo interactúan con
              tu aplicación. Usamos estas ideas para mejorar la funcionalidad y el diseño, con la finalidad de formular
              estrategias de marketing efectivas.</p>
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
