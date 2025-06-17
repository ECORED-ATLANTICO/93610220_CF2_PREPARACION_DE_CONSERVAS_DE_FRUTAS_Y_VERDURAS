<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.d-flex.align-items-stretch.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-7.order-2.order-lg-1
        .cajon.color-acento-contenido.p-4
          p El componente formativo “Métodos de conservación y preparación de conservas de frutas y verduras” explora los principios fundamentales de la preservación de alimentos, centrándose en las técnicas aplicadas a productos vegetales para extender su vida útil y garantizar su inocuidad. 
          p Comprender estos elementos es clave para garantizar la calidad, seguridad y aprovechamiento eficiente de las frutas y verduras durante su almacenamiento y transformación. A lo largo de este material, el aprendiz conocerá los fundamentos técnicos de conservación, así como los factores físicos, químicos y microbiológicos que afectan los productos hortofrutícolas. 
          p También se abordarán los métodos térmicos como la pasteurización y el escaldado, junto con técnicas de elaboración de productos en salmuera, vinagre y almíbar.
          p Desde un enfoque práctico, se destacan los procedimientos de producción y control de calidad, capacitando al aprendiz para aplicar buenas prácticas, desarrollar propuestas con valor agregado e interpretar normativas vigentes para la comercialización segura de conservas.
      .col-5.col-lg-5.order-1.order-lg-2.mb-lg-0.mb-3.d-flex
        figure.w-100.d-flex.flex-column
          img(src='@/assets/curso/introduccion/img_1.png', class="img-fluid").height-100  

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/bFreInIXn08" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
