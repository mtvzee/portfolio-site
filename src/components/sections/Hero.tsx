import { motion, Variants } from 'framer-motion';
import { BsArrowRightShort } from 'react-icons/bs';

const textContainer: Variants = {
  hidden: { x: -500, opacity: 0, translateY: '-50%' },
  show: { x: 0, opacity: 1, transition: { duration: 1 } },
};
const linkContainer: Variants = {
  // hidden: { opacity: 0 },
  // show: {
  //   opacity: 1,
  //   transition: {
  //     staggerChildren: 0.5,
  //   },
  // },
  // hidden: { opacity: 0 },
  // show: { opacity: 1, transition: { duration: 1 } },
};
const item: Variants = {
  hidden: { x: -100, opacity: 0 },
  show: { x: 0, opacity: 1 },
};

const Hero = () => {
  return (
    <div className="container">
      <motion.div
        className="absolute top-1/2  left-0"
        variants={textContainer}
        initial="hidden"
        whileInView="show"
      >
        <h1 className="text-8xl">Takuya Matsutani</h1>
        <span className="text-5xl">Portfolio</span>
      </motion.div>

      <ul className="absolute top-1/2 right-0 -translate-y-1/2 flex flex-col space-y-4">
        <li>
          <motion.a
            href="#about"
            className="hero-a"
            variants={linkContainer}
            initial="hidden"
            animate="show"
          >
            <span>About Me</span>
            <motion.button variants={item}>
              <BsArrowRightShort className="w-8 h-8" />
            </motion.button>
          </motion.a>
        </li>
        <li>
          <motion.a
            href="#projects"
            className="hero-a"
            variants={linkContainer}
            initial="hidden"
            animate="show"
          >
            <span>Projects</span>
            <motion.button variants={item}>
              <BsArrowRightShort className="w-8 h-8" />
            </motion.button>
          </motion.a>
        </li>
        <li>
          <motion.a
            href="#contact"
            className="hero-a"
            variants={linkContainer}
            initial="hidden"
            animate="show"
          >
            <span>Contact</span>
            <motion.button variants={item} initial="hidden" whileHover="show">
              <BsArrowRightShort className="w-8 h-8" />
            </motion.button>
          </motion.a>
        </li>
      </ul>
    </div>
  );
};

export default Hero;
