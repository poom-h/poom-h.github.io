import { Outlet } from "react-router-dom";
import Header from "./Header";

/**
 * Layout component that wraps all pages with header and main content
 */
export default function Layout() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(to bottom right, #FAF3E0, white, rgba(250, 243, 224, 0.3))",
      }}
    >
      {/* Header Navigation */}
      <Header />

      {/* Main Content */}
      <main id="main-content" style={{ position: "relative", zIndex: 10 }}>
        <Outlet />
      </main>
    </div>
  );
}
