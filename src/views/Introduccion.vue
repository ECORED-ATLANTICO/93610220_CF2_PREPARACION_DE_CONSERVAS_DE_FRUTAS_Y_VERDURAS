<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        .cajon.color-acento-contenido.p-4
          p El componente formativo “Métodos de conservación y preparación de conservas de frutas y verduras” explora los principios fundamentales de la preservación de alimentos, centrándose en las técnicas aplicadas a productos vegetales para extender su vida útil y garantizar su inocuidad. Comprender estos elementos es clave para garantizar la calidad, seguridad y aprovechamiento eficiente de las frutas y verduras durante su almacenamiento y transformación. A lo largo de este material, el aprendiz conocerá los fundamentos técnicos de conservación, así como los factores físicos, químicos y microbiológicos que afectan los productos hortofrutícolas. También se abordarán los métodos térmicos como la pasteurización y el escaldado, junto con técnicas de elaboración de productos en salmuera, vinagre y almíbar. Desde un enfoque práctico, se destacan los procedimientos de producción y control de calidad, capacitando al aprendiz para aplicar buenas prácticas, desarrollar propuestas con valor agregado e interpretar normativas vigentes para la comercialización segura de conservas.
      .col-lg-5
        figure
          img(src='@/assets/curso/introduccion/img_1.png', class="img-fluid")   

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
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
