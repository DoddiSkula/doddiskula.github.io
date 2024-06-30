export const NameWidget = ({ emoji }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="bg-gray-100 border dark:border-neutral-800 dark:bg-neutral-900 p-2 rounded-full size-20">
        <img src={emoji} width={"100%"} alt="avatar" />
      </div>
      <h1 className="font-semibold text-gray-950 dark:text-gray-100 text-2xl">
        Þórður Skúlason
      </h1>
    </div>
  );
};
