<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Procesos térmicos
    .row.d-flex.align-items-stretch.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-8.order-2.order-lg-1
        .tarjeta.color-acento-contenido-10.p-3.rounded-0(style="border-top-left-radius: 10px !important; border-bottom-right-radius: 10px !important;")
          p.mb-0 La aplicación del calor en los procesos de conservación representa una de las estrategias más eficaces para garantizar la inocuidad y estabilidad microbiológica de frutas y verduras en conserva. Los tratamientos térmicos bien diseñados permiten inactivar microorganismos patógenos, reducir la carga microbiana total y preservar el alimento sin alterar significativamente su calidad sensorial. La elección entre procesos como la pasteurización o la esterilización depende de factores clave como el pH del alimento, su acidez, el tipo de envase y la vida útil esperada. A continuación, se detallan los principales procedimientos térmicos empleados en la industria de las conservas vegetales.
      .col-6.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3.d-flex
        figure.w-100.d-flex.flex-column
          img(src="@/assets/curso/temas/tema_4/img_1.png", class="img-fluid").height-100

    separador

    #t_4_1.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 4.1 Parámetros de la pasteurización y su aplicación
    .mb-3  

    .bloque-texto-t.justify-content-center.align-items-center.mb-5
      .bloque-texto-t__img.mb-0
        img(src='@/assets/curso/temas/tema_4/img_2.png')
      .bloque-texto-t__texto.color-secundario-10.col-10.mb-0
        p.mb-0 La pasteurización consiste en someter los alimentos a temperaturas moderadas, generalmente entre 60 y 95°C, durante un tiempo controlado, con el fin de destruir microorganismos patógenos y reducir la carga microbiana sin comprometer las propiedades nutricionales y sensoriales del producto (Holdsworth & Simpson, 2008).
    
    .bg_img_6.mb-3.height-100
      .row.justify-content-center.align-items-center.mb-3
        .col-12.col-lg-8.order-2.order-lg-1
          p.mb-0 En el caso de frutas en almíbar, por ejemplo, se emplea una temperatura de 85°C durante 20 minutos, mientras que para mermeladas o jaleas el tiempo es menor, gracias a su alta concentración de azúcar. Este proceso se realiza comúnmente mediante baño María, hornos o túneles térmicos, y debe ejecutarse justo después del envasado para evitar la recontaminación. Un control riguroso de la temperatura interna del alimento es indispensable para asegurar la efectividad del tratamiento. 
        .col-6.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3
          figure
            img(src="@/assets/curso/temas/tema_4/img_3.png", class="img-fluid")
    
    h5.mb-3 ETAPAS DE LA PASTEURIZACIÓN EN CONSERVAS

    .bg_img_7.mb-3
      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-8.mb-0.order-2.order-lg-1.p-0
          .custom-slider.p-4.p-sm-3
            SlyderF(columnas="col-12 col-sm-6 col-md-6 col-lg-6").p-3.rounded-3
              .tarjeta.color-adicional-2
                .tarjeta--6
                .tarjeta--slider__title.mb-3 <b>Preparación del alimento</b>
                .tarjeta--slider__content Seleccionar frutas o verduras limpias, maduras y sanas. Pelar, trocear o procesar según la receta.
              .tarjeta.color-adicional-2
                .tarjeta--7
                .tarjeta--slider__title.mb-3 <b>Llenado del envase</b>
                .tarjeta--slider__content Colocar el alimento en frascos de vidrio o envases adecuados, añadiendo el líquido de cobertura caliente (almíbar ó salmuera).
              .tarjeta.color-adicional-2
                .tarjeta--8
                .tarjeta--slider__title.mb-3  <b>Cierre hermético</b>
                .tarjeta--slider__content Sellar con tapa metálica de seguridad o sistema de cierre compatible. Verificar que no haya fugas.
              .tarjeta.color-adicional-2
                .tarjeta--9
                .tarjeta--slider__title.mb-3 <b>Pasteurización</b>
                .tarjeta--slider__content Colocar los frascos en baño María o túnel térmico.
                ul.ps-3
                  li
                    i.fa-solid.fa-circle-check(style="color: #8C492A; font-size: 15px")
                    | 	Frutas en almíbar: 85°C x 20 min
                  li
                    i.fa-solid.fa-circle-check(style="color: #8C492A; font-size: 15px")
                    | 	Jaleas: 80°C x 10 min
                  li
                    i.fa-solid.fa-circle-check(style="color: #8C492A; font-size: 15px")
                    | 	Encurtidos: 90°C x 15 min
              .tarjeta.color-adicional-2
                .tarjeta--10
                .tarjeta--slider__title.mb-3 <b>Enfriamiento gradual</b>
                .tarjeta--slider__content Retirar los frascos y dejar enfriar sobre superficie limpia. Evitar corrientes de aire frío para prevenir choques térmicos.
              .tarjeta.color-adicional-2
                .tarjeta--11
                .tarjeta--slider__title.mb-3 <b>Revisión del vacío</b>
                .tarjeta--slider__content Verificar que la tapa se haya hundido correctamente (indicador de vacío). No debe hacer clic al presionar.
              .tarjeta.color-adicional-2
                .tarjeta--12
                .tarjeta--slider__title.mb-3 <b>Etiquetado y almacenamiento</b>
                .tarjeta--slider__content Colocar etiquetas con fecha, lote y nombre del producto. Almacenar en un lugar fresco, seco y oscuro.

        .col-4.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3.ps-3
          figure
            img(src="@/assets/curso/temas/tema_4/img_11.png", class="img-fluid")           

    separador

    #t_4_2.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 4.2 Esterilización y control microbiológico
    .mb-3  

    .bg_img_8
      img.mb-3(src="@/assets/curso/temas/tema_4/img_12.png", class="img-fluid")
    
      p.mb-3 La esterilización térmica es un proceso de conservación que aplica temperaturas superiores a 115°C con el objetivo de destruir microorganismos altamente resistentes al calor, incluidas sus formas esporuladas. Este tratamiento es especialmente crucial para alimentos de baja acidez (pH mayor a 4.5), donde existe riesgo de proliferación de patógenos peligrosos como Clostridium botulinum, responsable del botulismo, una intoxicación severa de origen alimentario (López-Malo et al., 2021).
      p.mb-3 Entre los aspectos técnicos de la esterilización térmica se encuentran:
    
    .tarjeta.tarjeta--fondo__slider.p-4.mb-0.pb-0
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-6.order-2.order-lg-1.mb-0
            h2 Métodos más utilizados
            p Equipos empleados según tipo y escala de producción.
            ul
              li
                i.fa-solid.fa-circle-check(style="color: #8C492A; font-size: 15px")
                |  	Producción a pequeña escala: olla a presión doméstica
              li
                i.fa-solid.fa-circle-check(style="color: #8C492A; font-size: 15px").mb-0
                | 	Procesamiento continuo: autoclave industrial
              li
                i.fa-solid.fa-circle-check(style="color: #8C492A; font-size: 15px").mb-0
                | 	Uso masivo en plantas: retorta de vapor o agua sobrecalentada 
          .col-7.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_4/img_13.png', class="img-fluid")

        .row.justify-content-center.align-items-center
          .col-12.col-lg-6.order-2.order-lg-1.mb-0
            h2 Condiciones estándar del proceso
            p Temperaturas, tiempos y valor F₀ recomendados para garantizar esterilidad.
            ul
              li
                i.fa-solid.fa-circle-check(style="color: #8C492A; font-size: 15px")
                |  	Temperatura: 121°C
              li
                i.fa-solid.fa-circle-check(style="color: #8C492A; font-size: 15px").mb-0
                | 	Tiempo: 15 minutos
              li
                i.fa-solid.fa-circle-check(style="color: #8C492A; font-size: 15px").mb-0
                | 	Valor F₀ típico: 3.0 para asegurar esterilidad en vegetales enlatados
            p <b>valor F₀</b> representa el tiempo equivalente de letalidad a 121,1°C requerido para asegurar la esterilidad comercial de un alimento. Este valor permite ajustar los parámetros del proceso térmico según el tipo de producto, el tamaño del envase y la carga microbiana inicial.
            p <b>Condiciones estándar:</b> se recomienda una temperatura de 121°C durante 15 minutos, lo que equivale a un <b>valor F₀ de 3.0</b> , suficiente para garantizar la destrucción de esporas de Clostridium botulinum en vegetales enlatados.
          .col-7.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_4/img_14.png', class="img-fluid")

        .row.justify-content-center.align-items-center
          .col-12.col-lg-6.order-2.order-lg-1.mb-0
            h2 Control microbiológico del tratamiento
            p Parámetros críticos, análisis previos y validación posterior del proceso.
            ul
              li
                i.fa-solid.fa-circle-check(style="color: #8C492A; font-size: 15px")
                |  	Registrar parámetros críticos: temperatura, presión y tiempo
              li
                i.fa-solid.fa-circle-check(style="color: #8C492A; font-size: 15px")
                | 	Verificar el pH antes del tratamiento (pH > 4.5 requiere esterilización)
              li
                i.fa-solid.fa-circle-check(style="color: #8C492A; font-size: 15px")
                | 	Realizar análisis microbiológicos postproceso para validar seguridad
          .col-7.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_4/img_15.png', class="img-fluid")

    separador

    #t_4_3.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 4.3 Higienización de envases y técnica de vacío
    .mb-3  
    
    p.mb-3 La limpieza y desinfección de los envases son pasos esenciales para garantizar la inocuidad del producto en conserva. El uso de frascos de vidrio, tapas metálicas o plásticas exige un procedimiento riguroso para evitar contaminación cruzada. Pasos sugeridos para higienización:
    
    TabsB.color-secundario-60.mb-5
      .py-4.py-md-5(
        titulo="Lavado inicial" 
        :icono="require('@/assets/curso/temas/tema_4/img_16.svg')"
        )
          .row.justify-content-center.align-items-center
            .col-12.col-lg-6.order-2.order-lg-1.mb-3.mb-lg-0
              h5.mb-3 Lavado inicial
              ul
                li.mb-3
                  i.fa-solid.fa-circle-check(style="color: #8C492A; font-size: 15px")
                  |  	Utiliza agua potable caliente para remover residuos visibles.
                li.mb-3
                  i.fa-solid.fa-circle-check(style="color: #8C492A; font-size: 15px")
                  |  	Aplica detergente neutro, preferiblemente sin fragancia ni colorante, para evitar contaminaciones químicas.
                li.mb-3
                  i.fa-solid.fa-circle-check(style="color: #8C492A; font-size: 15px")
                  |  	Usa esponjas suaves o cepillos exclusivos para utensilios de cocina.
                li.mb-0
                  i.fa-solid.fa-circle-check(style="color: #8C492A; font-size: 15px")
                  |  	Asegúrate de alcanzar todas las superficies del frasco: boca, rosca, fondo y paredes.
            .col-6.col-lg-4.order-1.order-lg-2.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema_4/img_20.png', class="img-fluid")
      .py-4.py-md-5(
        titulo="Enjuague y revisión" 
        :icono="require('@/assets/curso/temas/tema_4/img_17.svg')"
        )
          .row.justify-content-center.align-items-center
            .col-12.col-lg-6.order-2.order-lg-1.mb-3.mb-lg-0
              h5.mb-3 Enjuague y revisión
              ul
                li.mb-3
                  i.fa-solid.fa-circle-check(style="color: #8C492A; font-size: 15px")
                  | 	Enjuaga varias veces con agua potable para eliminar por completo el detergente.
                li.mb-0
                  i.fa-solid.fa-circle-check(style="color: #8C492A; font-size: 15px")
                  | 	Revisa cada envase: no deben tener fisuras, grietas o abolladuras. Las tapas deben cerrar de forma hermética y sin deformaciones.
            .col-6.col-lg-4.order-1.order-lg-2.mb-3.mb-lg-0
              figure
                  img(src='@/assets/curso/temas/tema_4/img_21.png', class="img-fluid")
      .py-4.py-md-5(
        titulo="Esterilización" 
        :icono="require('@/assets/curso/temas/tema_4/img_18.svg')"
        )
          .row.justify-content-center.align-items-center
            .col-12.col-lg-6.order-2.order-lg-1.mb-3.mb-lg-0
              h5.mb-3 Esterilización
              ul
                li.mb-3
                  i.fa-solid.fa-circle-check(style="color: #8C492A; font-size: 15px")
                  | 	Opción 1: inmersión en agua hirviendo durante 15-30 minutos. Utiliza una olla con rejilla para evitar el contacto directo con la base.
                li.mb-3
                  i.fa-solid.fa-circle-check(style="color: #8C492A; font-size: 15px")
                  | 	Opción 2: horno seco a 120°C por 10-15 minutos. Evita el sobrecalentamiento para no dañar los frascos o tapas plásticas.
                li.mb-0
                  i.fa-solid.fa-circle-check(style="color: #8C492A; font-size: 15px")
                  | 	Usa pinzas desinfectadas para manipular los envases calientes.
            .col-6.col-lg-4.order-1.order-lg-2.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema_4/img_22.png', class="img-fluid")
      .py-4.py-md-5(
        titulo="Secado" 
        :icono="require('@/assets/curso/temas/tema_4/img_19.svg')"
        )
          .row.justify-content-center.align-items-center
            .col-12.col-lg-6.order-2.order-lg-1.mb-3.mb-lg-0
              h5.mb-3 Secado
              ul
                li.mb-3
                  i.fa-solid.fa-circle-check(style="color: #8C492A; font-size: 15px")
                  | 	Coloca los envases sobre una superficie limpia y desinfectada, preferiblemente una rejilla de acero inoxidable o bandeja de vidrio.
                li.mb-3
                  i.fa-solid.fa-circle-check(style="color: #8C492A; font-size: 15px")
                  | 	Deja que se sequen al aire completamente. No uses paños, ya que pueden reintroducir microorganismos.
                li.mb-0
                  i.fa-solid.fa-circle-check(style="color: #8C492A; font-size: 15px")
                  | 	No manipules los envases una vez secos hasta el momento del llenado.
            .col-6.col-lg-4.order-1.order-lg-2.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema_4/img_23.png', class="img-fluid")

    .row.justify-content-center.align-items-center.mb-3
      .col-3.col-lg-1.mb-lg-0.mb-3
        figure
          img(src="@/assets/curso/temas/tema_4/img_24.png", class="img-fluid")
      .col-12.col-lg-11
        p Posterior al llenado en caliente, se aplica la técnica de vacío para extraer el aire del interior del envase, lo cual contribuye significativamente a mejorar la estabilidad, inocuidad y vida útil del alimento. Esta etapa es clave para prevenir el desarrollo de microorganismos y conservar las características sensoriales del producto. Entre sus beneficios más destacados se encuentran:
    
    .row.d-flex.align-items-stretch.justify-content-center.align-items-center.mb-3
      .col-12.col-lg-8.order-2.order-lg-1
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--color-adicional-5-6")
          div(titulo="Impide la oxidación y el oscurecimiento del producto")
            p.mb-0 Al eliminar el oxígeno del interior del frasco, se reduce drásticamente la posibilidad de que ocurran reacciones de oxidación que afectan el color, sabor y valor nutricional del alimento. Esto es especialmente importante en frutas y verduras, ya que la exposición al aire puede producir un tono marrón, pérdida de aroma y deterioro de la textura.
          div(titulo="Mejora la vida útil del alimento")
            p.mb-3 El vacío crea un entorno donde los microorganismos aeróbicos (que necesitan oxígeno para vivir) no pueden sobrevivir ni reproducirse. Esto significa que las conservas:
            ul
              li
                i.fa-solid.fa-circle-check(style="color: #8C492A; font-size: 15px")
                | 	Duran más tiempo en almacenamiento, sin necesidad de refrigeración inmediata.
              li
                i.fa-solid.fa-circle-check(style="color: #8C492A; font-size: 15px")
                | 	Conservan mejor sus propiedades sensoriales y nutritivas a lo largo del tiempo.
              li
                i.fa-solid.fa-circle-check(style="color: #8C492A; font-size: 15px")
                | 	Son menos propensas a contaminarse si se han seguido buenas prácticas de manufactura (BPM).
          div(titulo="Garantiza un sello hermético y presentación profesional")
            p.mb-3 Realizar el vacío correctamente asegura que el envase quede completamente sellado, sin entrada de aire ni humedad, protegiendo el contenido de factores externos.
            p.mb-0 Este sellado:
            ul
              li
                i.fa-solid.fa-circle-check(style="color: #8C492A; font-size: 15px")
                | 	Evita fugas o derrames.
              li
                i.fa-solid.fa-circle-check(style="color: #8C492A; font-size: 15px")
                | 	Mejora la presentación comercial del producto.
              li
                i.fa-solid.fa-circle-check(style="color: #8C492A; font-size: 15px")
                | 	Permite al consumidor comprobar que el envase está correctamente cerrado, por ejemplo, con el “click” de seguridad de la tapa metálica al abrirse por primera vez.
      .col-6.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3.d-flex
        figure.w-100.d-flex.flex-column
          img(src="@/assets/curso/temas/tema_4/img_25.png", class="img-fluid").height-100


</template>

<script>
export default {
  name: 'Tema4',
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
