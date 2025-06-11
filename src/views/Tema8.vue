<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 8
      h1 Valor agregado, mejora e innovación
      
    .row.d-flex.align-items-stretch.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-8
        .cajon.color-secundario-b.p-4
          p Incorporar valor añadido a los productos en conserva es una estrategia fundamental para destacarlos en mercados especializados y lograr una mayor rentabilidad. Esta valorización no solo responde a las exigencias del consumidor moderno, que busca calidad, salud y sostenibilidad, sino que también abre la puerta a nuevas oportunidades comerciales. El valor agregado puede manifestarse a través de la implementación de tecnologías avanzadas, la utilización de ingredientes únicos o la creación de empaques ecológicos y funcionales.
      .col-6.col-lg-4.d-flex
        figure.w-100.d-flex.flex-column
          img(src='@/assets/curso/temas/tema_8/img_1.png', class="img-fluid").height-100

    separador

    #t_8_1.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 8.1 Aportes de valor al producto de conserva
    .mb-3
    
    .bg_img_16.mb-3
      p.mb-3 Existen diversas vías para enriquecer el atractivo y la calidad de las conservas:

      .row.justify-content-center.align-items-center.mb-5  
        .col-4.col-lg-4.mb-lg-0.mb-3.ps-3
          figure
            img(src="@/assets/curso/temas/tema_8/img_2.png", class="img-fluid")           
        .col-12.col-lg-8.p-0
          .custom-slider.p-4.p-sm-3
            SlyderF(columnas="col-12 col-sm-6 col-md-6 col-lg-6").p-3.rounded-3
              .tarjeta.color-acento-contenido-10-b
                .tarjeta--18
                .tarjeta--slider__title.mb-3 Incorporación  de frutas autóctonas o exóticas
                .tarjeta--slider__content Utilizar variedades locales o poco comunes aporta exclusividad y autenticidad, además de promover el desarrollo regional y la biodiversidad.
              .tarjeta.color-acento-contenido-10-b
                .tarjeta--19
                .tarjeta--slider__title.mb-3 Embalajes ecoamigables
                .tarjeta--slider__content Optar por envases biodegradables, compostables o reutilizables no solo reduce el impacto ambiental, sino que también conecta con el consumidor consciente, mejorando la imagen de marca.
              .tarjeta.color-acento-contenido-10-b
                .tarjeta--20
                .tarjeta--slider__title.mb-3 Atributos funcionales añadidos
                .tarjeta--slider__content La inclusión de componentes beneficiosos para la salud, como antioxidantes naturales, versiones sin azúcar o con ingredientes bajos en sodio, amplía el público objetivo, especialmente entre quienes buscan opciones saludables.
              .tarjeta.color-acento-contenido-10-b
                .tarjeta--21
                .tarjeta--slider__title.mb-3 Presentaciones diferenciadas
                .tarjeta--slider__content Formatos gourmet, porciones listas para consumir o empaques con diseños atractivos y prácticos aumentan la conveniencia y la percepción de calidad.

    separador

    #t_8_2.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 8.2 Propuestas innovadoras
    .mb-3

    p.mb-3 La innovación es un motor clave para mantenerse competitivo y relevante en el mercado. Algunas propuestas aplicables incluyen:

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-secundario-20.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema_8/img_7.svg', alt='Texto que describa la imagen')
          
        h2.text-center Conservas sin azúcar añadido
        p Diseñadas para personas con restricciones dietéticas, diabéticos o quienes prefieren reducir su ingesta calórica, estas opciones amplían la accesibilidad del producto.
      .col-md.tarjeta.color-secundario-10.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema_8/img_8.svg', alt='Texto que describa la imagen')
          
        h2.text-center Combinaciones creativas de sabores 
        p La mezcla de frutas con especias o ingredientes aromáticos, como piña con jengibre o mango con ají, aporta perfiles sensoriales únicos que pueden diferenciar la oferta.
      .col-md.tarjeta.color-secundario-20.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema_8/img_9.svg', alt='Texto que describa la imagen')
          
        h2.text-center Aplicación de tecnologías emergentes
        p Técnicas como el ultrasonido, microondas o la presión alta pueden optimizar procesos, mejorar la conservación de nutrientes y prolongar la vida útil sin comprometer la calidad.


    separador

    #t_8_3.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 8.3 Normatividad y etiquetado
    .mb-3

    p.mb-3  Para garantizar la seguridad y confianza del consumidor, los productos en conserva deben cumplir con las normativas vigentes, tanto nacionales como internacionales. En Colombia, la Resolución 2674 de 2013 del INVIMA establece los requisitos obligatorios para estos productos, alineados con los lineamientos del Codex Alimentarius.
    p.mb-3 Los elementos esenciales del etiquetado incluyen:
     
    .row.d-flex.align-items-stretch.justify-content-center.align-items-center.mb-3
      .col-12.col-lg-7.order-2.order-lg-1.mb-lg-0.mb-3
        LineaTiempoD.color-adicional-3
          .row(numero="1" titulo="Nombre comercial del producto")
            .col-md-6.mb-4.mb-md-0
              p.text-small El nombre del producto debe ser claramente visible, legible y representar fielmente el contenido. Es fundamental que sea atractivo y fácil de identificar para el consumidor. Un buen nombre facilita el reconocimiento de marca y puede incluir descriptores que indiquen la variedad o características especiales, como “Conserva de mango orgánico” o “Mermelada gourmet sin azúcar”.
          .row(numero="2" titulo="Lista completa de ingredientes")
            .col-md-6.mb-4.mb-md-0
              p.text-small Debe incluirse el detalle completo de todos los ingredientes usados en la elaboración, ordenados de mayor a menor proporción. Esto garantiza transparencia y permite a los consumidores conocer exactamente qué están consumiendo, útil especialmente para personas con alergias o restricciones dietarías. Además, puede incluir indicación de aditivos o conservantes usados.
          .row(numero="3" titulo="Información nutricional")
            .col-md-6.mb-4.mb-md-0
              p.text-small Esta sección debe contener datos como valor energético (calorías), cantidad de macronutrientes (grasas, carbohidratos y proteínas), y otros nutrientes relevantes (fibra, sodio, azúcares, vitaminas, entre otros). Es esencial para que el consumidor pueda tomar decisiones informadas, especialmente aquellos que cuidan su salud o siguen dietas específicas.
          .row(numero="4" titulo="Registro sanitario y número de lote")
            .col-md-6.mb-4.mb-md-0
              p.text-small El registro sanitario es un código que certifica que el producto cumple con los requisitos legales y sanitarios, otorgado por la autoridad competente (como INVIMA en Colombia). El número de lote permite identificar el grupo de producción, esencial para la trazabilidad en caso de reclamos o retiros del mercado.
          .row(numero="5" titulo="Fecha de vencimiento o consumo preferente")
            .col-md-6.mb-4.mb-md-0
              p.text-small Esta fecha indica el periodo durante el cual el producto mantiene sus características óptimas de calidad y seguridad para el consumo. Es fundamental para evitar riesgos alimentarios y garantizar una experiencia satisfactoria al consumidor.
      .col-7.col-lg-5.order-1.order-lg-2.mb-lg-0.mb-3.d-flex
        figure.w-100.d-flex.flex-column
         img(src='@/assets/curso/temas/tema_8/img_10.png', class="img-fluid").height-100
</template>

<script>
export default {
  name: 'Tema8',
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
