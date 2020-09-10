import { DiMongodb, DiNodejsSmall, DiReact, DiWordpress, DiSass } from 'react-icons/di';
import { SiTailwindcss, SiStyledComponents } from 'react-icons/si';

const techMap = {
  mongodb: { label: 'MongoDB', icon: DiMongodb },
  react: { label: 'React', icon: DiReact },
  node: { label: 'Node', icon: DiNodejsSmall },
  wordpress: { label: 'Wordpress', icon: DiWordpress },
  sass: { label: 'SASS', icon: DiSass },
  tailwind: { label: 'Tailwind CSS', icon: SiTailwindcss },
  styled_components: { label: 'Styled Components', icon: SiStyledComponents },
};

export default techMap;
