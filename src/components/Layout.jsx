import { ThemeToggle } from "./ThemeToggle";

export const Layout = ({ children }) => {
  return (
    <div
      id="layout"
      className="bg-gray-200 dark:bg-neutral-900 h-screen p-20 overflow-y-auto scrollbar dark:scrollbar-dark transition-all duration-300"
    >
      <ThemeToggle />
      <div>
        <div>{children}</div>
      </div>
    </div>
  );
};
