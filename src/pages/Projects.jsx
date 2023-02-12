import { ProjectCard } from "components/Card";

const projects = [
  {
    title: "Hidden Traitor",
    description:
      "Hidden Traitor is an online multiplayer game where players work together to expose the traitor.",
    url: "https://github.com/DoddiSkula/hidden-traitor",
  },
  {
    title: "3D Pac man",
    description: "The classic arcade game remade in 3D with three.js.",
    url: "https://github.com/DoddiSkula/3d-pac-man",
  },
  {
    title: "Sorting Visualizer",
    description: "Tool for visualizing how different sorting algorithms work.",
    url: "https://github.com/DoddiSkula/sorting-visualizer",
  },
  {
    title: "Note Share",
    description:
      "Simple note sharing platform for students. Upload your personal notes or view notes from fellow students.",
    url: "https://github.com/DoddiSkula/NoteShare",
  },
  {
    title: "Weather Map",
    description:
      "A simple interactive map of the world showing live weather in cities around the world.",
    url: "https://github.com/DoddiSkula/weather-map",
  },
  {
    title: "SmileyCoin Chrome extension",
    description:
      "Chrome extension for the cryptocurrency SmileyCoin (SMLY). Includes a currency converter, cryptocurrency prices, and more.",
    url: "https://github.com/DoddiSkula/smileycoin-chrome-extension",
  },
];

export const Projects = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="h-fit max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 ">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};
