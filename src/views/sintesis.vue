<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El componente formativo “Métodos de conservación y preparación de conservas de frutas y verduras” permite comprender los fundamentos, técnicas y procesos asociados a la conservación de productos vegetales, desde su tratamiento inicial hasta su transformación en productos con valor agregado. Se inicia con el estudio de los principios básicos de la conservación de alimentos, así como su objetivo de prolongar la vida útil, preservar características nutricionales y sensoriales, y garantizar la inocuidad. Posteriormente, se profundiza en los diferentes métodos de conservación como la refrigeración, congelación, deshidratación, salazón, uso de azúcar, vinagre, alcohol y esterilización térmica, lo que permite establecer su importancia en la elección adecuada según el tipo de fruta o verdura. Asimismo, se analizan las técnicas de escaldado, sus funciones, tiempos y efectos sobre la textura, color y carga microbiana, proporcionando herramientas para optimizar la preparación del alimento previo a su conservación. Se presentan los procesos térmicos que influyen en la calidad final del producto, como la pasteurización, esterilización y la técnica de vacío, así como la higienización de envases. La documentación aborda la elaboración práctica de diferentes tipos de conservas, como mermeladas, encurtidos y vegetales en salmuera, y el uso de líquidos de cobertura. Para fortalecer la aplicación de estos conceptos, se detallan los aspectos de calidad e inocuidad como las buenas prácticas de manufactura (BPM), control de puntos críticos, y la evaluación fisicoquímica y sensorial del producto final. Finalmente, se analiza el valor agregado, la mejora e innovación en productos de conserva, incluyendo propuestas creativas, normatividad vigente y aspectos de etiquetado para su comercialización.

    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis/sintesis.svg", alt="El componente formativo “Métodos de conservación y preparación de conservas de frutas y verduras” ofrece una aproximación integral a los conocimientos fundamentales sobre la preservación de alimentos y las técnicas de transformación de frutas y verduras. Este módulo analiza detalladamente los fundamentos de la conservación, resaltando su importancia en cuanto a la inocuidad, prolongación de la vida útil y mantenimiento de las características sensoriales y nutricionales de los productos, y se desglosan los factores que intervienen en la elección del método de conservación más adecuado. Asimismo, se estudian los principales métodos físicos, químicos y térmicos como la refrigeración, deshidratación, escaldado, pasteurización, esterilización y uso de líquidos de cobertura. La propuesta profundiza en los procedimientos específicos para la elaboración de conservas dulces y saladas, así como en el control de calidad a lo largo del proceso. Además, se destacan las buenas prácticas de manufactura y los controles en puntos críticos, junto con los criterios de evaluación fisicoquímica y sensorial, enfatizando su aplicación para garantizar productos seguros, estables y competitivos en el mercado.")
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
