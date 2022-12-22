import htmlLogo from '../assets/html-5.svg';
import cssLogo from '../assets/css-3.svg';
import javascriptLogo from '../assets/javascript.svg';
import typescriptLogo from '../assets/typescript-icon.svg';
import reactLogo from '../assets/react.svg';
import nextJsLogo from '../assets/nextjs-icon.svg';
import tailwindLogo from '../assets/tailwindcss.svg';

const Skills = () => {
  return (
    <div className="absolute top-1/2 -translate-y-1/2 right-0 ">
      <h3>Skills</h3>
      <div className="grid grid-cols-3 gap-5">
        <img src={htmlLogo} alt="" className="w-24 h-24" />
        <img src={cssLogo} alt="" className="w-24 h-24" />
        <img src={javascriptLogo} alt="" className="w-24 h-24" />
        <img src={typescriptLogo} alt="" className="w-24 h-24" />
        <img src={reactLogo} alt="" className="w-24 h-24" />
        <img src={nextJsLogo} alt="" className="w-24 h-24" />
        <img src={tailwindLogo} alt="" className="w-24 h-24" />
      </div>
    </div>
  );
};

export default Skills;
