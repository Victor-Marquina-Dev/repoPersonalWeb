const navLinks = [
  {
    name: "Proyectos",
    link: "#work",
  },
  {
    name: "Experiencia",
    link: "#experience",
  },
  {
    name: "Habilidades",
    link: "#skills",
  },
  {
    name: "Referencias",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Aplicaciones", imgPath: "/images/concepts.svg" },
  { text: "APIs", imgPath: "/images/designs.svg" },
  { text: "Codigos", imgPath: "/images/code.svg" },
  { text: "Plataformas", imgPath: "/images/ideas.svg" },
  { text: "Interfaces", imgPath: "/images/concepts.svg" },

];

const counterItems = [
  { value: 3, suffix: "+", label: "👨‍💻 Años de Experiencia" },
  { value: 100, suffix: "%", label: "📅 Entrega puntual en todos los proyectos" },
  { value: 4.8, suffix: "/5", label: "⭐ Calificación promedio en Upwork, Fiverr" },
  { value: 17, suffix: "+", label: "🛠️ 15+ Proyectos Completados" },
];

const logoIconsList = [
  
  {
    imgPath: "/images/logos/abilities_1.png",
  },
  {
    imgPath: "/images/logos/abilities_2.png",
  },
  {
    imgPath: "/images/logos/abilities_3.png",
  },
  {
    imgPath: "/images/logos/abilities_4.png",
  },
  {
    imgPath: "/images/logos/abilities_5.png",
  },
  {
    imgPath: "/images/logos/abilities_6.png",
  },
  {
    imgPath: "/images/logos/abilities_7.png",
  },
  {
    imgPath: "/images/logos/abilities_8.png",
  },
  {
    imgPath: "/images/logos/abilities_9.png",
  },
  {
    imgPath: "/images/logos/abilities_10.png",
  },
];

const abilities = [
  {
    imgPath: "/images/img1.png",
    title: "Arquitectura Segura",
    desc: "Construcción de APIs robustas y sistemas escalables con seguridad en el núcleo. Desde JWT y guards hasta políticas IAM en la nube, aplico prácticas de seguridad por diseño.",
  },
  {
    imgPath: "/images/img2.png",
    title: "Excelencia Técnica",
    desc: "Código limpio, rendimiento y automatización basados en buenas prácticas.Uso TDD, revisiones de código y herramientas como SonarQube para asegurar soluciones mantenibles.",
  },
  {
    imgPath: "/images/img3.png",
    title: "Soluciones Cloud-Ready",
    desc: "Despliegue de aplicaciones escalables en GCP, AWS y Azure.Con pipelines CI/CD, contenedores y Kubernetes, preparo tus apps para crecer sin límites.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
    
  },

];

const expCards = [
  {
    review: "Tecnologías clave:",
    review_A: "Java 11–17 · Spring Boot · Apache Camel · JBoss Fuse · Apigee  · Angular 12,17,20 · RxJS · PrimeNG · Angular Material · PostgreSQL · SQL Server",
    imgPath: "/images/encora.png",
    logoPath: "/images/encoraLogo.png",
    title: "ENCORA - Compartamos Banco ",
    date: "jul 2024 – jun 2025 | (1 año)  " ,
    work: "Desarrollador full stack " ,
    a:'Proyecto principal ',
    as:'Migración de Billetera Electrónica BIM hacia integración con cuentas de ahorro',
    responsibilities: [
      "Desarrollo de microservicios seguros y escalables para banca digital",
      "Exposición y orquestación de servicios RESTful mediante Google Apigee, incluyendo configuración de API Proxies",
      "Participación activa en el diseño y despliegue en entornos Kubernetes (GKE) con Google Distributed Cloud.",
      "Desarrollo front-end con Angular (Reactive Forms, HTTPClient, Angular Material).",
      "Uso de librerías como RxJS, NGX Bootstrap, PrimeNG y JWT para funcionalidades específicas.",
    ],
  },
  {
    review: "Tecnologías clave:",
    review_A: "Node.js · NestJS · TypeScript · Angular · React (14, 17) · Vue.js · RxJS · Redux/NgRx · PostgreSQL ·MongoDB · Redis · Kafka · JWT · Docker · GitHub Actions ·",
    imgPath: "/images/mediabyte.png",
    logoPath: "/images/mediabyteLogo.png",
    title: "MEDIABYTE - Cemento Pacasmayo y Tarjeta W",
    date: "ene 2023 – jun 2024 | (1 año y 6 meses)",
    work: "Desarrollador full stack" ,
    a:'Proyecto principal ',
    as:'Participé como desarrollador fullstack en proyectos orientados a microservicios, automatización de despliegues yescalabilidad cloud.Construí soluciones seguras y reactivas en backend y frontend integradas con Azure, AWS y GCP.',
    responsibilities: [
      "Desarrollo de microservicios REST con NestJS aplicando validaciones robustas.",
      "Implementación de autenticación con JWT y control de acceso con Guards personalizados.",
      "Integración de APIs externas mediante clientes HTTP asincrónicos.",
      "Administración y modelado de datos con PostgreSQL, MongoDB y Redis.",
      "Subida y gestión segura de archivos (PDF, imágenes, videos) a Blob Storage en GCP.",
    ],
  },
  {
    review: "Tecnologías clave:",
    review_A: "NestJS · GraphQL · Apollo Client · Angular 14+ · ReactJS · TypeORM · MySQL · Redis · Docker · AWS (S3, IAM, CodeCommit, CodePipeline) · JIRA · RxJS / RxJava · Java 11",
    imgPath: "/images/maximo.png",
    logoPath: "/images/maximoLogo.png",
    title: "MAXIMO",
    date: "jul 2022 – dic 2022 | (6 meses)",
    work: "Analista Desarrollador Web" ,
    a:'Proyecto principal ',
    as:'Diseñé e implementé funcionalidades clave para la gestión de billetera digital, tarjetas, validación de identidad y visualización de métricas. Contribuí en el desarrollo de microservicios, paneles administrativos y herramientas de análisisorientadas a seguridad, rendimiento y escalabilidad.',
    responsibilities: [
      "Integré una moneda digital propia con lógica de conversión y validación para transferencias entre usuarios.",
      "Mejoré procesos de gestión de tarjetas físicas/virtuales: cancelación, reasignación y actualización de servicios.",
      "Validé límites de gastos/ingresos y optimicé servicios de recargas, pagos, cobros y movimientos de saldo.",
      "Implementé guards de autenticación y autorización tanto en backend (NestJS) como en Angular.",
      "•Consumo e integración de APIs externas (Pomelo, Odybank, RENIEC) para validación de identidad en tiempo real.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Milagros Cajo",
    mentions: "@milagros-cajo-dev",
    review:
      "Trabajar con Víctor Marquina fue una excelente experiencia. Supo transformar requerimientos técnicos complejos en una web funcional, clara y bien optimizada. Su capacidad para encontrar soluciones eficaces es realmente admirable",
    imgPath: "/images/usuario_1.png",
  },
  {
    name: "Lucas Ramírez ",
    mentions: "@LucasR",
    review:
      "Colaborar con Víctor fue un verdadero placer. Es profesional, puntual y siempre enfocado en entregar resultados de alta calidad. Su entusiasmo por cada etapa del desarrollo lo convierte en alguien clave para cualquier equipo.",
    imgPath: "/images/usuario_4.png",
  },
  {
    name: "Valeria Torres",
    mentions: "@Valeria.Torres",
    review:
      "Colaborar con Víctor fue un verdadero placer. Es profesional, puntual y siempre enfocado en entregar resultados de alta calidad. Su entusiasmo por cada etapa del desarrollo lo convierte en alguien clave para cualquier equipo.",
    imgPath: "/images/usuario_3.png",
  },
  
];




const socialImgs = [
  {
    name: "wspp",
    imgPath: "/images/wspp.png",
    url: "https://wa.me/934553034"
  },
  {
    name: "github",
    imgPath: "/images/github.png",
    url: "https://github.com/Victor-Marquina-Dev"
  },
  {
    name: "inst",
    imgPath: "/images/inst.png",
    url: "https://www.instagram.com/vj_130101"
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    url: "https://www.linkedin.com/in/victor-marquina-dev/"
  },
  {
    name: "Gmail",
    imgPath: "/images/gmail.png",
    url: "mailto:victor.marquina30@gmail.com"
  }
];


export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
