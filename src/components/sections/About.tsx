import { AiFillGithub } from 'react-icons/ai';
import { FiMail } from 'react-icons/fi';
import Skills from '../Skills';

const About = () => {
  return (
    <div className="container">
      <div className="absolute top-1/2 -translate-y-1/2 left-0">
        <h2 className="text-9xl mb-10 tracking-[12px]">About</h2>
        <p className="text-4xl mb-4">TAKUYA MATSUTANI</p>
        <p>
          1993年、熊本県出身 <br />
          現在、フロントサイドエンジニアになるために勉強中
        </p>
        <a
          href="mailto:jb.matsutani@gmail.com"
          className="flex items-center space-x-2"
        >
          <FiMail className="" />
          <span className="">jb.matsutani@gmail.com</span>
        </a>
        <a href="https://github.com/mtvzee">
          <AiFillGithub />
        </a>
      </div>
      <Skills />
    </div>
  );
};

export default About;
