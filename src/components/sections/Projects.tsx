import Project from '../Project';

const Projects = () => {
  return (
    <div className="container">
      <h2 className="text-9xl tracking-[12px] mb-4">Projects</h2>
      <div className="grid grid-cols-3 gap-x-6 absolute w-full top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
        <Project
          title="Chat App"
          gitHubURL="https://github.com/mtvzee/chat-app-react-ts"
          demoURL="https://chat-app-react-ts.vercel.app/"
        />
        <Project title="Dashboard" gitHubURL="" />
        <Project
          title="Netflix clone"
          gitHubURL="https://github.com/mtvzee/netflix-clone"
        />
      </div>
    </div>
  );
};

export default Projects;
