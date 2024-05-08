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
        <div className="text-center">
          <h1 className={`${styles.heroHeadText} text-white`}>
           Bienvenido! Soy 
            <span className="text-[#2272FF]"> Leo Cabral Santana</span> {" "}
          </h1>
          <p
            className={`${styles.heroSubText} mt-2 text-white-100 ${
              isMobile ? "mt-20" : ""
            }`}
          >
            Soy un desarrollador de software enamorado de lo que hago, 
            <br />
            te invito a explorar y conocer mi trabajo 
          </p>
        </div>
      </div>{" "}
      {!isMobile}
    </section>
  );
};

export default Hero ;
