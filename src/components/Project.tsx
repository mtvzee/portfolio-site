import { AiFillGithub } from 'react-icons/ai';

type Props = {
  src?: string;
  title: string;
  gitHubURL?: string;
  demoURL?: string;
};

const Project = ({ src, title, gitHubURL, demoURL }: Props) => {
  return (
    <div className="border border-black rounded-xl overflow-hidden">
      <img
        src={src ?? 'https://source.unsplash.com/random'}
        alt="チャットのサムネイル"
        className="w-full h-[250px] object-cover"
      />
      <div className="p-4 space-y-4">
        <h3 className="text-3xl">{title}</h3>
        <div className="flex h-12 space-x-4">
          <a
            href={gitHubURL ?? '#'}
            className="flex items-center justify-center w-32 bg-black text-white  rounded-md space-x-2"
          >
            <AiFillGithub className="w-7 h-7" />
            <span>GitHub</span>
          </a>
          <a
            href={demoURL ?? '#'}
            className="flex items-center justify-center w-32   rounded-md border border-black"
          >
            Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
