import { Layout } from "components/Layout";
import { ThemeProvider } from "contexts/ThemeContext";
import { Hero } from "pages/Hero";
import { Projects } from "pages/Projects";

const AppWrapper = () => {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
};

export const App = () => {
  return (
    <Layout>
      <Hero />
      <Projects />
    </Layout>
  );
};

export default AppWrapper;
