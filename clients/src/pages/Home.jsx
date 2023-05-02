import { Outlet } from "react-router-dom";

import NavBar from "../components/NavBar/NavBar";
import ImageSwiper from "../components/swiper/ImageSwiper";
import HeroComponent_1 from "../components/Hero/HeroComponent_1";

const Home = () => {
  return (
    <>
      <div>
        <div>
          <NavBar />
        </div>
        <Outlet />
      </div>
      <div>
        <ImageSwiper />
        <HeroComponent_1 />
      </div>
    </>
  );
};

export default Home;
