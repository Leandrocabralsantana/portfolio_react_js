import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { styles } from '../style';

const Tech = () => {
  const isMobile = window.innerWidth <= 768;

  return (
    <div>
      <p className={styles.sectionSubText}>
        Recursos utilizados hasta ahora:
      </p>
      <h2 className={styles.sectionHeadText}>Tecnologías</h2>
      {isMobile ? (
        <div className="w-15 h-15 shadow-md flex flex-row flex-wrap justify-center gap-10">
          {technologies.map((technology) => (
            <div className="rounded-3xl bg-white w-14 h-14" key={technology.name}>
              <img
                src={technology.icon}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-row flex-wrap justify-center gap-10">
          {technologies.map((technology) => (
            <div className="w-28 h-28" key={technology.name}>
              <BallCanvas icon={technology.icon} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SectionWrapper(Tech, "");