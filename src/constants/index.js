import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    carrent,
    jobit,
    tripguide,
    threejs,
    reactdeveloper,
    datascience,
    cdeveloper,
    webdeveloper,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
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
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };