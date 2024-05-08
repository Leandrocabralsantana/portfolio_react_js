import { motion } from "framer-motion";

import { styles } from "../style";

const Hero = () => {
  const isMobile = window.innerWidth <= 768;

  return (
    <section className="relative w-full mx-auto ">
      <div
        className={`{styles.paddingX} relative inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-15 mb-0`}
      >
        <div className="flex flex-col justify-center items-center mt-5 mb-0">
          <div className="w-5 h-5 rounded-full bg-[transparent]" />
          <div className="w-1 sm:h-80 h-40 bg-[transparent]" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hola, soy <span className='text-[#915eff]'> Leo Cabral Santana</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 ${isMobile ? 'mt-0' : 'mt-50'}`}>Soy un desarrollador con 2 años de experiencia en programación, y una vida en el ámbito tecnológico. Si bien mi fortaleza actualmente es front (estuve a cargo de un equipo de 5 personas hasta hace pocos meses), también me desempeño excelentemente en el back. Tengo conocimientos de infraestructura, back, front, bases de datos, análisis de datos, CI/CD y control de versiones.   <br className="sm:block hidden" /> ¡Te invito a recorrer mi portfolio y a dejar cualquier recomendación que tengas en los form que están debajo! 
          </p>
        </div>
      </div>
      {!isMobile}

      {/* <div className={`absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center top-[${isMobile ? '440px' : '430px'}]`}>
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.dev
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className={`w-3 h-3 rounded-full bg-secondary mb-1 ${isMobile ? 'mt-5' : ''}`}
            />
          </div>
        </a>

      </div> */}

    </section>
  );
};

export default Hero ;
