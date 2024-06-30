import { FaArrowRight } from "react-icons/fa";

export const ProjectCard = ({ project }) => {
  return (
    <div className="group bg-white hover:bg-gray-100 dark:bg-neutral-950 dark:hover:bg-neutral-900 transition-all cursor-pointer duration-300 dark:border-neutral-800 rounded-lg">
      <a href={project.url} target="_blank" rel="noreferrer">
        <div className="group p-4">
          <div className="mb-4">
            <div className="flex justify-between items-center mb-1.5">
              <h2 class="text-base font-semibold text-gray-900 dark:text-white">
                {project.title}
              </h2>
              <FaArrowRight className="size-3 -translate-x-2 text-lg group-hover:translate-x-0 group-hover:scale-105 duration-500 transform transition-all text-gray-400 group-hover:text-gray-900 dark:text-neutral-600 group-hover:dark:text-white" />
            </div>
            <p class="text-xs font-normal text-gray-700 dark:text-neutral-400">
              {project.description}
            </p>
          </div>

          {project.image && (
            <div
              className={`rounded-lg border border-t-2  dark:border-t dark:border-b-2 dark:border-neutral-800 bg-gray-50 dark:bg-neutral-900/60 group-hover:dark:bg-neutral-800/60 w-full h-56 p-3 flex justify-center items-baseline overflow-hidden`}
            >
              <img
                src={project.image}
                alt="Project screenshot"
                className="rounded-md object-cover outline-gray-300/10 dark:outline-white/5 border dark:border-neutral-800 transition-all duration-500 transform h-full w-full"
              />
            </div>
          )}
        </div>
      </a>
    </div>
  );
};
