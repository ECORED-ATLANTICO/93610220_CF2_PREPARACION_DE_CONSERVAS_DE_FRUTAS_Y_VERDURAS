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
      .h2(data-aos="fade-right") 1.1.	Principios básicos y objetivos
    .mb-3
    .row.justify-content-center.align-items-center.mb-3
      .col-12.col-lg-8.mb-3.order-2.order-lg-1
        p.mb-3 La conservación de alimentos, y en particular de frutas y verduras, se basa en principios fisicoquímicos y microbiológicos que buscan mantener las características nutricionales, sensoriales y de inocuidad del producto durante un tiempo determinado. 
        .tarjeta.color-acento-contenido-10
          .row.justify-content-center.align-items-center.mb-0.p-0
            .col-4.col-lg-1
              img(src="@/assets/curso/temas/tema_1/img_2.svg", class="img-fluid")
            .col-12.col-lg-11
              p La finalidad de aplicar técnicas de conservación es ralentizar o detener el deterioro causado por microorganismos, enzimas propias del alimento, reacciones químicas (como la oxidación), o factores ambientales como temperatura, luz y humedad.
      .col-6.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3
        figure.mb-0
          img.mb-0(src="@/assets/curso/temas/tema_1/img_3.png", class="img-fluid")
    
    ImagenInfografica.time-line-info.pulso-invertido.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema_1/img_4.svg')

      .tarjeta.color-adicional-1(x="24.5%" y="26.4%" numero="")
        .h5.mb-3 Inhibición microbiana
        .d-flex.flex-md-row.flex-column
          .flex-shrink-0.mb-md-0.mb-3.d-flex.align-items-center.justify-content-center
            img(src="@/assets/curso/temas/tema_1/img_5.png", class="img-fluid")
          .flex-grow-1.ms-md-3.ms-0
            p.mb-3 Detiene el crecimiento de levaduras, mohos y bacterias usando calor, frío, sal, azúcar o vinagre.
            p 
              strong Ejemplo: 
              | escaldar espinacas y encurtir posteriormente.

      .tarjeta.color-adicional-1(x="30.9%" y="50%" numero="")
        .h5.mb-2 Inactivación enzimática
        .d-flex.flex-md-row.flex-column
          .flex-shrink-0.mb-md-0.mb-3.d-flex.align-items-center.justify-content-center
            img(src="@/assets/curso/temas/tema_1/img_6.png", class="img-fluid")
          .flex-grow-1.ms-md-3.ms-0
            p.mb-3 Detiene la acción de enzimas que provocan pardeamiento o cambios de sabor.
            p 
              strong Ejemplo: 
              | escaldar espinacas antes del enlatado para preservar el color.

      .tarjeta.color-adicional-1(x="39.3%" y="78%" numero="")
        .h5.mb-2 Preservación de nutrientes
        .d-flex.flex-md-row.flex-column
          .flex-shrink-0.mb-md-0.mb-3.d-flex.align-items-center.justify-content-center
            img(src="@/assets/curso/temas/tema_1/img_7.png", class="img-fluid")
          
          .flex-grow-1.ms-md-3.ms-0
            p.mb-3 Reduce la pérdida de vitaminas sensibles para minimizar el deterioro nutricional.
            p 
              strong Ejemplo: 
              | usar tratamientos térmicos suaves para mantener la vitamina C.
      
      .tarjeta.color-adicional-1(x="73.1%" y="26.4%" numero="")
        .h5.mb-2 Inhibición microbiana
        .d-flex.flex-md-row.flex-column
          .flex-shrink-0.mb-md-0.mb-3.d-flex.align-items-center.justify-content-center
            img(src="@/assets/curso/temas/tema_1/img_8.png", class="img-fluid")
          
          .flex-grow-1.ms-md-3.ms-0
            p.mb-3 Detiene el crecimiento de levaduras, mohos y bacterias usando calor, frío, sal, azúcar o vinagre.
            p 
              strong Ejemplo: 
              | escaldar espinacas y encurtir posteriormente.
      
      .tarjeta.color-adicional-1(x="69.2%" y="51.2%" numero="")
        .h5.mb-2 Inactivación enzimática
        .d-flex.flex-md-row.flex-column
          .flex-shrink-0.mb-md-0.mb-3.d-flex.align-items-center.justify-content-center
            img(src="@/assets/curso/temas/tema_1/img_9.png", class="img-fluid")
          
          .flex-grow-1.ms-md-3.ms-
            p.mb-3 Detiene la acción de enzimas que provocan pardeamiento o cambios de sabor.
            p 
              strong Ejemplo: 
              | escaldar espinacas antes del enlatado para preservar el color.
      
      .tarjeta.color-adicional-1.pulso-invertido(x="60.7%" y="78%" numero="")
        .h5.mb-2 Preservación de nutrientes
        .d-flex.flex-md-row.flex-column
          .flex-shrink-0.mb-md-0.mb-3.d-flex.align-items-center.justify-content-center
            img(src="@/assets/curso/temas/tema_1/img_10.png", class="img-fluid")
          .flex-grow-1.ms-md-3.ms- 
            p.mb-3 Reduce la pérdida de vitaminas sensibles para minimizar el deterioro nutricional.
            p 
              strong Ejemplo: 
              | usar tratamientos térmicos suaves para mantener la vitamina C.

    img(src="@/assets/curso/temas/tema_1/img_11.png", class="img-fluid")

    separador

    #t_1_2.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 1.2 Factores
    .mb-3

    p.mb-3 Existen diversos factores que influyen en la eficacia y selección del método de conservación de frutas y verduras. Su adecuada evaluación permite elegir el proceso más efectivo para garantizar productos seguros, estables y de calidad:
    
    .bloque-texto-t.justify-content-center.align-items-center.mb-0
      .bloque-texto-t__img.mb-0
        img(src='@/assets/curso/temas/tema_1/img_18.png')
      .bloque-texto-t__texto.color-acento-contenido-10.col-10.mb-0
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
