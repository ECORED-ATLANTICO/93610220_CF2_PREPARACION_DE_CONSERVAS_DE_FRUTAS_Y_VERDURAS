<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El componente formativo “Métodos de conservación y preparación de conservas de frutas y verduras” permite comprender los fundamentos, técnicas y procesos asociados a la conservación de productos vegetales, desde su tratamiento inicial hasta su transformación en productos con valor agregado. Se inicia con el estudio de los principios básicos de la conservación de alimentos, así como su objetivo de prolongar la vida útil, preservar características nutricionales y sensoriales, y garantizar la inocuidad. Posteriormente, se profundiza en los diferentes métodos de conservación como la refrigeración, congelación, deshidratación, salazón, uso de azúcar, vinagre, alcohol y esterilización térmica, lo que permite establecer su importancia en la elección adecuada según el tipo de fruta o verdura. Asimismo, se analizan las técnicas de escaldado, sus funciones, tiempos y efectos sobre la textura, color y carga microbiana, proporcionando herramientas para optimizar la preparación del alimento previo a su conservación. Se presentan los procesos térmicos que influyen en la calidad final del producto, como la pasteurización, esterilización y la técnica de vacío, así como la higienización de envases. La documentación aborda la elaboración práctica de diferentes tipos de conservas, como mermeladas, encurtidos y vegetales en salmuera, y el uso de líquidos de cobertura. Para fortalecer la aplicación de estos conceptos, se detallan los aspectos de calidad e inocuidad como las buenas prácticas de manufactura (BPM), control de puntos críticos, y la evaluación fisicoquímica y sensorial del producto final. Finalmente, se analiza el valor agregado, la mejora e innovación en productos de conserva, incluyendo propuestas creativas, normatividad vigente y aspectos de etiquetado para su comercialización.

    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis/sintesis.svg", alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu tincidunt erat. Fusce cursus mauris in nulla egestas vulputate. Phasellus viverra accumsan libero, sed luctus diam maximus euismod. Mauris sem risus, tincidunt vel libero in, lobortis commodo ante. Sed pulvinar luctus orci in rhoncus. Nulla ut dapibus risus, ac tempor est. Donec nulla augue, vehicula quis malesuada vitae, fermentum non nisi. Donec tincidunt nibh a magna bibendum rutrum. ")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
