import { ProjectCard } from "components/Card";
import Kynfraedslukistan from "assets/projects/kynfraedslukistan.png";
import Pacman from "assets/projects/pacman.png";
import Sorting from "assets/projects/sorting.png";

const projects = [
  {
    title: "📝 Kynfræðslukistan",
    description: "Sex Education website for teenagers and teachers.",
    url: "https://kynfraedslukistan.vercel.app/",
    image: Kynfraedslukistan,
  },
  {
    title: "📊 Sorting Visualizer",
    description: "Visualization tool for sorting algorithms.",
    url: "https://doddiskula.github.io/sorting-visualizer-v2/",
    image: Sorting,
  },
  {
    title: "👻 3D Pac man",
    description: "The classic arcade game remade in 3D.",
    url: "https://doddiskula.github.io/3d-pac-man/",
    image: Pacman,
  },
];

export const Projects = () => {
  return (
    <>
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </>
  );
};
