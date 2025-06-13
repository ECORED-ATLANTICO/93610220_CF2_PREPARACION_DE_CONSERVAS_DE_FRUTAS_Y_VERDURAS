<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Calidad e inocuidad
    figure.mb-4
      img(src="@/assets/curso/temas/tema_7/img_1.png", class="img-fluid")

    p.mb-3 En la elaboración de conservas, la calidad se alcanza cuando el producto final cumple con los requisitos de inocuidad, mantiene su estabilidad durante el almacenamiento, conserva sus características sensoriales (como sabor, color y textura) y se ajusta a las normas legales vigentes.
    p.mb-0 Para lograrlo, es necesario aplicar buenas prácticas de manufactura, controles preventivos en puntos críticos del proceso y evaluaciones fisicoquímicas y sensoriales, que aseguren la calidad desde la materia prima hasta el producto terminado.

    separador

    #t_7_1.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 7.1 Buenas prácticas de manufactura (BPM)
    .mb-3

    .bg_img_14.mb-3
      .row.justify-content-center.align-items-center.mb-5
        .col-6.col-lg-3.mb-lg-0.mb-3.d-flex
          figure.w-100.d-flex.flex-column
            img(src='@/assets/curso/temas/tema_7/img_2.png', class="img-fluid").height-100
        .col-12.col-lg-9.mb-0
          .cajon.color-secundario-b.p-4
            p.mb-0 Las BPM son el conjunto de condiciones, normas y procedimientos que aseguran la higiene y el control del proceso de elaboración. Son el pilar de cualquier sistema de gestión de calidad en alimentos, y su cumplimiento es obligatorio según normativas como el Decreto 3075 de 1997 en Colombia y las directrices del Codex Alimentarius (FAO/OMS). Los aspectos clave que deben aplicarse en la producción de conservas son:
      
    .row.d-flex.align-items-stretch.justify-content-center.align-items-center.mb-3
      .col-12.col-lg-8.order-2.order-lg-1.mb-lg-0.mb-3
        LineaTiempoD.color-adicional-3
          .row(numero="1" titulo="Higiene personal")
            .col-md-12.mb-4.mb-md-0
              p.text-small Uso de uniforme limpio, lavado frecuente de manos, protección del cabello y uñas cortas. El manipulador es un factor crítico en la contaminación cruzada.
          .row(numero="2" titulo="Limpieza y desinfección")
            .col-md-12.mb-4.mb-md-0
              p.text-small Rutinas programadas para utensilios, superficies, tanques y equipos. Se deben usar productos aprobados y métodos efectivos sin dejar residuos peligrosos.
          .row(numero="3" titulo="Control de materias primas")
            .col-md-12.mb-4.mb-md-0
              p.text-small Verificación del estado, procedencia, almacenamiento y condiciones sanitarias de frutas, verduras y aditivos.
          .row(numero="4" titulo="Trazabilidad y documentación")
            .col-md-12.mb-4.mb-md-0
              p.text-small Registros actualizados del proceso, lotes, proveedores, fechas de producción y control de puntos críticos.
          .row(numero="5" titulo="Capacitación continua del personal")
            .col-md-12.mb-4.mb-md-0
              p.text-small El equipo debe conocer las prácticas de higiene, control de calidad y manipulación segura para garantizar un entorno productivo confiable.
      .col-7.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3.d-flex
        figure.w-100.d-flex.flex-column
         img(src='@/assets/curso/temas/tema_7/img_3.png', class="img-fluid").height-100

    separador

    #t_7_2.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 7.2 Control de puntos críticos en el proceso
    .mb-3

    p.mb-3 El sistema HACCP (Análisis de Peligros y Puntos Críticos de Control) permite identificar, evaluar y controlar los riesgos que afectan la inocuidad del alimento. Su enfoque preventivo es uno de los más utilizados en plantas de procesamiento de alimentos, tanto a nivel artesanal como industrial. El sistema HACCP identifica y monitorea etapas que presentan riesgos para la inocuidad del alimento:
    
    .row.justify-content-center.mb-5
      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema_7/img_4.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3.text-center Escaldado 
            p.mb-0.text-small Si la temperatura o el tiempo son insuficientes, puede sobrevivir flora microbiana o activarse la oxidación enzimática.

      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema_7/img_5.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3.text-center Envasado
            p.mb-0.text-small Un ambiente no controlado o utensilios contaminados pueden introducir microorganismos en el producto ya tratado.

      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema_7/img_6.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3.text-center Esterilización/ pasteurización
            p.mb-1.text-small Temperaturas demasiado bajas o tiempos cortos pueden no eliminar esporas o bacterias resiste
    .bg_img_15.mb-3
      .tarjeta.color-secundario-5.p-3.justify-content-center.align-items-center.mb-5
        .row.justify-content-center.align-items-center.mb-0
          .col-3.col-lg-1.mb-lg-0.mb-3
            figure
              img(src="@/assets/curso/temas/tema_7/img_7.svg", class="img-fluid")
          .col-12.col-lg-11
            p El sistema HACCP no solo identifica los riesgos que pueden afectar la inocuidad de los alimentos, sino que también establece acciones sistemáticas para prevenir, controlar y corregir cualquier desviación que pueda comprometer la seguridad del producto. Estas acciones se implementan de forma organizada a lo largo del proceso de producción y permiten garantizar que las conservas elaboradas cumplan con los estándares sanitarios exigidos. A continuación, se describen las principales actividades que forman parte de este sistema de control preventivo:

      .tarjeta.tarjeta--fondo__slider.p-4
        SlyderA(tipo="b")
          .row.justify-content-center.align-items-center
            .col-12.col-lg-6.order-2.order-lg-1.mb-0
              h2 Establecimiento de límites críticos por etapa
              p Se definen los valores mínimos o máximos aceptables para cada variable del proceso (como temperatura, pH o tiempo de cocción) que aseguran que el peligro identificado esté bajo control. Estos límites son específicos y medibles, y si se sobrepasan, se considera que existe un riesgo para la inocuidad del alimento.
            .col-7.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3
              figure
                img(src='@/assets/curso/temas/tema_7/img_8.png', class="img-fluid")

          .row.justify-content-center.align-items-center
            .col-12.col-lg-6.order-2.order-lg-1.mb-0
              h2 Monitoreo de variables (temperatura, pH y tiempos)
              p Consiste en la observación o medición constante de los parámetros críticos durante el proceso, para asegurarse de que se mantengan dentro de los límites establecidos. El monitoreo puede ser manual o automatizado, y debe realizarse con frecuencia suficiente para detectar cualquier falla a tiempo. 
            .col-7.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3
              figure
                img(src='@/assets/curso/temas/tema_7/img_9.png', class="img-fluid")

          .row.justify-content-center.align-items-center
            .col-12.col-lg-6.order-2.order-lg-1.mb-0
              h2 Registro de datos para trazabilidad
              p Implica documentar los resultados del monitoreo y todas las acciones realizadas en cada etapa del proceso. Estos registros permiten hacer seguimiento al historial del producto, identificar su origen, comprobar el cumplimiento de las condiciones establecidas y responder rápidamente en caso de reclamos o retiros del mercado.
            .col-7.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3
              figure
                img(src='@/assets/curso/temas/tema_7/img_10.png', class="img-fluid")

          .row.justify-content-center.align-items-center
            .col-12.col-lg-6.order-2.order-lg-1.mb-0
              h2 Aplicación de acciones correctivas en caso de desviaciones
              p Cuando se detecta que un parámetro crítico ha salido de su límite, se deben aplicar medidas inmediatas para corregir el problema. Estas acciones pueden incluir la repetición del proceso, el aislamiento del lote afectado o su eliminación, según el caso. Además, se debe investigar la causa para evitar que vuelva a ocurrir.
            .col-7.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3
              figure
                img(src='@/assets/curso/temas/tema_7/img_11.png', class="img-fluid")

    separador

    #t_7_3.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 7.3 Evaluación fisicoquímica y sensorial
    .mb-3

    p.mb-3 La evaluación técnica permite comprobar que el producto en conserva cumple con los parámetros deseados de acidez, textura, dulzor y estabilidad, así como con los atributos que percibe el consumidor final (sabor, color, aroma, entre otros).
    
    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--color-adicional-5-6")
      div(titulo="Análisis  fisicoquímico del producto").p-5.pb-0.pt-0
        .row.d-flex.align-items-stretch.justify-content-center.align-items-center.mb-3
          .col-7.col-lg-5.mb-lg-0.mb-3.d-flex
            figure.w-100.d-flex.flex-column
              img(src="@/assets/curso/temas/tema_7/img_12.png", class="img-fluid").height-100
          .col-12.col-lg-7
            p.mb-3 <b>pH (acidez): </b> indica el nivel de acidez del alimento. Es un parámetro clave para definir si se requiere pasteurización (productos ácidos) o esterilización (productos de baja acidez), ya que afecta directamente la seguridad microbiológica.
            p.mb-3 <b>Brix (azúcares solubles):</b> mide la cantidad de sólidos solubles presentes, especialmente azúcares. Se controla en productos dulces como mermeladas, jaleas y almíbares, lo que permite verificar la concentración deseada.
            p.mb-3 <b>Aw (actividad de agua):</b> refleja cuánta agua disponible existe en el alimento para el crecimiento microbiano. Cuanto más bajo sea el valor de Aw, mayor será la estabilidad y vida útil del producto.
            p.mb-3 <b>Viscosidad:</b> se refiere a la consistencia o espesor del producto. Es especialmente importante en jaleas y mermeladas, ya que influye tanto en su textura como en la percepción de calidad por parte del consumidor.
      div(titulo="Evaluación sensorial del producto").p-5.pb-0.pt-0
        p.mb-3 Esta prueba se realiza con <b>paneles entrenados o consumidores</b>, según el objetivo (control de calidad o validación de mercado).
        .row.d-flex.align-items-stretch.justify-content-center.align-items-center.mb-3
          .col-7.col-lg-5.mb-lg-0.mb-3.d-flex
            figure.w-100.d-flex.flex-column.p-2.pt-0.ps-0.pb-4 
              img(src="@/assets/curso/temas/tema_7/img_13.png", class="img-fluid").height-100
          .col-12.col-lg-7
            p.mb-3 <b>Aspectos evaluados:</b>
            ul.mb-3
              li.mb-0.d-flex.align-items-start
                i.fa-solid.fa-circle-check.me-2(style="color: #8C492A; font-size: 16px; margin-top: 4px;")
                span(style="line-height: 1.5") 	<b>Apariencia:</b> color, brillo y claridad
              li.mb-0.d-flex.align-items-start
                i.fa-solid.fa-circle-check.me-2(style="color: #8C492A; font-size: 16px; margin-top: 4px;")
                span(style="line-height: 1.5") 	<b>Aroma:</b> intensidad, naturalidad y frescura.
              li.mb-0.d-flex.align-items-start
                i.fa-solid.fa-circle-check.me-2(style="color: #8C492A; font-size: 16px; margin-top: 4px;")
                span(style="line-height: 1.5") 	<b>Sabor:</b> dulzor, acidez y equilibrio.
              li.mb-0.d-flex.align-items-start
                i.fa-solid.fa-circle-check.me-2(style="color: #8C492A; font-size: 16px; margin-top: 4px;")
                span(style="line-height: 1.5") 	<b>Textura:</b> firmeza, untuosidad y fluidez.
</template>

<script>
export default {
  name: 'Tema7',
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
