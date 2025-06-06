<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Elaboración de conservas
    .bloque-texto-t.justify-content-center.align-items-center.mb-0
      .bloque-texto-t__img.mb-0
        img(src='@/assets/curso/temas/tema_5/img_1.png')
      .bloque-texto-t__texto.color-acento-contenido-10.col-10.mb-0
        p.mb-0 La elaboración de conservas a partir de frutas y verduras combina técnicas tradicionales y avances tecnológicos para garantizar productos seguros, estables y con alta aceptación por el consumidor. El éxito de este proceso depende de la correcta selección de ingredientes, la aplicación de técnicas térmicas adecuadas y el control de las condiciones sanitarias. A continuación, se describen los principales tipos de conservas y sus características.

    separador

    #t_5_1.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 5.1 Conservas en almíbar, mermeladas y jaleas
    .mb-3

    .row.justify-content-center.align-items-center.mb-3
      .col-12.col-lg-8
        p.mb-3 Las conservas dulces representan una de las formas más antiguas y eficaces para preservar frutas. Gracias a la acción del azúcar como conservante natural, se logra disminuir la actividad del agua en el alimento, impidiendo el desarrollo de microorganismos. Además, estas conservas realzan el sabor, color y textura de las frutas, transformándolas en productos de alto valor agregado.
        p Se distinguen principalmente tres tipos: frutas en almíbar, mermeladas y jaleas, cada uno con características propias en cuanto a ingredientes, técnica de preparación, textura final y forma de presentación.
      .col-12.col-lg-4
        figure
          img(src="@/assets/curso/temas/tema_5/img_2.png", class="img-fluid")
    
    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--color-adicional-5-6")
      div(titulo="FRUTAS EN ALMÍBAR").p-5.pb-0.pt-0
        p.mb-3 Este tipo de conserva se caracteriza por mantener trozos enteros o fraccionados de fruta suspendidos en un jarabe dulce. Se busca conservar la estructura de la fruta y mejorar su sabor y aspecto. Pasos para la elaboración:
        .row.justify-content-center.align-items-center.mb-3
          .col-3.col-lg-5
            figure
              img(src="@/assets/curso/temas/tema_5/img_3.png", class="img-fluid")
          .col-12.col-lg-7
            p.mb-3 <b>1. Selección de materia prima:</b> frutas como duraznos, peras, piña o mango deben estar maduras pero firmes, sin golpes ni signos de deterioro.
            p.mb-3 <b>2. Lavado y troceado:</b> las frutas se lavan con agua potable y se cortan en mitades, rodajas o cubos según la presentación deseada.
            p.mb-3 <b>3. Escaldado:</b> tratamiento térmico breve (1-5 minutos) en agua caliente para ablandar ligeramente la fruta, intensificar el color y reducir microorganismos.
        .row.justify-content-center.align-items-center.mb-3
          .col-12.col-lg-7
            p.mb-3 <b>4. Preparación del almíbar: </b> el jarabe se elabora disolviendo azúcar en agua caliente. Su concentración varía según el tipo de producto final:
            ul.mb-3
              li
                i.fa-solid.fa-circle-check(style="color: #8C492A; font-size: 15px").mb-0
                | 	<b>Ligero:</b> 20-30% de azúcar
              li
                i.fa-solid.fa-circle-check(style="color: #8C492A; font-size: 15px").mb-0
                | 	<b>Medio:</b> 35-40%
              li
                i.fa-solid.fa-circle-check(style="color: #8C492A; font-size: 15px").mb-0
                | 	<b>Espeso:</b> 50% o más
            p.mb-3 <b>5.	Llenado y tratamiento térmico:</b> se introducen las frutas en frascos de vidrio esterilizados, se cubren con almíbar caliente y se sellan. Finalmente, se realiza pasteurización al baño maría para asegurar la conservación.
          .col-3.col-lg-5
            figure.p-2.pt-0.ps-0.pb-4 
              img(src="@/assets/curso/temas/tema_5/img_4.png", class="img-fluid")
      div(titulo="MERMELADAS").p-5.pb-0.pt-0
        p.mb-3 La mermelada es una mezcla semisólida de frutas troceadas y cocidas con azúcar hasta lograr una textura untable. Su preparación implica concentración, lo que reduce el contenido de agua y estabiliza el producto. Pasos clave:
        .row.justify-content-center.align-items-center.mb-3
          .col-3.col-lg-5
            figure.p-2.pt-0.ps-0.pb-4 
              img(src="@/assets/curso/temas/tema_5/img_5.png", class="img-fluid")
          .col-12.col-lg-7
            p.mb-3 <b>1. Preparación de la fruta:</b> lavar, pelar y picar frutas como fresa, mora, guayaba, o mango. Algunas pueden requerir eliminación de semillas.
            p.mb-3 <b>2. Adición de azúcar y cocción:</b> se añade azúcar en una proporción del 60-65% respecto al peso de la fruta. La mezcla se cocina a fuego medio con agitación constante.
            p.mb-3 <b>3. Incorporación de pectina y ácido:</b>
            ul.mb-3
              li
                i.fa-solid.fa-circle-check(style="color: #8C492A; font-size: 15px").mb-0
                |  	La pectina, natural (de la misma fruta) o comercial, permite obtener una consistencia firme.
              li
                i.fa-solid.fa-circle-check(style="color: #8C492A; font-size: 15px").mb-0
                | 	El ácido cítrico (limón) mejora la gelificación y conservación.
        .row.justify-content-center.align-items-center.mb-3
          .col-12.col-lg-7
            p.mb-3 <b>4. Control del punto de mermelada:</b>
            p.mb-3 se verifica con pruebas tradicionales:
            ul.mb-3
              li
                i.fa-solid.fa-circle-check(style="color: #8C492A; font-size: 15px").mb-0
                |  	Gota sobre un plato frío (no debe deslizarse)
              li
                i.fa-solid.fa-circle-check(style="color: #8C492A; font-size: 15px").mb-0
                | 	Gota en agua fría (forma una bola y no se desintegra)
            p.mb-3 <b>5. Envasado y pasteurización:</b> se llena en caliente en envases esterilizados, se sella y se pasteuriza para prolongar la vida útil.
          .col-3.col-lg-5
            figure.p-2.pt-0.ps-0.pb-4 
              img(src="@/assets/curso/temas/tema_5/img_6.png", class="img-fluid")
      div(titulo="JALEAS").p-5.pb-0.pt-0
        p.mb-3 La jalea es una conserva transparente y gelatinosa, elaborada a partir del jugo filtrado de frutas ricas en pectina. Su consistencia y apariencia cristalina la diferencian de las mermeladas. Pasos del proceso:
        .row.justify-content-center.align-items-center.mb-3
          .col-3.col-lg-5
            figure.p-2.pt-0.ps-0.pb-4 
              img(src="@/assets/curso/temas/tema_5/img_7.png", class="img-fluid")
          .col-12.col-lg-7
            p.mb-3 <b>1. Obtención del jugo:</b> las frutas (manzana, guayaba, uva, membrillo, entre otras) se cocinan con poca agua y luego se filtra el jugo con un paño de muselina sin presionar, para evitar turbidez.
            p.mb-3 <b>2. Formulación:</b> se mezcla el jugo con azúcar (proporción 1:1) y ácido cítrico si es necesario para mejorar la gelificación.
            p.mb-3 <b>3. Cocción controlada:</b> la mezcla se lleva a ebullición hasta alcanzar el punto de jalea (105°C o prueba del plato).
            p.mb-3 <b>4. Envasado y conservación:</b> se vierte la jalea caliente en frascos de vidrio esterilizados, se sella y se realiza tratamiento térmico (pasteurización).

    separador

    #t_5_2.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 5.2 Vegetales en salmuera, encurtidos y agridulces
    .mb-3

    .row.justify-content-center.align-items-center.mb-3
      .col-12.col-lg-7
        p.mb-3 La conservación de vegetales mediante soluciones ácidas o salinas es una práctica ancestral que, con el paso del tiempo, ha evolucionado incorporando criterios de inocuidad, valor nutricional y presentación comercial. Este tipo de conservas permite preservar la textura, el color y el sabor característico de los vegetales, además de prolongar su vida útil sin necesidad de refrigeración constante.
        p Dependiendo del líquido de cobertura y los ingredientes adicionales, se distinguen tres métodos principales: salmuera, encurtido y agridulce. Cada uno responde a un perfil de sabor y una aplicación diferente en la gastronomía y el mercado.
      .col-3.col-lg-5
        figure.p-2.pt-0.ps-0.pb-4 
          img(src="@/assets/curso/temas/tema_5/img_8.png", class="img-fluid")
    
    h3(data-aos='zoom-in-right').mb-4
      span.label-title.label-title--1 VEGETALES EN SALMUERA
    
    p.mb-3 La salmuera es una solución acuosa de sal común (cloruro de sodio) que inhibe el desarrollo de microorganismos mediante la reducción de la actividad del agua. Este método conserva la frescura de los vegetales y mejora su textura gracias al efecto osmótico de la sal. 
    p.mb-3 Pasos para la elaboración:
    .row.justify-content-center.align-items-center.mb-3
      .col-6.col-lg-4
        figure.p-2.pt-0.ps-0.pb-4 
          img(src="@/assets/curso/temas/tema_5/img_9.png", class="img-fluid")
      .col-12.col-lg-8

    p.mb-3 Resultado esperado: vegetales crujientes, salados y estables por varios meses en condiciones adecuadas.
    
    h3(data-aos='zoom-in-right').mb-4
      span.label-title.label-title--1 ENCURTIDOS

    p.mb-3 El encurtido consiste en la conservación de vegetales en vinagre, un ácido natural que actúa como barrera contra bacterias y hongos. Además de prolongar la vida útil, esta técnica proporciona un sabor ácido característico y permite la incorporación de especias para personalizar el perfil aromático del producto.
    p.mb-3 Pasos para la elaboración:

    h3(data-aos='zoom-in-right').mb-4
      span.label-title.label-title--1 VEGETALES AGRIDULCES

    p.mb-3 Las conservas agridulces combinan azúcar, sal y vinagre para lograr un balance de sabores que resulta agradable al paladar. Este método es muy apreciado en cocina gourmet y platos étnicos por su perfil aromático y su versatilidad.
    p.mb-3 Pasos para la elaboración:

    separador

    #t_5_3.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 5.3 Líquidos de cobertura
    .mb-3
    
    .row.justify-content-center.align-items-center.mb-3
      .col-6.col-lg-4
        figure.p-2.pt-0.ps-0.pb-4 
          img(src="@/assets/curso/temas/tema_5/img_16.png", class="img-fluid")
      .col-12.col-lg-8
        p.mb-3 Los líquidos de cobertura desempeñan un papel fundamental en la conservación de frutas y verduras procesadas. Estas soluciones líquidas no solo cumplen una función técnica al proteger el alimento del deterioro, sino que también aportan cualidades organolépticas (sabor, aroma y textura) que enriquecen la experiencia del consumidor final. 
        p Son aplicados inmediatamente después del llenado del envase, en estado caliente, para facilitar la expulsión del oxígeno, garantizar un sellado hermético y permitir una adecuada distribución del líquido entre los sólidos. Entre sus funciones principales:
    .row.justify-content-center.align-items-center.mb-3
      .col-12.col-lg-8
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--color-adicional-5-6")
          div(titulo="Desplazar el oxígeno del envase")
            p.mb-0
          div(titulo="Transferir sabor y aroma")
            p.mb-0
          div(titulo="Mejorar la textura y apariencia del producto")
            p.mb-0
          div(titulo="Favorecer la estabilidad microbiológica")
            p.mb-0

      .col-5.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3
        figure
          img(src="@/assets/curso/temas/tema_5/img_18.png", class="img-fluid")           
    .row.justify-content-center.align-items-center.mb-3
      .col-4.col-lg-1
        figure
          img(src="@/assets/curso/temas/tema_5/img_19.svg", class="img-fluid")
      .col-12.col-lg-11
        p.mb-3 Existen diferentes tipos de líquidos de cobertura, cada uno diseñado para responder a las necesidades específicas del alimento a conservar. Su composición, acidez, dulzor o contenido de sal varía según el producto (frutas o vegetales), el método de conservación y el resultado deseado en sabor, textura y estabilidad.
        p A continuación, se presenta una tabla comparativa con los líquidos de cobertura más utilizados en la elaboración de conservas:
    .titulo-sexto.color-acento-contenido
      h5 Tabla 2.
      I(style="font-weight: normal;") Tipos de líquidos de cobertura
    .tabla-a.mb-5
      table
        caption 
          p <b>Fuente.</b>  SENA, 2025
        thead
          tr
            th Tipo
            th Composición básica
            th Usos típicos
            th Observaciones
        tbody
          tr
            td <b>Almíbar</b>
            td Agua + azúcar (30-50%)
            td Conservas de frutas (piña, durazno, pera, entre otros)
            td Puede incluir canela, clavos, limón, entre otros. Mejora sabor y apariencia.
          tr
            td <b>Salmuera</b>
            td Agua + sal (5-10%)
            td Verduras escaldadas (zanahoria y arveja)
            td Aporta firmeza. Puede llevar ácido ascórbico para mayor estabilidad.
          tr
            td <b>Vinagre</b>
            td Ácido acético al 5 % + agua
            td Encurtidos y vegetales agridulces
            td Se puede mezclar con especias y azúcar para crear perfiles agridulces.
    .row.justify-content-center.align-items-center.mb-3
      .col-12.col-lg-10
        .cajon.color-acento-contenido-10-Mix-secundario.p-4
          p Siempre que se usen líquidos de cobertura, se deben aplicar calientes y verificar que: cubran completamente el alimento, no queden burbujas atrapadas en el frasco y esté correctamente sellado para evitar recontaminación.
</template>

<script>
export default {
  name: 'Tema5',
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
