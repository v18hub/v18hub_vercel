import { useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./utils/custom/scroll_to_Top";
import AnnouncementTicker from "./components/announcement/AnnouncementTicker";
import AppRoutes from "./routes";

function App() {
  const location = useLocation();
  const isLandingPage = location.pathname === "/" || location.pathname === "/home"; // Adjust if your landing route is different
  return (
    <div className="font-Open-Sans flex flex-col min-h-screen">
      <Navbar />
      {/* Render ticker ONLY on landing page */}
      {isLandingPage && <AnnouncementTicker />}
      <ScrollToTop />
      <main className="flex-grow">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
}

export default App;