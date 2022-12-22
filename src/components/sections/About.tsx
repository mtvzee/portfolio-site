import Skills from '../Skills';

const About = () => {
  return (
    <div className="container">
      <div className="absolute top-1/2 -translate-y-1/2 left-0">
        <h2>TAKUYA MATSUTANI</h2>
        <p>1993年、熊本県出身</p>
        <p>現在、フロントサイドエンジニアになるために勉強中です。</p>
      </div>
      <Skills />
    </div>
  );
};

export default About;
