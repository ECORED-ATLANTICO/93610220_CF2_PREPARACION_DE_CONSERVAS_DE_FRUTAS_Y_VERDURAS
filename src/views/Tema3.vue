<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Escaldado
    figure.mb-3
      img(src="@/assets/curso/temas/tema_3/img_1.png", class="img-fluid")
    
    p.mb-0 Antes de aplicar técnicas de conservación más complejas, es necesario preparar adecuadamente las frutas y verduras para garantizar su estabilidad. El escaldado cumple esta función como un pretratamiento térmico que mejora la eficacia de los procesos posteriores. Al someter brevemente los alimentos al calor, se logra una mejor conservación de su estructura, color y calidad, al tiempo que se reducen riesgos microbiológicos y se optimiza la capacidad del producto para resistir el almacenamiento prolongado.

    separador

    #t_3_1.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 3.1 Función del escaldado en conservas
    .mb-3

    .row.d-flex.align-items-stretch.justify-content-center.align-items-center.mb-3
      .col-12.col-lg-4.mb-lg-0.mb-3.d-flex
        figure.w-100.d-flex.flex-column
          img(src="@/assets/curso/temas/tema_3/img_2.png", class="img-fluid").height-100
      .col-12.col-lg-8
        p.mb-3 El escaldado es una técnica previa a la conservación de vegetales y frutas que consiste en aplicar calor mediante inmersión en agua caliente o exposición al vapor por un tiempo breve y controlado. Su propósito principal es inactivar enzimas responsables de reacciones que afectan color, sabor, textura y valor nutricional, además de reducir la carga microbiana superficial.
        p.mb-0 Esta técnica mejora la seguridad del alimento y, al mismo tiempo, optimiza diversas etapas del procesamiento gracias a beneficios funcionales como:
    
    .row.d-flex.align-items-stretch.justify-content-center.align-items-center.mb-3
      .col-12.col-lg-8.order-2.order-lg-1
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--color-adicional-5-6")
          div(titulo="Facilita el pelado y troceado")
            p.ps-5.mb-0 Al ablandar la superficie de frutas y verduras, permite retirar cáscaras o cortar con menor esfuerzo y mayor precisión.
          div(titulo="Previene cambios no deseados")
            p.ps-5.mb-0 Reduce la acción de enzimas responsables de pardeamiento o degradación de sabor y textura.
          div(titulo="Fija el color en vegetales verdes")
            p.ps-5.mb-0 Contribuye a conservar el tono brillante de hortalizas como espinaca o brócoli, mejorando su apariencia.
          div(titulo="Mejora el llenado de envases")
            p.ps-5.mb-0 Reduce el volumen por contracción de tejidos, permitiendo un empaque más compacto y eficiente.
      .col-6.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3.d-flex
        figure.w-100.d-flex.flex-column
          img(src="@/assets/curso/temas/tema_3/img_3.png", class="img-fluid").height-100

    separador

    #t_3_2.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 3.2 Métodos y tiempos según tipo de vegetal
    .mb-3

    p.mb-3 El escaldado puede aplicarse mediante dos técnicas principales, cada una con particularidades que influyen en la calidad final del producto:
    
    .bg_img_4.mb-3
      .row.justify-content-center.align-items-center.mb-3
        .col-12.col-lg-5.mb-3
          .tarjeta.color-secundario-20.text-center
            figure
              img(src="@/assets/curso/temas/tema_3/img_4.png", class="img-fluid")
            h5.mb-3.p-3.pb-0 ESCALDADO EN AGUA CALIENTE
            p.p-3.pt-2 Consiste en sumergir los vegetales en agua a temperaturas entre 95°C y 100°C durante un tiempo determinado. Es un método común y efectivo, aunque puede generar cierta pérdida de nutrientes solubles en agua.

        .col-12.col-lg-5.mb-3
          .tarjeta.color-terciario-10.text-center
            figure
              img(src="@/assets/curso/temas/tema_3/img_5.png", class="img-fluid")
            h5.mb-3.p-3.pb-0 ESCALDADO POR VAPOR
            p.p-3.pt-2 Expone los alimentos a vapor de agua, a presión atmosférica o en autoclave. Esta alternativa conserva mejor el color, la textura y los compuestos nutritivos del vegetal, al reducir el contacto directo con el líquido.
        .col-12.col-lg-10.mb-3
          .cajon.color-adicional-4-Mix-secundario.p-4.mb-3
            p La duración del escaldado debe ajustarse según el tipo de vegetal, su tamaño, nivel de madurez y forma de corte. Un tratamiento insuficiente puede dejar enzimas activas, mientras que un exceso de calor deteriora la textura y el valor nutricional.
        .col-12.col-lg-8
          .titulo-sexto.color-acento-contenido
            h5 Tabla 1.
            I(style="font-weight: normal;") Tiempos de referencia para escaldado
          .tabla-a.mb-5
            table
              caption 
                p <b>Fuente.</b>  SENA, 2025
              thead.text-white
                tr
                  th Vegetal
                  th Agua hirviendo
                  th Vapor
              tbody.b
                tr
                  td.bg-table-01 Zanahoria (cubos)
                  td.bg-table-01 2 minutos
                  td.bg-table-01 3 minutos
                tr
                  td.bg-table-02 Brócoli
                  td.bg-table-02 3 minutos
                  td.bg-table-02 5 minutos
                tr
                  td.bg-table-01 Espinaca
                  td.bg-table-01 2 minutos
                  td.bg-table-01 3 minutos
                tr
                  td.bg-table-02 Pimiento (tiras)
                  td.bg-table-02 2 minutos
                  td.bg-table-02 3 minutos
                tr
                  td.bg-table-01 Arvejas
                  td.bg-table-01 2-3 minutos
                  td.bg-table-01 4 minutos

    separador

    .bg_img_5.mb-3
      #t_3_3.titulo-segundo.color-acento-contenido
        .h2(data-aos="fade-right") 3.3 Efectos sobre textura, color y carga microbiana
      .mb-3

      .bloque-texto-t.justify-content-center.align-items-center.mb-5
        .bloque-texto-t__img.mb-0
          img(src='@/assets/curso/temas/tema_3/img_6.png')
        .bloque-texto-t__texto.color-secundario-10.col-10.mb-0
          p.mb-0 El escaldado, cuando se ejecuta con precisión, genera una serie de efectos determinantes en la calidad del alimento que será conservado. Esta intervención térmica no solo mejora la apariencia visual y la textura del producto, sino que también contribuye a reducir su carga microbiana superficial, facilitando así la efectividad de los tratamientos posteriores. 

      .row.justify-content-center.align-items-center.mb-0
        .col-12.col-lg-10
          ImagenInfografica.time-line-info.pulso-invertido.mb-5
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema_3/img_7.png')

            .tarjeta.color-adicional-1(x="47.26%" y="37.49%" numero="")
              .h5.mb-3 Textura
              .d-flex.flex-md-row.flex-column
                .flex-shrink-0.mb-md-0.mb-3.d-flex.align-items-center.justify-content-center
                  img(src="@/assets/curso/temas/tema_3/img_8.png", class="img-fluid")
                .flex-grow-1.ms-md-3.ms-0
                  p.mb-3 En verduras como el brócoli o las arvejas, el escaldado permite conservar una textura firme y crujiente. No obstante, si el tiempo de exposición es excesivo, puede provocar ablandamiento indeseado y pérdida de estructura.
            .tarjeta.color-adicional-1(x="73.1%" y="56.1%" numero="")
              .h5.mb-3 Color
              .d-flex.flex-md-row.flex-column
                .flex-shrink-0.mb-md-0.mb-3.d-flex.align-items-center.justify-content-center
                  img(src="@/assets/curso/temas/tema_3/img_9.png", class="img-fluid")
                .flex-grow-1.ms-md-3.ms-0
                  p.mb-3 Las hortalizas de hoja verde intensifican su color al escaldarse, debido a la inactivación de enzimas como la peroxidasa y la polifenoloxidasa. Este efecto mejora notablemente la apariencia visual de productos como espinaca, acelga y brócoli.
            .tarjeta.color-adicional-1(x="57.45%" y="75.9%" numero="" style="transform: translate(-50%, -50%); max-width: 90vw;")
              .h5.mb-3 Carga microbiana
              .d-flex.flex-md-row.flex-column
                .flex-shrink-0.mb-md-0.mb-3.d-flex.align-items-center.justify-content-center
                  img(src="@/assets/curso/temas/tema_3/img_10.png", class="img-fluid")
                .flex-grow-1.ms-md-3.ms-0
                  p.mb-3 Aunque no es un proceso de esterilización, el escaldado reduce significativamente la presencia de microorganismos en la superficie del alimento. Esta disminución facilita y complementa etapas posteriores como la pasteurización o el envasado al vacío, reforzando la inocuidad del producto final.
</template>

<script>
export default {
  name: 'Tema3',
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
