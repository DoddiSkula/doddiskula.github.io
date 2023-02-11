import { ThemeToggle } from "./ThemeToggle";

export const Layout = ({ children }) => {
  return (
    <div
      id="layout"
      className="bg-zinc-50 dark:bg-background h-screen overflow-y-auto scrollbar dark:scrollbar-dark transition-all duration-300"
    >
      <ThemeToggle />
      <div>
        <div>{children}</div>
      </div>
    </div>
  );
};
