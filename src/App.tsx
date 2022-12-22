import { Keyboard, Mousewheel } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';

const App = () => {
  return (
    <Swiper
      tag="main"
      direction={'vertical'}
      slidesPerView={1}
      speed={1000}
      mousewheel={true}
      keyboard={true}
      modules={[Mousewheel, Keyboard]}
      className="h-screen "
    >
      <SwiperSlide id="hero" tag="section" className="h-screen">
        <Hero />
      </SwiperSlide>
      <SwiperSlide id="about" tag="section" className="h-screen">
        <About />
      </SwiperSlide>
      <SwiperSlide id="projects" tag="section" className="h-screen">
        <Projects />
      </SwiperSlide>
      <SwiperSlide id="contact" tag="section" className="h-screen">
        <Contact />
      </SwiperSlide>
    </Swiper>
  );
};

export default App;
