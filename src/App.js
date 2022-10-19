import { Route , Routes} from "react-router-dom";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Drawer from "./components/Drawer";
import Project from "./pages/Project"
import { useState } from "react";
import 'aos/dist/aos.css';
import AOS from "aos";

const App = () => {
  const [isSidebarOpen, setSidebar] = useState(false);
  AOS.init({ duration: 2000 })
  return (
    <main className="font-overpass">
      <Navigation setStateSidebar={setSidebar} stateSidebar={isSidebarOpen} />
      <Drawer setStateSidebar={setSidebar} stateSidebar={isSidebarOpen} />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/projects/:id" element={<Project />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
