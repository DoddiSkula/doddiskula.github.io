import { useContext } from "react";
import { ThemeContext } from "contexts/ThemeContext";
import { ReactComponent as Moon } from "assets/moon.svg";
import { ReactComponent as Sun } from "assets/sun.svg";

export const ThemeToggle = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <div className={`absolute top-4 right-4 transition-all duration-1000 z-50`}>
      <button
        className="group text-gray-500 bg-white dark:bg-neutral-950 border dark:border-neutral-800 shadow-sm dark:text-neutral-600 hover:text-gray-900 hover:bg-gray-200 dark:hover:bg-neutral-800 dark:hover:text-amber-500 rounded-lg size-10 flex items-center justify-center transition-all duration-300"
        onClick={() => setDarkMode((prev) => !prev)}
      >
        {!darkMode && <Moon height="16px" width="16px" />}
        {darkMode && <Sun height="16px" width="16px" />}
      </button>
    </div>
  );
};
