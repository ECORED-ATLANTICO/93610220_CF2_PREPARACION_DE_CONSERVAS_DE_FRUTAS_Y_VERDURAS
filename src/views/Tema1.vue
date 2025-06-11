<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Fundamentos de la conservación
    .bloque-texto-t.justify-content-center.align-items-center.mb-0
      .bloque-texto-t__img.mb-0
        img(src='@/assets/curso/temas/tema_1/img_1.png')
      .bloque-texto-t__texto.color-acento-contenido-10.col-10.mb-0
        p.mb-0 La conservación de frutas y verduras requiere el conocimiento y aplicación de principios que permitan preservar sus propiedades nutricionales, sensoriales y microbiológicas durante periodos prolongados. Estos fundamentos integran técnicas y saberes que buscan evitar el deterioro del alimento y garantizar su inocuidad, facilitando su almacenamiento, transporte y comercialización. Comprender los mecanismos que influyen en la estabilidad del producto es esencial para seleccionar métodos adecuados que aseguren un resultado seguro, apetecible y de calidad.

    separador

    #t_1_1.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 1.1 Principios básicos y objetivos
    .mb-3
    .row.d-flex.align-items-stretch.justify-content-center.align-items-center.mb-3
      .col-12.col-lg-8.mb-lg-3.mb-0.order-2.order-lg-1
        p.mb-3 La conservación de alimentos, y en particular de frutas y verduras, se basa en principios fisicoquímicos y microbiológicos que buscan mantener las características nutricionales, sensoriales y de inocuidad del producto durante un tiempo determinado. 
        .tarjeta.color-acento-contenido-10
          .row.d-flex.align-items-stretch.justify-content-center.align-items-center.mb-0.p-0
            .col-3.col-lg-1.mb-lg-0.mb-3.d-flex
              figure.w-100.d-flex.flex-column
                img(src="@/assets/curso/temas/tema_1/img_2.svg", class="img-fluid").height-100
            .col-12.col-lg-11
              p.mb-0 La finalidad de aplicar técnicas de conservación es ralentizar o detener el deterioro causado por microorganismos, enzimas propias del alimento, reacciones químicas (como la oxidación), o factores ambientales como temperatura, luz y humedad.
      .col-6.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3.d-flex
        figure.w-100.d-flex.flex-column
          img.mb-0(src="@/assets/curso/temas/tema_1/img_3.png", class="img-fluid").height-100

    ImagenInfografica.time-line-info.pulso-invertido.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema_1/img_4.svg', class="img-fluid")

      .tarjeta.color-adicional-1(x="24.5%" y="26.4%" numero="")
        .h5.mb-3 Inhibición microbiana
        .d-flex.flex-md-row.flex-column.align-items-stretch.justify-content-center.align-items-center
          .flex-shrink-0.mb-md-0.mb-3.d-flex
            figure.w-100.d-flex.flex-column
              img(src="@/assets/curso/temas/tema_1/img_5.png", class="img-fluid").height-100
          .flex-grow-1.ms-md-3.ms-0
            p.mb-3 Detiene el crecimiento de levaduras, mohos y bacterias usando calor, frío, sal, azúcar o vinagre.
            p 
              strong Ejemplo: 
              | escaldar espinacas y encurtir posteriormente.

      .tarjeta.color-adicional-1(x="30.9%" y="50%" numero="")
        .h5.mb-2 Inactivación enzimática
        .d-flex.flex-md-row.flex-column.align-items-stretch.justify-content-center.align-items-center
          .flex-shrink-0.mb-md-0.mb-3.d-flex
            figure.w-100.d-flex.flex-column
              img(src="@/assets/curso/temas/tema_1/img_6.png", class="img-fluid").height-100
          .flex-grow-1.ms-md-3.ms-0
            p.mb-3 Detiene la acción de enzimas que provocan pardeamiento o cambios de sabor.
            p 
              strong Ejemplo: 
              | escaldar espinacas antes del enlatado para preservar el color.

      .tarjeta.color-adicional-1(x="39.3%" y="78%" numero="")
        .h5.mb-2 Preservación de nutrientes
        .d-flex.flex-md-row.flex-column.align-items-stretch.justify-content-center.align-items-center
          .flex-shrink-0.mb-md-0.mb-3.d-flex
            figure.w-100.d-flex.flex-column
              img(src="@/assets/curso/temas/tema_1/img_7.png", class="img-fluid").height-100

          .flex-grow-1.ms-md-3.ms-0
            p.mb-3 Reduce la pérdida de vitaminas sensibles para minimizar el deterioro nutricional.
            p 
              strong Ejemplo: 
              | usar tratamientos térmicos suaves para mantener la vitamina C.

      .tarjeta.color-adicional-1(x="73.1%" y="26.4%" numero="")
        .h5.mb-2 Inocuidad alimentaria
        .d-flex.flex-md-row.flex-column.align-items-stretch.justify-content-center.align-items-center
          .flex-shrink-0.mb-md-0.mb-3.d-flex
            figure.w-100.d-flex.flex-column
              img(src="@/assets/curso/temas/tema_1/img_8.png", class="img-fluid").height-100

          .flex-grow-1.ms-md-3.ms-0
            p.mb-3 Eliminar microorganismos como Clostridium <I>botulinum</I>.
            p 
              strong Ejemplo: 
              | esterilizar alimentos a alta temperatura para evitar intoxicaciones.

      .tarjeta.color-adicional-1(x="69.2%" y="51.2%" numero="")
        .h5.mb-2 Calidad sensorial
        .d-flex.flex-md-row.flex-column.align-items-stretch.justify-content-center.align-items-center
          .flex-shrink-0.mb-md-0.mb-3.d-flex
            figure.w-100.d-flex.flex-column
              img(src="@/assets/curso/temas/tema_1/img_9.png", class="img-fluid").height-100

          .flex-grow-1.ms-md-3.ms-
            p.mb-3 Conserva características organolépticas como olor, color, sabor, textura y aroma.
            p 
              strong Ejemplo: 
              | usar azúcar en jaleas no solo para conservar, sino para mantener el sabor.

      .tarjeta.color-adicional-1.pulso-invertido(x="60.7%" y="78%" numero="")
        .h5.mb-2 Sostenibilidad
        .d-flex.flex-md-row.flex-column.align-items-stretch.justify-content-center.align-items-center
          .flex-shrink-0.mb-md-0.mb-3.d-flex
            figure.w-100.d-flex.flex-column
              img(src="@/assets/curso/temas/tema_1/img_10.png", class="img-fluid").height-100
          .flex-grow-1.ms-md-3.ms- 
            p.mb-3 Evitar el desperdicio, extendiendo la vida útil de excedentes agrícolas.
            p 
              strong Ejemplo: 
              | transformar frutas maduras en productos de valor agregado como mermeladas.

    .tarjeta_1_1
      p.mb-3 Entre los objetivos principales de la conservación se encuentran:
      ul.ps-4
        li
          i.fa-solid.fa-circle-check(style="color: #8C492A; font-size: 15px").mb-0
          |   Prolongar la vida útil del producto.
        li
          i.fa-solid.fa-circle-check(style="color: #8C492A; font-size: 15px").mb-0
          |   Prevenir el desarrollo de microorganismos patógenos o alterantes.
        li
          i.fa-solid.fa-circle-check(style="color: #8C492A; font-size: 15px").mb-0
          |   Mantener la calidad nutricional y organoléptica.
        li
          i.fa-solid.fa-circle-check(style="color: #8C492A; font-size: 15px").mb-0
          |   Facilitar el transporte y almacenamiento.
        li
          i.fa-solid.fa-circle-check(style="color: #8C492A; font-size: 15px").mb-0
          |   Disminuir pérdidas poscosecha y aprovechar excedentes productivos.
      p.mb-0 Estos principios se aplican bajo diferentes técnicas, como la reducción de la actividad de agua, el control de temperatura, la modificación de la atmósfera interna del envase, la acidificación y la incorporación de sustancias conservantes.

    separador

    #t_1_2.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 1.2 Factores
    .mb-3

    p.mb-5 Existen diversos factores que influyen en la eficacia y selección del método de conservación de frutas y verduras. Su adecuada evaluación permite elegir el proceso más efectivo para garantizar productos seguros, estables y de calidad:

    .bg_img_1.mb-3.height-100
      .row.d-flex.align-items-stretch.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-7.mb-0.order-2.order-lg-1.p-0.d-flex
          .custom-slider.p-5.p-sm-3
            SlyderF(columnas="col-12 col-sm-6 col-md-6 col-lg-6").p-2.rounded-3
              .tarjeta.color-adicional-2
                .tarjeta--1
                .tarjeta--slider__title.mb-3 Tipo de producto
                .tarjeta--slider__content Cada fruta o verdura presenta características diferentes en cuanto a pH, contenido de agua, firmeza, carga microbiana, y respiración poscosecha.
              .tarjeta.color-adicional-2
                .tarjeta--2
                .tarjeta--slider__title.mb-3  Condición inicial
                .tarjeta--slider__content El estado de madurez, integridad, y limpieza del producto antes del procesamiento influye directamente en la calidad de la conserva.
              .tarjeta.color-adicional-2
                .tarjeta--3
                .tarjeta--slider__title.mb-3 Técnica de conservación
                .tarjeta--slider__content La selección del método adecuado (frío, calor, sal, azúcar y vinagre) depende de las propiedades fisicoquímicas del producto y del resultado deseado.
              .tarjeta.color-adicional-2
                .tarjeta--4
                .tarjeta--slider__title.mb-3 Material de empaque
                .tarjeta--slider__content Establece El envase debe ser apto para contacto con alimentos, hermético, resistente al calor (en caso de tratamientos térmicos), y libre de defectos.
              .tarjeta.color-adicional-2
                .tarjeta--5
                .tarjeta--slider__title.mb-3 Condiciones de almacenamiento
                .tarjeta--slider__content Establece Factores como temperatura, humedad, exposición a la luz y manipulación posterior inciden en la duración efectiva del alimento conservado.

        .col-5.col-lg-5.order-1.order-lg-2.mb-lg-0.mb-3.d-flex.ps-3
          figure.w-100.d-flex.flex-column
            img(src="@/assets/curso/temas/tema_1/img_18.png", class="img-fluid").height-100

    .bloque-texto-t.justify-content-center.align-items-center.mb-0
      .bloque-texto-t__img.mb-0
        figure.height-100 
          img(src='@/assets/curso/temas/tema_1/img_19.png')
      .bloque-texto-t__texto.color-secundario-10.col-10.mb-0
        p.mb-0 Estos factores son evaluados para cada línea de producción de conservas, permitiendo establecer protocolos que aseguren productos seguros, estables y de calidad.
 
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
