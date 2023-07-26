import { Layout } from "components/Layout";
import { ThemeProvider } from "contexts/ThemeContext";
import { Main } from "pages";

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
      <Main />
    </Layout>
  );
};

export default AppWrapper;
