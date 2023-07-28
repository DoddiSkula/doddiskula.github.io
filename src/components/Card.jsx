import { FaArrowRight } from "react-icons/fa";

export const ProjectCard = ({ project }) => {
  return (
    <Card>
      <a href={project.url} target="_blank" rel="noreferrer" className="">
        <div className="group p-4">
          <div className="px-3 pt-3 mb-4">
            <div className="flex justify-between items-center mb-1">
              <h5 class="text-xl font-semibold text-gray-900 dark:text-white">
                {project.title}
              </h5>
              <FaArrowRight className="-translate-x-3 text-lg group-hover:translate-x-0 group-hover:scale-110 duration-500 transform transition-all text-indigo-500 dark:text-indigo-400" />
            </div>

            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {project.description}
            </p>
          </div>

          {project.image && (
            <div
              className={`rounded-2xl bg-gradient-to-t from-purple-400 to-indigo-400 w-full h-48 sm:h-72 px-5 pt-6 flex justify-center items-baseline overflow-hidden`}
            >
              <img
                src={project.image}
                alt="Project screenshot"
                className="rounded-xl group-hover:-translate-y-2 transition-all duration-500 transform"
              />
            </div>
          )}
        </div>
      </a>
    </Card>
  );
};

export const Card = ({ children, ...props }) => {
  return (
    <div
      {...props}
      className="group overflow-hidden bg-white hover:bg-gray-50  dark:bg-[#1f1f1f] dark:hover:bg-neutral-800 dark:hover:border-neutral-700 transition-all cursor-pointer duration-300 border shadow-lg dark:shadow-md dark:border-[#313131] rounded-3xl"
    >
      {children}
    </div>
  );
};
