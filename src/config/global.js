export default {
  global: {
    Name:
      'Métodos de conservación y preparación de conservas de frutas y verduras',
    Description:
      'Este componente formativo aborda fundamentos teóricos y prácticos sobre los métodos de conservación y elaboración de conservas a base de frutas y verduras. Explora técnicas térmicas, físicas y químicas para prolongar la vida útil de los alimentos. Permite al aprendiz identificar, aplicar y evaluar procesos productivos con valor agregado',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-contenido.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.png'),
      },

      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Fundamentos de la conservación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Principios básicos y objetivos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Factores',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Métodos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Refrigeración y congelación',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Deshidratación y salazón',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Conservas en azúcar y vinagre',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Esterilización térmica y uso de alcohol',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Escaldado',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Función del escaldado en conservas',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Métodos y tiempos según tipo de vegetal',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Efectos sobre textura, color y carga microbiana',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Procesos térmicos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Parámetros de la pasteurización y su aplicación',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Esterilización y control microbiológico',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Higienización de envases y técnica de vacío',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Elaboración de conservas ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Conservas en almíbar, mermeladas y jaleas',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Vegetales en salmuera, encurtidos y agridulces',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Líquidos de cobertura',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Preparación específica',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Ingredientes y técnicas de elaboración',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Aplicación de procesos de conservación combinada',
            hash: 't_6_2',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Calidad e inocuidad ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Buenas prácticas de manufactura (BPM)',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Control de puntos críticos en el proceso',
            hash: 't_7_2',
          },
          {
            numero: '7.3',
            titulo: 'Evaluación fisicoquímica y sensorial',
            hash: 't_7_3',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Valor agregado, mejora e innovación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '8.1',
            titulo: 'Aportes de valor al producto de conserva',
            hash: 't_8_1',
          },
          {
            numero: '8.2',
            titulo: 'Propuestas innovadoras',
            hash: 't_8_2',
          },
          {
            numero: '8.3',
            titulo: 'Normatividad y etiquetado',
            hash: 't_8_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Preparación de conservas de frutas.',
      referencia:
        'Paltrinieri, G. (1997). Procesamiento a pequeña escala de frutas y hortalizas amazónicas nativas e introducidas: Manual técnico. (Tratado de Cooperación Amazónica, Colaborador). TCA.',
      tipo: 'Capítulo de libro',
      link:
        'https://www.fao.org/4/x5029s/X5029S07.htm#4.3%20Mermeladas,%20jaleas,%20jarabes,%20dulces%20y%20confituras',
    },
    {
      tema: 'Preparación de conservas de vegetales.',
      referencia:
        'Paltrinieri, G. (1997). Procesamiento a pequeña escala de frutas y hortalizas amazónicas nativas e introducidas: Manual técnico. (Tratado de Cooperación Amazónica, Colaborador). TCA.',
      tipo: 'Capítulo de libro ',
      link: 'https://www.fao.org/4/x5029s/X5029S09.htm#4.6%20Encurtidos',
    },
  ],
  glosario: [
    {
      termino: 'Acidez (pH)',
      significado:
        'medida del nivel de acidez o alcalinidad de un alimento. Es clave en la conservación, ya que define si un producto requiere pasteurización o esterilización.',
    },
    {
      termino: 'Actividad de agua (Aw)',
      significado:
        'cantidad de agua disponible en un alimento para el desarrollo de microorganismos. Un valor bajo indica mayor estabilidad y vida útil.',
    },
    {
      termino: 'Almíbar',
      significado:
        'líquido de cobertura compuesto por agua y azúcar, utilizado para conservar frutas al reducir la actividad de agua y realzar su sabor y apariencia.',
    },
    {
      termino: 'Conservación combinada',
      significado:
        'tecnología que integra varios métodos de conservación (físicos, químicos o biológicos) para aumentar la eficacia del proceso sin comprometer la calidad del alimento.',
    },
    {
      termino: 'Deshidratación',
      significado:
        'método de conservación que elimina el agua del alimento para inhibir el crecimiento microbiano y prolongar su duración.',
    },
    {
      termino: 'Encurtido',
      significado:
        'técnica de conservación en vinagre que, además de preservar, aporta un sabor ácido característico y permite la adición de especias.',
    },
    {
      termino: 'Escaldado',
      significado:
        'tratamiento térmico breve aplicado antes de conservar frutas y verduras, que inactiva enzimas, mejora el color y reduce la carga microbiana.',
    },
    {
      termino: 'Esterilización',
      significado:
        'proceso térmico que elimina microorganismos, incluyendo esporas, mediante temperaturas superiores a 115 °C. Se usa en productos de baja acidez.',
    },
    {
      termino: 'Higienización',
      significado:
        'conjunto de acciones para lavar, desinfectar y esterilizar los envases y utensilios, evitando la contaminación del producto.',
    },
    {
      termino: 'Inocuidad',
      significado:
        'condición que garantiza que un alimento es seguro para el consumo, libre de peligros físicos, químicos y biológicos.',
    },
    {
      termino: 'Líquido de cobertura',
      significado:
        'solución que rodea los alimentos envasados (como almíbar, salmuera o vinagre) y contribuye a su conservación, sabor y apariencia.',
    },
    {
      termino: 'Pasteurización',
      significado:
        'tratamiento térmico a temperaturas moderadas (6-95 °C) que reduce la carga microbiana sin afectar significativamente las propiedades del alimento.',
    },
    {
      termino: 'Salmuera',
      significado:
        'solución de agua y sal utilizada como líquido de cobertura para conservar vegetales mediante reducción de la actividad de agua.',
    },
    {
      termino: 'Valor agregado',
      significado:
        'conjunto de características añadidas al producto (presentación, ingredientes funcionales, empaque sostenible) que aumentan su atractivo y competitividad en el mercado.',
    },
  ],
  referencias: [
    {
      referencia:
        'FAO. (1993). Prevención de pérdidas de alimentos poscosecha: frutas, hortalizas, raíces y tubérculos (Colección FAO: Capacitación N.º 17/2). Roma: FAO. ',
      link: 'https://www.fao.org/4/t0073s/T0073S00.htm#Contents',
    },
    {
      referencia:
        'FAO. (2020, 6 de abril). Serie COVID-19: Consejos para la conservación de las frutas y hortalizas con el fin de reducir el desperdicio de alimentos y alargar su vida útil. Plataforma FLW, FAO.',
      link:
        'https://www.fao.org/platform-food-loss-waste/resources/news/news-detail/COVID-19-Series-Tips-for-the-Preservation-of-Fruits-and-Vegetables-to-Reduce-Food-Waste-and-Improve-Shelf-Life/es',
    },
    {
      referencia:
        'López-Malo, A., Palou, E., & Welti-Chanes, J. (2021). Procesos de conservación de alimentos: fundamentos y aplicaciones. Editorial Trillas. Ministerio de Salud y Protección Social de Colombia. (2012). Resolución 2155 de 2012: Por la cual se establece el reglamento técnico sobre requisitos sanitarios de hortalizas procesadas. Diario Oficial, 48.516. ',
      link: 'https://faolex.fao.org/docs/pdf/col115862.pdf',
    },
    {
      referencia:
        'Organización de las Naciones Unidas para la Agricultura y la Alimentación (FAO). (s.f.). El <I>Codex Alimentarius</I> y la inocuidad de los alimentos. ',
      link: 'https://www.fao.org/fao-who-codexalimentarius/home/es/',
    },
    {
      referencia:
        'Terra Food-Tech®. (s.f.). Esterilización vs. pasteurización. Blog de Conservas. ',
      link: 'https://www.terrafoodtech.com/esterilizacion-vs-pasteurizacion/',
    },
    {
      referencia:
        'University of Minnesota Extension. (s.f.). Cómo blanquear verduras antes de conservarlas. University of Minnesota Extension. (s.f.). Preparar y utilizar almíbares para conservar frutas. Villar, L. (2010). Las mejores conservas. Editorial Integral. ',
      link:
        'https://ia800801.us.archive.org/22/items/tirapic/Las_mejores_conservas.pdf',
    },
    {
      referencia:
        'Wikipedia. (s.f.). Escabeche. En Wikipedia, la enciclopedia libre.',
      link: 'https://es.wikipedia.org/wiki/Escabeche',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable del Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio  y Servicios Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Ángela Viviana Páez Perilla',
          cargo: 'Experta temática',
          centro: 'Centro Agroindustrial Regional Quindío',
        },
        {
          nombre: 'Heydy Cristina Gonzalez Garcia',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio  y Servicios Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Andrés Felipe Herrera',
          cargo: 'Diseñador web',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Alexander Donado Molinares ',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio  y Servicios Regional Atlántico',
        },
        {
          nombre: 'Carmen Alicia Martinez Torres',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio  y Servicios Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Maria Fernanda Morales Angulo',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio  y Servicios Regional Atlántico',
        },
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio  y Servicios Regional Atlántico',
        },
        {
          nombre: 'Jairo Luis Valencia Ebratt',
          cargo: 'Validador y vinculador de recursos digitales ',
          centro: 'Centro de Comercio  y Servicios Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adie Villafañe',
          cargo: 'Validador y vinculador de recursos digitales ',
          centro: 'Centro de Comercio  y Servicios Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
