<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Elaboración de conservas
    .bg_img_9.mb-3
      .bloque-texto-t.justify-content-center.align-items-center.mb-0
        .bloque-texto-t__img.mb-0
          img(src='@/assets/curso/temas/tema_5/img_1.png')
        .bloque-texto-t__texto.color-secundario-10.col-10.mb-0
          p.mb-0 La elaboración de conservas a partir de frutas y verduras combina técnicas tradicionales y avances tecnológicos para garantizar productos seguros, estables y con alta aceptación por el consumidor. El éxito de este proceso depende de la correcta selección de ingredientes, la aplicación de técnicas térmicas adecuadas y el control de las condiciones sanitarias. A continuación, se describen los principales tipos de conservas y sus características.

    separador

    #t_5_1.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 5.1 Conservas en almíbar, mermeladas y jaleas
    .mb-3

    .row.d-flex.align-items-stretch.justify-content-center.align-items-center.mb-3
      .col-12.col-lg-8.order-2.order-lg-1
        p.mb-3 Las conservas dulces representan una de las formas más antiguas y eficaces para preservar frutas. Gracias a la acción del azúcar como conservante natural, se logra disminuir la actividad del agua en el alimento, impidiendo el desarrollo de microorganismos. Además, estas conservas realzan el sabor, color y textura de las frutas, transformándolas en productos de alto valor agregado.
        p.mb-0 Se distinguen principalmente tres tipos: frutas en almíbar, mermeladas y jaleas, cada uno con características propias en cuanto a ingredientes, técnica de preparación, textura final y forma de presentación.
      .col-6.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3.d-flex
        figure.w-100.d-flex.flex-column
          img(src="@/assets/curso/temas/tema_5/img_2.png", class="img-fluid").height-100

    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--color-adicional-5-6")
      div(titulo="FRUTAS EN ALMÍBAR").p-5.pb-0.pt-0
        p.mb-3 Este tipo de conserva se caracteriza por mantener trozos enteros o fraccionados de fruta suspendidos en un jarabe dulce. Se busca conservar la estructura de la fruta y mejorar su sabor y aspecto. Pasos para la elaboración:
        .row.d-flex.align-items-stretch.justify-content-center.align-items-center.mb-4
          .col-7.col-lg-5.mb-lg-0.mb-3.d-flex
            figure.w-100.d-flex.flex-column
              img(src="@/assets/curso/temas/tema_5/img_3.png", class="img-fluid").height-100
          .col-12.col-lg-7
            p.mb-3 <b>1. Selección de materia prima:</b> frutas como duraznos, peras, piña o mango deben estar maduras pero firmes, sin golpes ni signos de deterioro.
            p.mb-3 <b>2. Lavado y troceado:</b> las frutas se lavan con agua potable y se cortan en mitades, rodajas o cubos según la presentación deseada.
            p.mb-0 <b>3. Escaldado:</b> tratamiento térmico breve (1-5 minutos) en agua caliente para ablandar ligeramente la fruta, intensificar el color y reducir microorganismos.
        .row.d-flex.align-items-stretch.justify-content-center.align-items-center.mb-0
          .col-12.col-lg-7.order-2.order-lg-1
            p.mb-3 <b>4. Preparación del almíbar: </b> el jarabe se elabora disolviendo azúcar en agua caliente. Su concentración varía según el tipo de producto final:
            ul.mb-3
              li.mb-0.d-flex.align-items-start
                i.fa-solid.fa-circle-check.me-2(style="color: #8C492A; font-size: 16px; margin-top: 4px;")
                span(style="line-height: 1.5") 	<b>Ligero:</b> 20-30 % de azúcar.
              li.mb-0.d-flex.align-items-start
                i.fa-solid.fa-circle-check.me-2(style="color: #8C492A; font-size: 16px; margin-top: 4px;")
                span(style="line-height: 1.5") 	<b>Medio:</b> 35-40 %.
              li.mb-0.d-flex.align-items-start
                i.fa-solid.fa-circle-check.me-2(style="color: #8C492A; font-size: 16px; margin-top: 4px;")
                span(style="line-height: 1.5") 	<b>Espeso:</b> 50 % o más.
            p.mb-3 <b>5.	Llenado y tratamiento térmico:</b> se introducen las frutas en frascos de vidrio esterilizados, se cubren con almíbar caliente y se sellan. Finalmente, se realiza pasteurización al baño maría para asegurar la conservación.
          .col-7.col-lg-5.order-1.order-lg-2.mb-lg-0.mb-3.d-flex
            figure.w-100.d-flex.flex-column.p-2.pt-0.ps-0.pb-4 
              img(src="@/assets/curso/temas/tema_5/img_4.png", class="img-fluid").height-100
      div(titulo="MERMELADAS").p-5.pb-0.pt-0
        p.mb-3 La mermelada es una mezcla semisólida de frutas troceadas y cocidas con azúcar hasta lograr una textura untable. Su preparación implica concentración, lo que reduce el contenido de agua y estabiliza el producto. Pasos clave:
        .row.d-flex.align-items-stretch.justify-content-center.align-items-center.mb-4
          .col-7.col-lg-5.mb-lg-0.mb-3.d-flex
            figure.w-100.d-flex.flex-column.p-2.pt-0.ps-0.pb-4 
              img(src="@/assets/curso/temas/tema_5/img_5.png", class="img-fluid").height-100
          .col-12.col-lg-7
            p.mb-3 <b>1. Preparación de la fruta:</b> lavar, pelar y picar frutas como fresa, mora, guayaba, o mango. Algunas pueden requerir eliminación de semillas.
            p.mb-3 <b>2. Adición de azúcar y cocción:</b> se añade azúcar en una proporción del 60-65 % respecto al peso de la fruta. La mezcla se cocina a fuego medio con agitación constante.
            p.mb-3 <b>3. Incorporación de pectina y ácido:</b>
            ul.mb-3
              li.mb-0.d-flex.align-items-start
                i.fa-solid.fa-circle-check.me-2(style="color: #8C492A; font-size: 16px; margin-top: 4px;")
                span(style="line-height: 1.5") 	La pectina, natural (de la misma fruta) o comercial, permite obtener una consistencia firme.
              li.mb-0.d-flex.align-items-start
                i.fa-solid.fa-circle-check.me-2(style="color: #8C492A; font-size: 16px; margin-top: 4px;")
                span(style="line-height: 1.5") 	El ácido cítrico (limón) mejora la gelificación y conservación.
        .row.d-flex.align-items-stretch.justify-content-center.align-items-center.mb-0
          .col-12.col-lg-7.order-2.order-lg-1
            p.mb-0 <b>4. Control del punto de mermelada:</b>
            p.mb-3 se verifica con pruebas tradicionales:
            ul.mb-3
              li.mb-0.d-flex.align-items-start
                i.fa-solid.fa-circle-check.me-2(style="color: #8C492A; font-size: 16px; margin-top: 4px;")
                span(style="line-height: 1.5") 	Gota sobre un plato frío (no debe deslizarse).
              li.mb-0.d-flex.align-items-start
                i.fa-solid.fa-circle-check.me-2(style="color: #8C492A; font-size: 16px; margin-top: 4px;")
                span(style="line-height: 1.5") 	Gota en agua fría (forma una bola y no se desintegra).
            p.mb-3 <b>5. Envasado y pasteurización:</b> se llena en caliente en envases esterilizados, se sella y se pasteuriza para prolongar la vida útil.
          .col-7.col-lg-5.order-1.order-lg-2.mb-lg-0.mb-3.d-flex
            figure.w-100.d-flex.flex-column.p-2.pt-0.ps-0.pb-4 
              img(src="@/assets/curso/temas/tema_5/img_6.png", class="img-fluid").height-100
      div(titulo="JALEAS").p-5.pb-0.pt-0
        p.mb-3 La jalea es una conserva transparente y gelatinosa, elaborada a partir del jugo filtrado de frutas ricas en pectina. Su consistencia y apariencia cristalina la diferencian de las mermeladas. Pasos del proceso:
        .row.d-flex.align-items-stretch.justify-content-center.align-items-center.mb-3
          .col-7.col-lg-5.mb-lg-0.mb-3.d-flex
            figure.w-100.d-flex.flex-column.p-2.pt-0.ps-0.pb-4 
              img(src="@/assets/curso/temas/tema_5/img_7.png", class="img-fluid").height-100
          .col-12.col-lg-7
            p.mb-3 <b>1. Obtención del jugo:</b> las frutas (manzana, guayaba, uva, membrillo, entre otras) se cocinan con poca agua y luego se filtra el jugo con un paño de muselina sin presionar, para evitar turbidez.
            p.mb-3 <b>2. Formulación:</b> se mezcla el jugo con azúcar (proporción 1:1) y ácido cítrico si es necesario para mejorar la gelificación.
            p.mb-3 <b>3. Cocción controlada:</b> la mezcla se lleva a ebullición hasta alcanzar el punto de jalea (105 °C o prueba del plato).
            p.mb-3 <b>4. Envasado y conservación:</b> se vierte la jalea caliente en frascos de vidrio esterilizados, se sella y se realiza tratamiento térmico (pasteurización).

    separador

    #t_5_2.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 5.2 Vegetales en salmuera, encurtidos y agridulces
    .mb-3

    .row.d-flex.align-items-stretch.justify-content-center.align-items-center.mb-3
      .col-12.col-lg-7.order-2.order-lg-1
        p.mb-3 La conservación de vegetales mediante soluciones ácidas o salinas es una práctica ancestral que, con el paso del tiempo, ha evolucionado incorporando criterios de inocuidad, valor nutricional y presentación comercial. Este tipo de conservas permite preservar la textura, el color y el sabor característico de los vegetales, además de prolongar su vida útil sin necesidad de refrigeración constante.
        p Dependiendo del líquido de cobertura y los ingredientes adicionales, se distinguen tres métodos principales: salmuera, encurtido y agridulce. Cada uno responde a un perfil de sabor y una aplicación diferente en la gastronomía y el mercado.
      .col-7.col-lg-5.order-1.order-lg-2.mb-lg-0.mb-3.d-flex
        figure.w-100.d-flex.flex-column
          img(src="@/assets/curso/temas/tema_5/img_8.png", class="img-fluid").height-100

    h3(data-aos='zoom-in-right').mb-4
      span.label-title.label-title--1 VEGETALES EN SALMUERA

    p.mb-3 La salmuera es una solución acuosa de sal común (cloruro de sodio) que inhibe el desarrollo de microorganismos mediante la reducción de la actividad del agua. Este método conserva la frescura de los vegetales y mejora su textura gracias al efecto osmótico de la sal. 
    p.mb-3 Pasos para la elaboración:
    .row.d-flex.align-items-stretch.justify-content-center.align-items-center.mb-3
      .col-6.col-lg-4.mb-lg-0.mb-3.d-flex
        figure.w-100.d-flex.flex-column
          img(src="@/assets/curso/temas/tema_5/img_9.png", class="img-fluid").height-100
      .col-12.col-lg-8
        ul.lista-ul--numerada
          li
            span.numero 1
            |  Selección de vegetales frescos y sanos: zanahoria, coliflor, habichuela, arvejas y maíz tierno son los más utilizados.
          li
            span.numero 2 
            |  Lavado y corte: los vegetales se lavan cuidadosamente, se pelan (si aplica) y se cortan de forma uniforme (cubos, bastones, rodajas). 
          li
            span.numero 3 
            |  Escaldado: se someten a una cocción breve en agua hirviendo (2 a 5 minutos) y luego se enfrían rápidamente para mantener el color y textura.
          li
            span.numero 4 
            |  Preparación de salmuera: se disuelve sal al 5-10 % en agua potable. Opcionalmente se puede agregar ácido ascórbico para mejorar la estabilidad.
          li
            span.numero 5  
            |  Llenado de frascos: los vegetales escaldados se introducen en frascos de vidrio esterilizados y se cubren completamente con la salmuera caliente.
          li
            span.numero 6  
            |  Pasteurización: se realiza un tratamiento térmico suave para garantizar seguridad microbiológica sin alterar la textura.

    p.mb-3 Resultado esperado: vegetales crujientes, salados y estables por varios meses en condiciones adecuadas.

    h3(data-aos='zoom-in-right').mb-4
      span.label-title.label-title--1 ENCURTIDOS

    p.mb-3 El encurtido consiste en la conservación de vegetales en vinagre, un ácido natural que actúa como barrera contra bacterias y hongos. Además de prolongar la vida útil, esta técnica proporciona un sabor ácido característico y permite la incorporación de especias para personalizar el perfil aromático del producto.
    p.mb-5 Pasos para la elaboración:

    .bg_img_10.mb-3
      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-8.mb-0.order-2.order-lg-1.p-0
          .custom-slider.p-4.p-sm-3
            SlyderF(columnas="col-12 col-sm-6 col-md-6 col-lg-6").p-3.rounded-3
              .tarjeta.color-adicional-2
                .tarjeta--13
                .tarjeta--slider__content Elección de vegetales: pepino cohombro, cebolla, zanahoria, coliflor y jalapeños son comunes.
              .tarjeta.color-adicional-2
                .tarjeta--14
                .tarjeta--slider__content Escaldado opcional: algunos vegetales (como zanahoria o coliflor) pueden requerir escaldado previo para ablandar ligeramente
              .tarjeta.color-adicional-2
                .tarjeta--15
                .tarjeta--slider__content Preparación del líquido de encurtido: se mezcla vinagre blanco o de manzana (acidez mínima del 5 %) con agua (en proporciones variables), sal, azúcar y especias al gusto (ajo, laurel, mostaza, clavos o pimienta).
              .tarjeta.color-adicional-2
                .tarjeta--16
                .tarjeta--slider__content Envasado: se agregan los vegetales en frascos esterilizados y se cubren con la solución aún caliente.
              .tarjeta.color-adicional-2
                .tarjeta--17
                .tarjeta--slider__content Pasteurización breve: se realiza un calentamiento leve (baño maría de 10-15 minutos) para garantizar la conservación.

        .col-4.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3.ps-3
          figure
            img(src="@/assets/curso/temas/tema_5/img_15.png", class="img-fluid").height-100          

    h3(data-aos='zoom-in-right').mb-4
      span.label-title.label-title--1 VEGETALES AGRIDULCES

    p.mb-3 Las conservas agridulces combinan azúcar, sal y vinagre para lograr un balance de sabores que resulta agradable al paladar. Este método es muy apreciado en cocina <I>gourmet</I> y platos étnicos por su perfil aromático y su versatilidad.
    p.mb-3 Pasos para la elaboración:
    .row.d-flex.align-items-stretch.justify-content-center.align-items-center.mb-3
      .col-12.col-lg-8.mb-lg-3.mb-0.order-2.order-lg-1
        ul.lista-ul--numerada
          li
            span.numero 1
            |  Selección de vegetales: pimientos rojos y amarillos, cebollitas perla, berenjenas y zanahorias son comunes.
          li
            span.numero 2 
            |  Escaldado y choque térmico: igual que en los otros métodos, para estabilizar color y textura
          li
            span.numero 3 
            |  Preparación del líquido agridulce: en una olla se mezclan partes iguales de agua y vinagre, se añade azúcar, sal, aceite y especias como canela, jengibre o clavos. Se lleva a ebullición.
          li
            span.numero 4 
            |  Envasado en caliente: los vegetales se colocan en frascos y se cubren con la solución agridulce aún caliente
          li
            span.numero 5  
            |  Pasteurización y enfriado controlado.
      .col-6.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3.d-flex
        figure.w-100.d-flex.flex-column
          img(src="@/assets/curso/temas/tema_5/img_16.png", class="img-fluid").height-100

    p.mb-0 Resultado esperado: productos con sabor contrastante, aptos para acompañar platos salados o servir como aperitivos.

    separador

    #t_5_3.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 5.3 Líquidos de cobertura
    .mb-3

    .row.d-flex.align-items-stretch.justify-content-center.align-items-center.mb-5
      .col-6.col-lg-4.mb-lg-0.mb-3.d-flex
        figure.w-100.d-flex.flex-column
          img(src="@/assets/curso/temas/tema_5/img_17.png", class="img-fluid").height-100
      .col-12.col-lg-8
        p.mb-3 Los líquidos de cobertura desempeñan un papel fundamental en la conservación de frutas y verduras procesadas. Estas soluciones líquidas no solo cumplen una función técnica al proteger el alimento del deterioro, sino que también aportan cualidades organolépticas (sabor, aroma y textura) que enriquecen la experiencia del consumidor final. 
        p Son aplicados inmediatamente después del llenado del envase, en estado caliente, para facilitar la expulsión del oxígeno, garantizar un sellado hermético y permitir una adecuada distribución del líquido entre los sólidos. Entre sus funciones principales:
    .row.d-flex.align-items-stretch.justify-content-center.align-items-center.mb-3
      .col-12.col-lg-8.order-2.order-lg-1
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--color-adicional-5-6")
          div(titulo="Desplazar el oxígeno del envase")
            ul
              li.mb-3.d-flex.align-items-start
                i.fa-solid.fa-circle-check.me-2(style="color: #8C492A; font-size: 16px; margin-top: 4px;")
                span(style="line-height: 1.5") 	La presencia de oxígeno puede provocar la oxidación de pigmentos y nutrientes, y favorecer el desarrollo de mohos o bacterias aeróbicas.
              li.mb-0.d-flex.align-items-start
                i.fa-solid.fa-circle-check.me-2(style="color: #8C492A; font-size: 16px; margin-top: 4px;")
                span(style="line-height: 1.5") 	El líquido caliente permite eliminar el aire atrapado y genera un entorno anaeróbico más seguro para el alimento.
          div(titulo="Transferir sabor y aroma")
            ul
              li.mb-3.d-flex.align-items-start
                i.fa-solid.fa-circle-check.me-2(style="color: #8C492A; font-size: 16px; margin-top: 4px;")
                span(style="line-height: 1.5") 	Los líquidos actúan como vehículo para especias, sales, azúcares y ácidos.
              li.mb-0.d-flex.align-items-start
                i.fa-solid.fa-circle-check.me-2(style="color: #8C492A; font-size: 16px; margin-top: 4px;")
                span(style="line-height: 1.5") 	Esto permite personalizar el perfil de sabor del producto, adaptarlo a diferentes mercados o resaltar características típicas (agridulce, picante, aromático, herbal, entre otros.).
          div(titulo="Mejorar la textura y apariencia del producto")
            p.mb-0
            ul.mb-3
              li.mb-3.d-flex.align-items-start
                i.fa-solid.fa-circle-check.me-2(style="color: #8C492A; font-size: 16px; margin-top: 4px;")
                span(style="line-height: 1.5") 	Ayudan a mantener los alimentos sumergidos y protegidos, evitando su deshidratación o contacto con el oxígeno.
              li.mb-0.d-flex.align-items-start
                i.fa-solid.fa-circle-check.me-2(style="color: #8C492A; font-size: 16px; margin-top: 4px;")
                span(style="line-height: 1.5") 	Realzan el brillo, color y apariencia del producto en exhibición (especialmente en frascos de vidrio).
          div(titulo="Favorecer la estabilidad microbiológica")
            ul.mb-3
              li.mb-0.d-flex.align-items-start
                i.fa-solid.fa-circle-check.me-2(style="color: #8C492A; font-size: 16px; margin-top: 4px;")
                span(style="line-height: 1.5") 	Según el tipo de líquido utilizado, se crea un ambiente ácido, salino o con baja actividad de agua, que limita la proliferación de microorganismos patógenos y alteradores.

      .col-5.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3.d-flex
        figure.w-100.d-flex.flex-column
          img(src="@/assets/curso/temas/tema_5/img_18.png", class="img-fluid").height-100  
    .row.justify-content-center.align-items-center.mb-3
      .col-4.col-lg-1.mb-lg-0.mb-3
        figure
          img(src="@/assets/curso/temas/tema_5/img_19.svg", class="img-fluid")
      .col-12.col-lg-11
        p.mb-3 Existen diferentes tipos de líquidos de cobertura, cada uno diseñado para responder a las necesidades específicas del alimento a conservar. Su composición, acidez, dulzor o contenido de sal varía según el producto (frutas o vegetales), el método de conservación y el resultado deseado en sabor, textura y estabilidad.
        p A continuación, se presenta una tabla comparativa con los líquidos de cobertura más utilizados en la elaboración de conservas:

    .bg_img_11.mb-3
      .titulo-sexto.color-acento-contenido
        h5 Tabla 2.
        |   Tipos de líquidos de cobertura
      .tabla-a.mb-5
        table
          caption 
            p <b>Fuente.</b>  SENA, 2025
          thead
            tr.text-white
              th Tipo
              th Composición básica
              th Usos típicos
              th Observaciones
          tbody
            tr
              td.bg-table-01 <b>Almíbar</b>
              td.bg-table-01 Agua + azúcar (30-50 %)
              td.bg-table-01 Conservas de frutas (piña, durazno, pera, entre otros)
              td.bg-table-01 Puede incluir canela, clavos, limón, entre otros. Mejora sabor y apariencia.
            tr
              td.bg-table-02 <b>Salmuera</b>
              td.bg-table-02 Agua + sal (5-10 %)
              td.bg-table-02 Verduras escaldadas (zanahoria y arveja)
              td.bg-table-02 Aporta firmeza. Puede llevar ácido ascórbico para mayor estabilidad.
            tr
              td.bg-table-01  <b>Vinagre</b>
              td.bg-table-01  Ácido acético al 5 % + agua
              td.bg-table-01  Encurtidos y vegetales agridulces
              td.bg-table-01  Se puede mezclar con especias y azúcar para crear perfiles agridulces.

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
