export const ProjectCard = ({ project }) => {
  return (
    <a href={project.url} target="_blank" rel="noreferrer">
      <div className="max-w-sm rounded-lg dark:hover:bg-primary hover:bg-zinc-200 ring-teal-500 dark:ring-indigo-400 focus:ring-1">
        <div class="p-5">
          <h5 class="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
            {project.title}
          </h5>

          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {project.description}
          </p>
          <div class="inline-flex items-center  py-2 text-sm font-medium text-center text-emerald-600 dark:text-indigo-400">
            View more
            <svg
              aria-hidden="true"
              class="w-4 h-4 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </a>
  );
};
