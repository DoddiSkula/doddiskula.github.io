import MemojiLaptop from "assets/memoji-laptop.png";

export const Header = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="w-4/5 flex flex-row items-center ">
        <div className="flex-1">
          <h1 className="font-display text-slate-700 dark:text-gray-200 text-9xl relative z-40">
            Þórður
          </h1>
          <h1 className="font-display text-slate-600  dark:text-secondary opacity-10 dark:opacity-30 text-9xl -mt-28 relative z-30">
            Þórður
          </h1>
          <h1 className="font-display text-slate-600 dark:text-secondary opacity-5 dark:opacity-10  text-9xl -mt-28 relative z-20">
            Þórður
          </h1>
          <h1 className="font-display text-slate-700 dark:text-gray-200 text-9xl relative z-40">
            Skúlason
          </h1>
          <h1 className="font-display text-slate-600  dark:text-secondary opacity-10 dark:opacity-30 text-9xl -mt-28 relative z-30">
            Skúlason
          </h1>
          <h1 className="font-display text-slate-600 dark:text-secondary opacity-5 dark:opacity-10  text-9xl -mt-28 relative z-20">
            Skúlason
          </h1>
        </div>
        <div className="flex items-center justify-center  p-4 rounded-lg pb-12">
          <img src={MemojiLaptop} alt="avatar" width={350} height={350} />
        </div>
      </div>
    </div>
  );
};
