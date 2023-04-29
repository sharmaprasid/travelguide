import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <Outlet />
    </div>
  );
};

export default Home;
