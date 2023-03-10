import { FaLinkedin, FaGithub, FaDribbble } from "react-icons/fa";
import MemojiSmile from "assets/smile.png";
import MemojiWink from "assets/wink.png";
import MemojiThumbsup from "assets/thumbsup.png";
import MemojiLaptop from "assets/laptop.png";
import { useState } from "react";

export const Hero = () => {
  const [hoverState, setHoverState] = useState(0);

  const getMemoji = () => {
    switch (hoverState) {
      case 0:
        return MemojiSmile;
      case 1:
        return MemojiThumbsup;
      case 2:
        return MemojiLaptop;
      case 3:
        return MemojiWink;
      default:
        return MemojiSmile;
    }
  };

  return (
    <div className="h-screen w-full">
      <div className="h-full max-w-7xl mx-auto flex flex-col justify-center items-center">
        <div className="transition-all w-28 xl:w-56 lg:w-48 md:w-44 cursor-pointer hover:scale-105">
          <img
            src={getMemoji()}
            width={"100%"}
            alt="avatar"
            onMouseOver={() => setHoverState(0)}
          />
        </div>

        <h1 className="transition-all font-display dark:text-secondary 2xl:text-[7rem] xl:text-[6rem] lg:text-[5rem] md:text-[4rem] text-[3rem] bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-teal-400 dark:text-transparent dark:bg-gradient-to-r dark:from-indigo-500 dark:to-indigo-400">
          Þórður Skúlason
        </h1>
        <h2 className="font-medium text-zinc-300 dark:text-secondary  lg:text-[1.5rem] md:text-[1.3rem] text-[0.9rem] mb-8 tracking-wider">
          <span className="text-zinc-200 dark:text-slate-800">{"< "}</span>
          <span
            className={
              hoverState === 1 || hoverState === 2
                ? "text-zinc-600 dark:text-zinc-300 decoration-slice underline dark:decoration-indigo-400 decoration-teal-600"
                : ""
            }
          >
            Front-end developer
          </span>
          <span>{" & "}</span>
          <span
            className={
              hoverState === 1 || hoverState === 3
                ? "text-zinc-600 dark:text-zinc-300 decoration-slice underline dark:decoration-indigo-400 decoration-teal-600"
                : ""
            }
          >
            UI/UX designer
          </span>
          <span className="text-zinc-200 dark:text-slate-800">{" />"}</span>
        </h2>

        <div className="flex gap-6">
          <a
            href="https://www.linkedin.com/in/%C3%BE%C3%B3r%C3%B0ur-sk%C3%BAlason/"
            target={"_blank"}
            rel="noreferrer"
            className="text-zinc-300 text-[2rem] md:text-[3rem] hover:text-zinc-600 dark:text-secondary dark:hover:text-zinc-300  hover:scale-110 transition-all"
            onMouseOver={() => setHoverState(1)}
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/DoddiSkula"
            target={"_blank"}
            rel="noreferrer"
            className="text-zinc-300 text-[2rem] md:text-[3rem] hover:text-zinc-600 dark:text-secondary dark:hover:text-zinc-300  hover:scale-110 transition-all"
            onMouseOver={() => setHoverState(2)}
          >
            <FaGithub />
          </a>

          <a
            href="https://dribbble.com/ThordurS"
            target={"_blank"}
            rel="noreferrer"
            className="text-zinc-300 text-[2rem] md:text-[3rem] hover:text-zinc-600 dark:text-secondary dark:hover:text-zinc-300  hover:scale-110 transition-all"
            onMouseOver={() => setHoverState(3)}
          >
            <FaDribbble />
          </a>
        </div>
      </div>
    </div>
  );
};
