<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Preparación específica
    .bg_img_12.mb-3
      .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema_6/img_1.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 La calidad de una conserva se logra cuando cada etapa del proceso, desde la selección de los ingredientes hasta su almacenamiento, se realiza de manera ordenada, higiénica y siguiendo criterios técnicos. Aplicar correctamente estos pasos garantiza un producto seguro, duradero y con buena aceptación. La preparación eficaz de conservas garantiza:

      .row.d-flex.align-items-stretch.justify-content-center.align-items-center.mb-3
        .col-sm-6.col-lg-3.mb-4.mb-lg-0.d-flex
          .w-100.d-flex.flex-column
            .tarjeta--boton.color-acento-contenido-10-hover-cs-10.p-4.height-100
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/temas/tema_6/img_2.svg')
              h3.text-center Seguridad microbiológica.

        .col-sm-6.col-lg-3.mb-4.mb-lg-0.d-flex
          .w-100.d-flex.flex-column
            .tarjeta--boton.color-acento-contenido-10-hover-cs-10.p-4.height-100
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/temas/tema_6/img_3.svg')
              h3.text-center Textura, color y sabor adecuados.

        .col-sm-6.col-lg-3.mb-4.mb-sm-0.d-flex
          .w-100.d-flex.flex-column
            .tarjeta--boton.color-acento-contenido-10-hover-cs-10.p-4.height-100
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/temas/tema_6/img_4.svg')
              h3.text-center Mayor vida útil.

        .col-sm-6.col-lg-3.d-flex
          .w-100.d-flex.flex-column
            .tarjeta--boton.color-acento-contenido-10-hover-cs-10.p-3.height-100
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/temas/tema_6/img_5.svg')
              h3.text-center.mt-auto.flex.items-center.justify-center Aceptación por parte del consumidor o el mercado.

    separador

    #t_6_1.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 6.1 Ingredientes y técnicas de elaboración
    .mb-3
    figure.mb-3
      img(src='@/assets/curso/temas/tema_6/img_6.png')
    p.mb-3 Una conserva de calidad comienza con la elección adecuada de sus componentes. Estos ingredientes no solo aportan sabor y textura, sino que cumplen funciones específicas para asegurar la estabilidad y la inocuidad del producto. Entre los ingredientes claves se encuentran:   
    
    .tarjeta.tarjeta--fondo__slider.p-4.mb-5
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-6.order-2.order-lg-1.mb-0
            h2 Frutas y verduras
            ul
              li
                i.fa-solid.fa-circle-check(style="color: #8C492A; font-size: 15px")
                |  	Se deben utilizar productos maduros, frescos y firmes, con su color y aroma característicos.
              li
                i.fa-solid.fa-circle-check(style="color: #8C492A; font-size: 15px").mb-0
                | 	Es fundamental que estén libres de daños físicos como golpes o magulladuras y no presenten signos de contaminación.
              li
                i.fa-solid.fa-circle-check(style="color: #8C492A; font-size: 15px").mb-0
                | 	La selección varía según el tipo de conserva que se desea elaborar, ya sea dulce o salada.
          .col-7.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_6/img_7.png', class="img-fluid")

        .row.justify-content-center.align-items-center
          .col-12.col-lg-6.order-2.order-lg-1.mb-0
            h2 Conservantes naturales
            ul
              li
                i.fa-solid.fa-circle-check(style="color: #8C492A; font-size: 15px")
                |  	<b>Azúcar:</b> utilizada en conservas dulces (almíbares, jaleas y mermeladas), reduce la actividad de agua, dificultando el desarrollo microbiano.
              li
                i.fa-solid.fa-circle-check(style="color: #8C492A; font-size: 15px").mb-0
                | 	<b>Sal:</b> en productos en salmuera o encurtidos, ayuda a conservar al disminuir la actividad de agua.
              li
                i.fa-solid.fa-circle-check(style="color: #8C492A; font-size: 15px").mb-0
                | 	<b>Vinagre</b> su acidez natural inhibe microorganismos, siendo ideal para encurtidos y conservas ácidas.
              li
                i.fa-solid.fa-circle-check(style="color: #8C492A; font-size: 15px").mb-0
                | 	<b>Especias:</b> como laurel, clavo, canela, jengibre, ajo o pimienta no solo aportan aroma y sabor, sino también propiedades antimicrobianas
          .col-7.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_6/img_8.png', class="img-fluid")

        .row.justify-content-center.align-items-center
          .col-12.col-lg-6.order-2.order-lg-1.mb-0
            h2 Otros ingredientes funcionales
            ul
              li
                i.fa-solid.fa-circle-check(style="color: #8C492A; font-size: 15px")
                | 	<b>Pectina</b> (natural o añadida): es clave en mermeladas y jaleas, ya que aporta la textura gelatinosa deseada.
              li
                i.fa-solid.fa-circle-check(style="color: #8C492A; font-size: 15px")
                | 	<b>Ácido cítrico:</b> ayuda a ajustar la acidez, mejora la conservación y protege el color de los alimentos.
              li
                i.fa-solid.fa-circle-check(style="color: #8C492A; font-size: 15px")
                | 	<b>Agua potable tratada:</b> se utiliza en la preparación de líquidos de cobertura. Es indispensable que cumpla con los estándares de calidad para consumo humano.
          .col-7.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_6/img_9.png', class="img-fluid")

    .row.justify-content-center.align-items-center.mb-5
      .col-3.col-lg-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/tema_6/img_10.svg', class="img-fluid")
      .col-12.col-lg-11
        p Cada conserva de calidad es el resultado de una secuencia de técnicas aplicadas con precisión. Estas acciones, desde el lavado inicial hasta el almacenamiento final, permiten proteger el alimento, conservar sus propiedades y asegurar su inocuidad. A continuación, se presentan las etapas esenciales que conforman el proceso de elaboración, todas con un propósito específico en la estabilidad y seguridad del producto.

    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--color-adicional-5-6")
      div(titulo="Lavado y selección").p-5.pb-0.pt-0
        ul.mb-3
          li
            i.fa-solid.fa-circle-check(style="color: #8C492A; font-size: 15px").mb-0
            | 	Puede ser manual (casero) o mecanizado (industrial).
          li
            i.fa-solid.fa-circle-check(style="color: #8C492A; font-size: 15px").mb-0
            | 	Elimina impurezas, tierra, insectos o residuos químicos
      div(titulo="Escaldado").p-5.pb-0.pt-0
        ul.mb-3
          li
            i.fa-solid.fa-circle-check(style="color: #8C492A; font-size: 15px").mb-0
            | 	Tratamiento térmico breve en agua o vapor (80-100°C).
          li
            i.fa-solid.fa-circle-check(style="color: #8C492A; font-size: 15px").mb-0
            | 	Inactiva enzimas responsables del deterioro, reduce carga microbiana y mejora color y textura.
      div(titulo="Preparación de líquidos de cobertura").p-5.pb-0.pt-0
        ul.mb-3
          li
            i.fa-solid.fa-circle-check(style="color: #8C492A; font-size: 15px").mb-0
            | 	 Se formulan según el tipo de conserva: almíbar, salmuera, vinagre o mezcla.
          li
            i.fa-solid.fa-circle-check(style="color: #8C492A; font-size: 15px").mb-0
            |   Deben aplicarse en caliente para favorecer el vacío y sellado.
      div(titulo="Envasado y tratamiento térmico").p-5.pb-0.pt-0
        ul.mb-3
          li
            i.fa-solid.fa-circle-check(style="color: #8C492A; font-size: 15px").mb-0
            | 	El llenado debe hacerse en caliente para evitar recontaminación
          li
            i.fa-solid.fa-circle-check(style="color: #8C492A; font-size: 15px").mb-0
            |  Según el pH del producto, se aplican técnicas de pasteurización (conservas ácidas) o esterilización (baja acidez).
          li
            i.fa-solid.fa-circle-check(style="color: #8C492A; font-size: 15px").mb-0
            |  El tratamiento térmico define la vida útil y la seguridad del producto.
      div(titulo="Almacenamiento final").p-5.pb-0.pt-0
        ul.mb-3
          li
            i.fa-solid.fa-circle-check(style="color: #8C492A; font-size: 15px").mb-0
            | 	Frascos deben conservarse en lugar fresco, seco, ventilado y protegido de la luz solar.
          li
            i.fa-solid.fa-circle-check(style="color: #8C492A; font-size: 15px").mb-0
            |  La rotulación debe incluir fecha de elaboración, vencimiento, lote y condiciones de almacenamiento.

    separador

    #t_6_2.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 6.2 Aplicación de procesos de conservación combinada
    .mb-3

    .row.justify-content-center.align-items-center.mb-3
      .col-12.col-lg-8.order-2.order-lg-1.mb-lg-0.mb-3
        p La tecnología de conservación combinada, también conocida como <b>tecnología de obstáculos múltiples</b> <i>(Hurdle Technology)</i>, consiste en la aplicación de varias técnicas complementarias que, al actuar en conjunto, logran inhibir el desarrollo microbiano sin afectar las propiedades del alimento.
        .tarjeta.color-acento-contenido-10.p-3.justify-content-center.align-items-center.mb-0
          .row.justify-content-center.align-items-center.mb-0
            .col-3.col-lg-2.mb-lg-0.mb-3
              figure
                img(src="@/assets/curso/temas/tema_6/img_11.svg", class="img-fluid")
            .col-12.col-lg-10
              p Este enfoque permite reducir la intensidad de los tratamientos individuales (por ejemplo, menor cocción, menos ácido, o menos azúcar), manteniendo o incluso mejorando:
      .col-6.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/tema_6/img_12.png', class="img-fluid")

    .bg_img_13.mb-3
      .row.justify-content-center.align-items-center.mb-3
        .col-12.col-lg-10.mb-3
          .titulo-sexto.color-acento-contenido
            h5 Figura 1.
            I(style="font-weight: normal;") Beneficios de la conservación de conservas
          figure
            img(src='@/assets/curso/temas/tema_6/img_13.svg')
            figcaption <b>Fuente.</b> SENA, 2025

    .row.justify-content-center.align-items-center.mb-5
      .col-6.col-lg-5.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/tema_6/img_14.png', class="img-fluid")
      .col-12.col-lg-7
        .cajon.color-acento-contenido-10-Mix-secundario.p-4
          p La tecnología de conservación combinada permite aplicar varias técnicas que, juntas, mejoran la seguridad y estabilidad del alimento sin comprometer su calidad. Estas combinaciones no son al azar: cada una responde a las características del producto y a los resultados que se desean obtener.
          p A continuación, se presentan tres ejemplos comunes de cómo se pueden integrar métodos físicos, químicos y biológicos para lograr conservas más seguras y duraderas:

    .row.justify-content-center.align-items-center.mb-3
      .col-12.col-lg-7.order-2.order-lg-1.mb-lg-0.mb-3
        LineaTiempoD.color-adicional-3
          .row(numero="1" titulo="Escaldado + salmuera + pasteurización")
            .col-md-6.mb-4.mb-md-0
              p.text-small Ideal para vegetales (zanahoria, coliflor, entre otros) que requieren firmeza y larga vida útil sin refrigeración.
          .row(numero="2" titulo="Azúcar + acidificación + vacío")
            .col-md-6.mb-4.mb-md-0
              p.text-small Usado en mermeladas o frutas en almíbar. El azúcar conserva, el ácido reduce pH y el vacío sella.
          .row(numero="3" titulo="Fermentación + refrigeración")
            .col-md-6.mb-4.mb-md-0
              p.text-small Conservas artesanales como chucrut, encurtidos caseros o kimchi. La fermentación acidifica, y la cadena de frío estabiliza.
      .col-7.col-lg-5.order-1.order-lg-2.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/tema_6/img_15.png', class="img-fluid")

    p.mb-3 El uso de técnicas combinadas no solo mejora la conservación, sino que también ofrece ventajas importantes en términos de calidad, adaptabilidad y seguridad. Entre sus principales beneficios se destacan:

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-7.mb-lg-0.mb-3.order-2.order-lg-1
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-12.mb-3
            .tarjeta.color-secundario-10.p-3
              .row.justify-content-center.align-items-center.mb-0
                .col-4.col-lg-2.mb-lg-0.mb-3
                  figure
                    img(src="@/assets/curso/temas/tema_6/img_16.svg", class="img-fluid")
                .col-12.col-lg-10
                  p Permite personalizar conservas según el mercado objetivo (gourmet, dietético o artesanal). 
          .col-lg-12.mb-3
            .tarjeta.color-acento-contenido-20.p-3
              .row.justify-content-center.align-items-center.mb-0
                .col-4.col-lg-2.mb-lg-0.mb-3
                  figure
                    img(src="@/assets/curso/temas/tema_6/img_17.svg", class="img-fluid")
                .col-12.col-lg-10
                  p Reduce el uso de aditivos químicos sintéticos, siendo una opción más natural. 
          .col-lg-12.mb-3
            .tarjeta.color-secundario-10.p-3
              .row.justify-content-center.align-items-center.mb-0
                .col-4.col-lg-2.mb-lg-0.mb-3
                  figure
                    img(src="@/assets/curso/temas/tema_6/img_18.svg", class="img-fluid")
                .col-12.col-lg-10
                  p Favorece el cumplimiento de estándares de calidad e inocuidad internacionales.
      .col-6.col-lg-5.order-1.order-lg-2.mb-lg-0.mb-3
        figure
          img(src="@/assets/curso/temas/tema_6/img_19.png", class="img-fluid")



</template>

<script>
export default {
  name: 'Tema6',
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
