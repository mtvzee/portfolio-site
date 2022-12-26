import { motion, Variants } from 'framer-motion';

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
    </div>
  );
};

export default Hero;
