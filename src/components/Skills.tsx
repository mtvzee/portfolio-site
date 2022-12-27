import htmlLogo from '../assets/html-5.svg';
import cssLogo from '../assets/css-3.svg';
import javascriptLogo from '../assets/javascript.svg';
import typescriptLogo from '../assets/typescript-icon.svg';
import reactLogo from '../assets/react.svg';
// import nextJsLogo from '../assets/nextjs-icon.svg';
import nextJsLogo from '../assets/nextjs.svg';
import tailwindLogo from '../assets/tailwindcss.svg';

const Skills = () => {
  return (
    <div className="">
      <h3 className="uppercase text-xl tracking-[12px] font-bold">Skills</h3>
      <div className="grid grid-cols-3 gap-5 mt-8">
        <img src={htmlLogo} alt="html-logo" className="skill-logo" />
        <img src={cssLogo} alt="css-logo" className="skill-logo" />
        <img
          src={javascriptLogo}
          alt="javascript-logo"
          className="skill-logo p-0"
        />
        <img
          src={typescriptLogo}
          alt="typescript-logo"
          className="skill-logo p-0"
        />
        <img src={reactLogo} alt="react-logo" className="skill-logo" />
        <img src={nextJsLogo} alt="nextjs-logo" className="skill-logo" />
        <img src={tailwindLogo} alt="tailwindcss-logo" className="skill-logo" />
      </div>
    </div>
  );
};

export default Skills;
