import Header from '../components/Header';
import Skills from '../components/Skills';

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Header />
      <div className="container pt-24 md:flex md:items-center md:justify-around flex-col md:flex-row">
        <div className="mb-8 md:mb-0">
          <h1 className="text-5xl">About</h1>
          <p className="mt-8">Takuya Matsutani</p>
          <p>
            1993年、熊本県出身
            <br />
            現在、フロントエンドエンジニアになるために勉強中
          </p>
        </div>
        <Skills />
      </div>
    </div>
  );
};

export default About;
