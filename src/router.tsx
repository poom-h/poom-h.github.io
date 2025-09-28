import { createHashRouter } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About";
import VanillaInfo from "./pages/VanillaInfo";
import Survey from "./pages/Survey";
import NotFound from "./pages/NotFound";

// Using HashRouter for GitHub Pages compatibility
export const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <About /> },
      { path: "/about", element: <About /> },
      { path: "/vanilla", element: <VanillaInfo /> },
      { path: "/survey", element: <Survey /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
