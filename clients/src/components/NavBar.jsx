import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center py-6">
      <div>
        <Link to="/">
          {" "}
          <img
            src={logo}
            alt="logo"
            className="ml-10 "
            style={{ height: "25px", width: "150px" }}
          />
        </Link>
      </div>
      <div className="mr-10 flex gap-6 ">
        <Link
          to="/register"
          className="text-lg text-[#6B88B5] hover:text-[#000000]"
        >
          Register
        </Link>
        <Link
          to="/login"
          className="text-lg text-[#6B88B5] hover:text-[#000000]"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
