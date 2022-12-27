import { Keyboard, Mousewheel } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Project from '../components/Project';
import { projectData } from '../data/projectData';

const Home = () => {
  return (
    <>
      <Header />
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
        {projectData.map((data) => (
          <SwiperSlide key={data.id} tag="section" className="h-screen">
            <Project id={data.id} title={data.title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Home;
