import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { styles } from '../style';
const Tech = () => {
  return (
    <div>
        <p className={styles.sectionSubText}>
          Recursos utilizados hasta ahora:
        </p>
        <h2 className={styles.sectionHeadText}>Tecnologías</h2>
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}> 
          <BallCanvas icon={technology.icon} />
    </div>
      ))}
    </div>
    </div>
  );
};
export default SectionWrapper(Tech, "")