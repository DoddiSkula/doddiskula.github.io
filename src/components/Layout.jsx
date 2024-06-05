import { Footer } from "./Footer";
import { ThemeToggle } from "./ThemeToggle";

export const Layout = ({ children }) => {
  return (
    <div
      id="layout"
      className="bg-white dark:bg-neutral-950 h-screen px-5 pt-16 overflow-y-auto scrollbar dark:scrollbar-dark transition-all duration-300"
    >
      <ThemeToggle />
      <div>{children}</div>
      <Footer />
    </div>
  );
};
