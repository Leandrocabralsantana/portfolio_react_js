import { motion } from "framer-motion";
import { Suspense, useEffect, useState } from 'react'
import { styles } from '../style';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width:1000px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) =>{
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener('change', handleMediaQueryChange);    

  return() => {
    mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  }, [])

  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`{styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hola, soy <span className='text-[#915eff]'> Leo Cabral Santana</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>Desarrollador web en React.js y de Data Science, políglota (Español, inglés, japonés y alemán), amante de los jueguitos y el animé.   <br className="sm:block hidden" /> ¡Te invito a recorrer mi portfolio y a dejar cualquier recomendación que tengas en los form que están debajo! 
          </p>
        </div>
      </div>
      
      <ComputersCanvas isMobile={isMobile}/>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center top-[430px]">
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
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>

      </div>
    </section>

    )
}

export default Hero