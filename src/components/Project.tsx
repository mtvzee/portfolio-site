import { AiFillGithub } from 'react-icons/ai';
import ProjectTitle from './ProjectTitle';

type Props = {
  id: number;
  title: string;
  thumbnail?: string;
  gitHubURL?: string;
  siteURL?: string;
};

const Project = ({ id, title, thumbnail, gitHubURL, siteURL }: Props) => {
  return (
    <div className="container">
      <div className="absolute top-1/2 -translate-y-1/2 left-0 z-20 w-full">
        <ProjectTitle title={title} />
        <div className="mt-8 flex space-x-4">
          <a
            href={gitHubURL ?? ''}
            className="flex items-center justify-center bg-black text-white text-2xl w-[150px] py-2 rounded-md space-x-2"
          >
            <AiFillGithub />
            <span>GitHub</span>
          </a>
          <a
            href={siteURL ?? ''}
            className="block border border-black w-[150px] text-center text-2xl py-2 rounded-md uppercase"
          >
            visit
          </a>
        </div>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-0">
        <img
          src={thumbnail ?? 'https://source.unsplash.com/random'}
          alt="サムネイル"
          className="w-[810px] h-[500px] object-cover shadow-lg"
        />
        <span className="absolute bottom-0 right-0 text-9xl stroke">
          {id < 10 && 0}
          {id}
        </span>
      </div>
    </div>
  );
};

export default Project;
