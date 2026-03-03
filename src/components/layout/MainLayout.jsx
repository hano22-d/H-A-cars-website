import Footer from "./Footer";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import CarHero from "./heroNavbar";
import { UseHeroContext } from "../../context/heroContext";

function MainLayout() {

  const {progress} = UseHeroContext()

  return (
      <div>
        <CarHero/>
        <Navbar />
        <main style={{opacity: progress}}>
        <Outlet/>
        </main>
        <Footer />
      </div>
  );
}
export default MainLayout;
