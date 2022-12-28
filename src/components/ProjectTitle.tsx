type Props = {
  title: string;
};

const ProjectTitle = ({ title }: Props) => {
  return (
    <div className="relative h-36">
      <h2 className="project-title">{title}</h2>
      <h2 className="project-title animate-[wave_4s_infinite]">{title}</h2>
      <h2 className="project-title animate-[wave_6s_infinite]">{title}</h2>
      <h2 className="project-title animate-[wave_5s_infinite]">{title}</h2>
    </div>
  );
};

export default ProjectTitle;
