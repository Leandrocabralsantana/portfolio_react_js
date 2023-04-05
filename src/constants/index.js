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
      title: "Sobre mi",
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
      title: "Desarrollador Web",
      icon: web,
    },
    {
      title: "Data Science Developer",
      icon: mobile,
    },
    {
      title: "Desarrollador C",
      icon: backend,
    },
    {
      title: "Desarrollador UI/UX",
      icon: creator,
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
      title: "Desarrollador Web HTML/CSS/JS",
      company_name: "Proyecto independiente",
      icon: webdeveloper,
      iconBg: "#383E56",
      date: "Marzo 2022 - Mayo 2022",
      points: [
        "Durante el año 2022 realicé la primer parte del Bootcamp de Radium Rocket sobre desarrollo web, donde me adentré en HTML, CSS y Javascript básico, fue mi primer paso en mi proceso de formación en desarrollo.",
      ],
    },
    {
      title: "Desarrollador C",
      company_name: "Universidad Tecnológica Nacional",
      icon: cdeveloper,
      iconBg: "#E6DEDD",
      date: "Junio 2022 - Diciembre 2022",
      points: [
        "En Junio de 2022 comencé a cursar la Tecnicatura Universitaria en Programación, en la cual nos dedicamos integramente a desarrollar programas en C durante el primer semestre",
      ],
    },
    {
      title: "Desarrollador en Ciencia de Datos",
      company_name: "Udemy",
      icon: datascience,
      iconBg: "#383E56",
      date: "Diciembre 2022 - Actualmente",
      points: [
        "En Diciembre de 2022 comencé a capacitarme en Udemy, en el cual además de aprender las bases de Python, comencé a utilizar las librerías de Numpy, Pandas y Matplotlib.",
      ],
    },
    {
      title: "Desarrollador Web React JS",
      company_name: "Independiente",
      icon: reactdeveloper,
      iconBg: "#E6DEDD",
      date: "Marzo 2023 - Actualmente",
      points: [
        "En Marzo de 2023 comencé a capacitarme de forma autodidacta en React JS, utilizando tanto tutoriales de Youtube, como la documentación oficial, actualmente me encuentro desarrollando varios proyectos.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Pensé que era imposible que exista alguien tan genial, y apareció Leo y cambió el paradigma.",
      name: "Leandro Andrés Fritzler",
      designation: "Fullstack Developer",
      company: "Globant",
      image: leandrofritzler,
    },
    {
      testimonial:
      "Conozco a Leandro hace muchísimo tiempo y es un apasionado de la vida. Su formación constante y su actitud proactiva para la resolución de problemas lo hacen un material humano invaluable para cualquier equipo de desarrollo de software.",
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
      name: "Mi primer portfolio",
      description:
        "Mi primer proyecto web, en el usé HTML, CSS y Javascript para crear un portfolio personal. Utilicé Vanilla Javascript para crear un menú interactivo que permite cambiar la paleta de colores de la página, así como un modo claro/oscuro.",
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
      source_code_link: "https://github.com/Leandrocabralsantana/argentina_programa",
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
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };