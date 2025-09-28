import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { useGoogleAnalytics } from "./hooks/useAnalytics";

/**
 * Main App component with modern layout and smooth transitions
 */
function App() {
  // Initialize Google Analytics
  useGoogleAnalytics();

  return <RouterProvider router={router} />;
}

export default App;
