<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Métodos
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema_2/img_1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los métodos de conservación de alimentos comprenden un conjunto de técnicas diseñadas para prolongar la vida útil de los productos agrícolas, manteniendo sus propiedades nutricionales, sensoriales y microbiológicas. En el caso de frutas y verduras, estos métodos se aplican para reducir el deterioro natural ocasionado por la acción de microorganismos, enzimas o condiciones ambientales adversas. La elección del método adecuado depende de factores como el tipo de producto, su acidez, contenido de agua, y destino final. Estas técnicas, que incluyen el uso del frío, calor, sal, azúcar, vinagre y otros agentes, permiten transformar productos perecederos en conservas estables, seguras y comercializables.

    separador

    #t_2_1.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 2.1 Refrigeración y congelación
    .mb-3

    p.mb-3 La refrigeración y la congelación son métodos físicos que conservan frutas y verduras al mantenerlas a bajas temperaturas. La refrigeración (0–4 °C) disminuye la velocidad de crecimiento microbiano, mientras que la congelación (−18 °C o menos) detiene su actividad casi por completo. Ambos métodos ayudan a preservar el valor nutricional y las características sensoriales de los alimentos.

    .bg_img_2.mb-3
      .row.d-flex.align-items-stretch.justify-content-center.align-items-center.mb-3
        .col-12.col-lg-4.mb-lg-0.mb-3.d-flex
          .w-100.d-flex.flex-column
            .tarjeta.color-adicional-3.mb-0.height-100
              figure
                img(src="@/assets/curso/temas/tema_2/img_2.png", class="img-fluid")
              h5.mb-3.p-3.pb-0 VENTAJAS
              ul.p-3.pt-2.mb-0
                li.mb-3.d-flex.align-items-start
                  i.fa-solid.fa-circle-check.me-2(style="color: #8C492A; font-size: 16px; margin-top: 4px;")
                  span(style="line-height: 1.5") 	Mantienen frescura, textura y sabor natural.
                li.mb-3.d-flex.align-items-start
                  i.fa-solid.fa-circle-check.me-2(style="color: #8C492A; font-size: 16px; margin-top: 4px;")
                  span(style="line-height: 1.5") 	No requieren aditivos químicos.
                li.mb-0.d-flex.align-items-start
                  i.fa-solid.fa-circle-check.me-2(style="color: #8C492A; font-size: 16px; margin-top: 4px;")
                  span(style="line-height: 1.5") 	Son útiles para productos como frutas escaldadas (fresas, moras entre otras) o vegetales pretratados (zanahorias y brócoli).
        .col-12.col-lg-4.d-flex
          .w-100.d-flex.flex-column
            .tarjeta.color-secundario-10.mb-0.height-100
              figure
                img(src="@/assets/curso/temas/tema_2/img_3.png", class="img-fluid")
              h5.mb-3.p-3.pb-0 LIMITACIONES
              ul.p-3.pt-2.mb-0
                li.mb-3.d-flex.align-items-start
                  i.fa-solid.fa-circle-check.me-2(style="color: #8C492A; font-size: 16px; margin-top: 4px;")
                  span(style="line-height: 1.5") 	Requieren cadena de frío constante y suministro eléctrico estable.
                li.mb-0.d-flex.align-items-start
                  i.fa-solid.fa-circle-check.me-2(style="color: #8C492A; font-size: 16px; margin-top: 4px;")
                  span(style="line-height: 1.5") 	La descongelación puede afectar la textura, especialmente en frutas blandas.

    separador

    #t_2_2.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 2.2 Deshidratación y salazón
    .mb-3

    p.mb-3 La deshidratación y la salazón son métodos tradicionales que conservan los alimentos al reducir el contenido de agua, lo que impide el desarrollo de la mayoría de los microorganismos, ya que éstos requieren humedad para sobrevivir y reproducirse.

    .row.d-flex.align-items-stretch.justify-content-center.align-items-center.mb-3
      .col-6.col-lg-4.mb-lg-0.mb-3.d-flex
        figure.w-100.d-flex.flex-column
          img(src="@/assets/curso/temas/tema_2/img_4.png", class="img-fluid").height-100
      .col-12.col-lg-8.mb-lg-0.mb-3
        .tarjeta.color-adicional-4.mb-4
          h5.bgc.color-secundario-20.mb-0.p-4.pb-3.rounded-top-3 Deshidratación
          p.mb-0.p-3.pb-4 Se puede realizar mediante el uso de energía solar directa, corrientes de aire caliente o tecnología de liofilización (congelación seguida de sublimación). Es ideal para frutas como mango, banano o piña. Además de conservar, facilita el almacenamiento y transporte por la reducción de peso y volumen.
        .tarjeta.color-adicional-4.mb-0
          h5.bgc.color-secundario-20.mb-0.p-4.pb-3.rounded-top-3 Salazón
          p.mb-0.p-3.pb-4 Consiste en aplicar sal seca o preparar una salmuera (agua con sal) donde se sumergen los alimentos. Este método es común en hortalizas y como tratamiento previo a fermentaciones.

    p.mb-0 Ambos métodos han sido usados desde la antigüedad y, aunque pueden reducir el contenido nutricional, son eficaces y accesibles.

    separador

    #t_2_3.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 2.3 Conservas en azúcar y vinagre
    .mb-3

    p.mb-3 Las conservas en azúcar y vinagre se basan en el principio de modificación del medio mediante solutos, lo que genera una presión osmótica o un pH desfavorable para los microorganismos.

    .bg_img_3.mb-3
      .row.d-flex.align-items-stretch.justify-content-center.align-items-center.mb-3
        .col-12.col-lg-5.d-flex.mb-3
          .w-100.d-flex.flex-column
            .tarjeta.color-secundario-10.height-100
              h5.bgc.color-acento-contenido.mb-0.p-4.pb-3.rounded-top-3 Conservas en azúcar
              .row.justify-content-center.align-items-center.mb-0.p-4
                .col-3.col-lg-3.mb-0
                  figure
                    img(src="@/assets/curso/temas/tema_2/img_5.svg", class="img-fluid")
                .col-12.col-lg-9.mb-0
                  p.mb-0 Se elaboran productos como mermeladas, jaleas y frutas en almíbar, mediante la cocción de frutas con azúcar hasta alcanzar una concentración superior al 60 %, lo que reduce la actividad del agua y aporta sabor, brillo y textura.
        .col-12.col-lg-5.d-flex.mb-3
          .w-100.d-flex.flex-column
            .tarjeta.color-secundario-10.height-100
              h5.bgc.color-acento-contenido.mb-0.p-4.pb-3.rounded-top-3 Conservas en vinagre
              .row.justify-content-center.align-items-center.mb-0.p-4
                .col-3.col-lg-3.mb-0
                  figure.mb-0 
                    img(src="@/assets/curso/temas/tema_2/img_6.svg", class="img-fluid")
                .col-12.col-lg-9.mb-0
                  p.mb-0 Utilizan ácido acético (vinagre) en combinación con agua, sal, azúcar y especias para sumergir verduras como zanahoria, cebolla, pepino o coliflor. El pH final debe ser menor a 4.5 para garantizar la conservación.

        .col-12.col-lg-10
          .cajon.color-acento-contenido-10-Mix-secundario.p-4
            p En ambos casos, se recomienda realizar tratamiento térmico (pasteurización) posterior para asegurar la inocuidad microbiológica. Este método combina sabor, conservación y presentación atractiva del producto.

    separador

    #t_2_4.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 2.4 Esterilización térmica y uso de alcohol
    .mb-3

    p.mb-3 Estos métodos se enfocan en la eliminación total de microorganismos o su inhibición prolongada mediante el uso de temperaturas elevadas o la incorporación de alcohol comestible.

    .row.d-flex.align-items-stretch.justify-content-center.align-items-center.mb-3
      .col-6.col-lg-4.d-flex
        figure.p-2.pb-4.w-100.d-flex.flex-column
          img(src="@/assets/curso/temas/tema_2/img_7.png", class="img-fluid").height-100
      .col-12.col-lg-8
        .tarjeta.color-adicional-3
          h5.mb-3.p-3.pb-0.ps-5 Esterilización  térmica
          .row.justify-content-center.align-items-center.mb-3.p-0
            .col-12.col-lg-9.order-2.order-lg-1
              p.pt-0.p-2.pb-0 Consiste en aplicar temperaturas entre 116 °C y 120 °C a los alimentos envasados herméticamente, por ejemplo, en frascos de vidrio. Se realiza en autoclaves o en ollas a presión y está indicada para alimentos con pH superior a 4.5, como legumbres y verduras, ya que son más susceptibles a la bacteria Clostridium botulinum.
            .col-3.col-lg-2.order-1.order-lg-2.mb-lg-0.mb-3
              figure.p-2.pt-0.ps-0.pb-4 
                img(src="@/assets/curso/temas/tema_2/img_8.svg", class="img-fluid")
        .tarjeta.color-secundario-10
          h5.mb-3.p-3.pb-0.ps-5 Conservación en alcohol
          .row.justify-content-center.align-items-center.mb-3.p-0
            .col-12.col-lg-9.order-2.order-lg-1
              p.p-3.pt-0.pb-0 Es una técnica artesanal donde se emplea alcohol etílico (apto para consumo) para conservar frutas como cerezas, duraznos o guayabas. El alcohol penetra en el tejido vegetal y reemplaza parte de la humedad interna. A menudo se mezcla con azúcar para mejorar sabor y conservación.
            .col-3.col-lg-2.order-1.order-lg-2.mb-lg-0.mb-3
              figure.p-2.pt-0.ps-0.pb-4 
                img(src="@/assets/curso/temas/tema_2/img_9.svg", class="img-fluid")
      .col-12.col-lg-10
        .cajon.color-adicional-4-Mix-secundario.p-4
          p Ambos métodos requieren un control riguroso del proceso, temperatura y concentración, además de un buen sellado de los envases.
</template>

<script>
export default {
  name: 'Tema2',
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
