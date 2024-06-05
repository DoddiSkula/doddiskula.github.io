import { FaArrowRight } from "react-icons/fa";

export const ProjectCard = ({ project }) => {
  return (
    <Card>
      <a href={project.url} target="_blank" rel="noreferrer" className="">
        <div className="group py-6 px-8">
          <div className="mb-6">
            <div className="flex justify-between items-center">
              <h2 class="text-xl font-bold text-gray-900 dark:text-white">
                {project.title}
              </h2>
              <FaArrowRight className="-translate-x-3 text-lg group-hover:translate-x-0 group-hover:scale-110 duration-500 transform transition-all text-gray-400 group-hover:text-gray-900 dark:text-neutral-600 group-hover:dark:text-white" />
            </div>

            <p class="mb-3 text-sm font-normal text-gray-700 dark:text-neutral-400">
              {project.description}
            </p>
          </div>

          {project.image && (
            <div
              className={`rounded-xl border border-t-2  dark:border-t dark:border-b-2 dark:border-neutral-800 bg-gray-50 dark:bg-neutral-900/60 group-hover:dark:bg-neutral-800/60 w-full h-48 sm:h-72 p-8 flex justify-center items-baseline overflow-hidden`}
            >
              <img
                src={project.image}
                alt="Project screenshot"
                className="rounded-lg outline outline-[8px] outline-gray-300/10 dark:outline-white/5 border dark:border-neutral-700 group-hover:-translate-y-2 transition-all duration-500 transform"
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
      className="group bg-white  dark:bg-neutral-950 dark:hover:bg-neutral-900 dark:hover:border-neutral-700 transition-all cursor-pointer duration-300 border border-gray-200 shadow-xl shadow-black/5 dark:shadow-md dark:border-neutral-800 rounded-2xl outline-2 outline-teal-500"
    >
      {children}
    </div>
  );
};
