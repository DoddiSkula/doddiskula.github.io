import { useContext } from "react";
import { ThemeContext } from "contexts/ThemeContext";
import { ReactComponent as Moon } from "assets/moon.svg";
import { ReactComponent as Sun } from "assets/sun.svg";

export const ThemeToggle = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <div
      className={`absolute top-10 right-10 transition-all duration-1000 z-50`}
    >
      <button
        className="group text-gray-400 bg-gray-100 dark:bg-neutral-800 shadow-xl dark:shadow-lg border dark:border-[#313131] dark:text-neutral-600  hover:text-indigo-500 dark:hover:bg-neutral-800 dark:hover:text-amber-500 rounded-full p-4 transition-all duration-300"
        onClick={() => setDarkMode((prev) => !prev)}
      >
        {!darkMode && <Moon height="26px" width="26px" />}
        {darkMode && <Sun height="26px" width="26px" />}
      </button>
    </div>
  );
};
