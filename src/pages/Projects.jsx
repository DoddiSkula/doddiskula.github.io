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
    description: "The classic arcade game remade in 3D with Three.js.",
    url: "https://github.com/DoddiSkula/3d-pac-man",
  },
  {
    title: "Kynfræðslukistan",
    description: "Sex Education website for teenagers and teachers.",
    url: "https://github.com/DoddiSkula/Kynfraedslukistan",
  },
  {
    title: "Sorting Visualizer",
    description: "Tool for visualizing how different sorting algorithms work.",
    url: "https://github.com/DoddiSkula/sorting-visualizer",
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
      "Includes a currency converter, cryptocurrency prices, and more.",
    url: "https://github.com/DoddiSkula/smileycoin-chrome-extension",
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
