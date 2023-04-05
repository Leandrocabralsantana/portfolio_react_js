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
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Mi primer portfolio",
      description:
        "Mi primer proyecto web, en el usé HTML, CSS y Javascript para crear un portfolio personal. Utilicé Vanilla Javascript para crear un menú interactivo que permite cambiar la paleta de colores de la página, así como un modo claro / oscuro",
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
      source_code_link: "https://github.com/",
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
      source_code_link: "https://github.com/",
    },
    {
      name: "Análisis de ventas",
      description:
        "Análisis de ventas de una empresa de venta de productos electrónicos, utilizando Python y Pandas.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "pandas",
          color: "green-text-gradient",
        },
        {
          name: "numpy",
          color: "pink-text-gradient",
        },
        {
          name: "matplotlib",
          color: "blue-text-gradient",
        },
      ],
      image: salesanalisis,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };