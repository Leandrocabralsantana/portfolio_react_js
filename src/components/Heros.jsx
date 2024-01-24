import { motion } from "framer-motion";

import { styles } from "../style";
import About from "./About";
const Heros = () => {
  const isMobile = window.innerWidth <= 768;

  return (
    <section className="relative w-full mx-auto ">
      <div
        className={`{styles.paddingX} relative inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-15 mb-15`}
      >
        <div className="flex flex-col justify-center items-center mt-5 mb-10">
          <div className="w-5 h-5 rounded-full bg-[transparent]" />
          <div className="w-1 sm:h-80 h-40 bg-[transparent]" />
        </div>
        <div className="text-center">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hola, somos{" "}
            <span className="text-[#2272FF]"> Leo Cabral Santana</span> y{" "}
            <span className="text-[#2272FF]">Denise Burgos</span>{" "}
          </h1>
          <p
            className={`${styles.heroSubText} mt-2 text-white-100 ${
              isMobile ? "mt-20" : ""
            }`}
          >
            "Como desarrolladores web, nuestra principal herramienta de trabajo
            es React.js, el cual empleamos en la mayoría de nuestros proyectos.
            Te invitamos a
            <br />
            explorar y conocer nuestro trabajo."
          </p>
        </div>
      </div>{" "}
      {!isMobile}
    </section>
  );
};

export default Heros;
