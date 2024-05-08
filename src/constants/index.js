import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  git,
  figma,
  docker,
  portfolio,
  movieapp,
  salesanalisis,
  c,
  python,
  pandas,
  excel,
  mysql,
  reactdeveloper,
  datascience,
  cdeveloper,
  webdeveloper,
  leandrofritzler,
  ernestolondero,
  ivobertoni,
  gonzalodecastro,
  claudiocaruzo,
  cintiaavendaño,
  ezequielespinosa,
  notebook,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Sobre nosotros",
  },
  {
    id: "work",
    title: "Proyectos en desarrollo",
  },
  {
    id: "contact",
    title: "Contacto",
  },
];

const services = [
  {
    title: "Diseño y desarrollo web responsive",
    icon: web,
  },
  {
    title: "Migración de sitios web",
    icon: mobile,
  },
  {
    title: "Integración de diseños y maquetación",
    icon: backend,
  },
  {
    title: "Desarrollo de sitios web estáticos o dinámicos",
    icon: creator,
  },
  {
    title: "Desarrollo de aplicaciones web",
    icon: notebook,
  },
  {
    title: "Desarrollo de aplicaciones móviles",
    icon: notebook,
  },
  {
    title: "Asesoramiento y consultoría técnica",
    icon: notebook,
  },
  {
    title: "Actualización de la tecnología web",
    icon: notebook,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "C",
    icon: c,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "pandas",
    icon: pandas,
  },
  {
    name: "excel",
    icon: excel,
  },
  {
    name: "mysql",
    icon: mysql,
  },
];

const experiences = [
  {
    title: "Desarrolladores Web en React.js",
    company_name: "Gloouds",
    icon: webdeveloper,
    iconBg: "#383E56",
    date: "Abril 2023 - Actualidad",
    points: [
      "Actualmente nos encontramos desarrollando la aplicación web de Gloouds, empresa dedicada al análisis de datos y a la creación de soluciones tecnológicas en el ámbito del fútbol profesional.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Creo que Leandro es un profesional comprometido y con una increíble curiosidad, que tiene muchísimo potencial para la industria. Dale un problema y lo va a resolver, así nunca lo haya visto antes. Aprender a programar para él fue sumarle una skill más a las que ya trae en la mochila.",
    name: "Leandro Andrés Fritzler",
    designation: "Fullstack Developer",
    company: "Globant",
    image: leandrofritzler,
  },
  {
    testimonial:
      "Conozco a Leandro hace mucho tiempo y es un apasionado de la vida. Su formación constante y su actitud proactiva para la resolución de problemas lo hacen invaluable para cualquier equipo de desarrollo.",
    name: "Claudio Caruzo",
    designation: "RPA Developer",
    company: "SerTIC Tech Solutions",
    image: claudiocaruzo,
  },
  //    {
  //      testimonial:
  //        "El mejor primo del universo",
  //      name: "Gonzalo de Castro",
  //      designation: "Desarrollador Full Stack",
  //      company: "Gloouds",
  //      image: gonzalodecastro
  //    },
  //    {
  //      testimonial:
  //        "El mejor compañero de trabajo que tuve en la vida, sabe hacer de todo el hijo de puta",
  //      name: "Ernesto Londero",
  //      designation: "Desarrollador Full Stack",
  //     company: "",
  //    image: ernestolondero,
  // },
  {
    testimonial:
      "Leo siempre está dispuesto a aprender, pone lo mejor de él en cada proyecto, tenerlo en tu equipo de trabajo te garantiza responsabilidad y aprendizaje para el resto del equipo.",
    name: "Ivo Bertoni",
    designation: "Desarrollador Web Jr",
    company: "Kernel Informática",
    image: ivobertoni,
  },
  //    {
  //    testimonial:
  //    "Leo es una persona autodidacta, capaz de aprender rápidamente y con facilidad en casi cualquier ámbito. Además, es trabajador y disciplinado, siempre cumpliendo con los plazos y asegurándose de que el trabajo esté bien hecho; sería una gran adición a cualquier equipo de Desarrollo Web gracias a su habilidad para aprender rápidamente y su ética de trabajo",
  //name: "Ezequiel Espinosa",
  //designation: "Estudiante de la Tecnicatura en Programación",
  //company: "Universidad Tecnológica Nacional",
  //image: ezequielespinosa,
  // },
];

const projects = [
  {
    name: "Portfolio en React.js",
    description:
      "Uno de mis primeros proyectos en React.js, utilicé tailwind para el css, React Router para la navegación y React Icons para los íconos, además de motion y un Wrapper.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link:
      "https://github.com/Leandrocabralsantana/portfolio_react_js",
    link: "https://leandrocabralsantana.github.io/portfolio_react_js/",
  },
  {
    name: "Movie App",
    description:
      "Aplicación web generada en React, permite buscar películas y mostrar información sobre ellas. Utiliza la API de The Movie Database (TMDb).",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
    ],
    image: movieapp,
    source_code_link: "https://github.com/Leandrocabralsantana/movie_app",
    link: "https://leandrocabralsantana.github.io/utn-labcomII-practices/U02P03/",
  },
  {
    name: "Análisis de ventas",
    description:
      "Análisis de ventas de una empresa de venta de productos electrónicos, utilizando Python, Pandas, Numpy y Matplotlib.",
    tags: [
      {
        name: "python",
        color: "skyblue-text-gradient",
      },
      {
        name: "pandas",
        color: "purple-text-gradient",
      },
      {
        name: "numpy",
        color: "pink-text-gradient",
      },
      {
        name: "matplotlib",
        color: "yellow-text-gradient",
      },
    ],
    image: salesanalisis,
    source_code_link: "https://github.com/Leandrocabralsantana/pandas_projects",
    link: "https://github.com/Leandrocabralsantana/pandas_projects",
  },
];

export { services, technologies, experiences, testimonials, projects };
