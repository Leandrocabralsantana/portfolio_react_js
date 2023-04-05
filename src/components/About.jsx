import React from 'react';
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion';

import { styles } from '../style';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
    const isMobile = window.innerWidth <= 768;

  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[250px] flex justify-evenly items-center flex-col"
          >
            <img src={icon} alt={title} className="w-16 h-16 object-contain" />
            <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>

        </div>

      </motion.div>
    </Tilt>
  )
}

const About = () => {
  const isMobile = window.innerWidth <= 768;

  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introducción</p>
      <h2 className={styles.sectionHeadText}>Resumen</h2>
    </motion.div>
    <motion.p
      variants={fadeIn("","", 0.1, 1)}
      className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
    >
      Soy un estudiante de la Tecnicatura Universitaria en Programación en UTN. Por el momento me estoy capacitando en Data Science & Desarrollo Web, en Udemy y Argentina Programa, respectivamente. Aunque aún no tengo experiencia formal laboral en el área de IT, si tengo amplios conocimientos de la misma (tanto de software, como de hardware). Y actualmente estoy buscando seguir expandiendo mis conocimientos a través tanto de cursos, tutoriales, documentación, etc, los cuales aplico en los proyectos subidos a mi portafolio. Cualquier duda, no dudes en preguntar, un abrazo!    
    </motion.p>
    <div className="mt-20 flex flex-wrap gap-10">
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service} />
      ))}

    </div>
    </>


  )
}

export default SectionWrapper(About, "about");