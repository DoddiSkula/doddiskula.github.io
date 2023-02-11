import { Layout } from "components/Layout";
import { ThemeProvider } from "contexts/ThemeContext";
import { Header } from "pages/Header";
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
      <Header />
      <Projects />
    </Layout>
  );
};

export default AppWrapper;
