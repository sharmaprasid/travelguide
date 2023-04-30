import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center py-6">
      <div className="flex gap-12">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            style={{ marginLeft: "150px", height: "30px", width: "181px" }}
          />
        </Link>
      </div>
      <div className="mr-20 flex gap-8 ">
        <Link
          to="/tours"
          className="text-lg text-[#6B88B5] hover:text-[#000000]"
        >
          Tours
        </Link>
        <Link
          to="/blogs"
          className="text-lg text-[#6B88B5] hover:text-[#000000]"
        >
          Blogs
        </Link>
        <Link
          to="/contact"
          className="text-lg text-[#6B88B5] hover:text-[#000000]"
        >
          Contact Us
        </Link>
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
