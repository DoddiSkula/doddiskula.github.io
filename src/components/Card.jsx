export const ProjectCard = ({ project }) => {
  return (
    <a href={project.url} target="_blank" rel="noreferrer" className="w-full">
      <Card>
        <div>
          <h5 class="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
            {project.title}
          </h5>

          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {project.description}
          </p>
          <div class="inline-flex items-center  py-2 text-sm font-medium text-center text-indigo-500 dark:text-indigo-400">
            View more
            <svg
              aria-hidden="true"
              class="w-4 h-4 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
      </Card>
    </a>
  );
};

export const Card = ({ children, ...props }) => {
  return (
    <div
      {...props}
      className="group w-full h-full bg-white hover:bg-gray-100 dark:bg-[#1f1f1f] dark:hover:bg-neutral-800 dark:hover:border-neutral-700 transition-all cursor-pointer duration-300 p-10 border shadow-lg dark:shadow-md dark:border-[#313131] rounded-3xl"
    >
      {children}
    </div>
  );
};
