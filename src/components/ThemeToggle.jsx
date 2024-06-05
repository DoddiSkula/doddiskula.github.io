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
        className="group text-gray-500 bg-white dark:bg-neutral-950 border dark:border-neutral-800 shadow-sm dark:text-neutral-600 hover:text-gray-900 hover:bg-gray-200 dark:hover:bg-neutral-800 dark:hover:text-amber-500 rounded-full size-12 flex items-center justify-center transition-all duration-300"
        onClick={() => setDarkMode((prev) => !prev)}
      >
        {!darkMode && <Moon height="20px" width="20px" />}
        {darkMode && <Sun height="20px" width="20px" />}
      </button>
    </div>
  );
};
