import { useEffect, useState } from "react";
import { RxAvatar } from "react-icons/rx";
import { AiOutlineLock, AiOutlineMail } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../store/features/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const Register = () => {
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [formValue, setFormValue] = useState(initialState);
  const { firstName, lastName, email, password, confirmPassword } = formValue;
  const { loading, error } = useSelector((state) => ({ ...state.auth }));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    error && toast.error(error);
  }, [error]);
  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handelForm = (e) => {
    e.preventDefault();
    if (password != confirmPassword) {
      return toast.error("Password doesn't match");
    }
    if (email && password && firstName && lastName && confirmPassword) {
      dispatch(register({ formValue, navigate, toast }));
    }
  };

  return (
    <div className="flex justify-center mb-8  ">
      <form
        method="post"
        className=" border-2 flex flex-col gap-4 justify-center items-center shadow-lg shadow-indigo-500/40 mt-11"
        style={{ width: "420px" }}
      >
        <RxAvatar className="text-4xl mt-5" />
        <p className="text-2xl font-serif">Register</p>
        <div className="flex flex-col justify-center ">
          <div className="flex  justify-between gap-5     py-2 ">
            <div>
              <label className="mr-4 ">First Name</label>
              <div
                className=" border-b-2   border-gray-200 text-gray-400"
                style={{ width: "106px" }}
              >
                <input
                  type="text"
                  name="lastName"
                  value={lastName}
                  onChange={handleInputChange}
                  className="h-8 hover:border-gray-100"
                  style={{ width: "106px" }}
                />
              </div>
            </div>

            <div>
              <label className="">Last Name</label>
              <div
                className=" border-b-2  border-gray-200"
                style={{ width: "106px" }}
              >
                <input
                  type="text"
                  name="firstName"
                  value={firstName}
                  onChange={handleInputChange}
                  className="h-8 hover:border-gray-100"
                  style={{ width: "106px" }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col ">
          <label className="mb-4">Email</label>
          <div className="flex  gap-3 px-2 border-b-2 border-gray-200 text-gray-400 py-2 ">
            <AiOutlineMail className="text-xl mt-2" />
            <input
              type="text"
              name="email"
              value={email}
              placeholder="johndoe@gmail.com"
              onChange={handleInputChange}
              className="h-8"
            />
          </div>
        </div>
        <div className="flex flex-col ">
          <label className="mb-4">Password</label>
          <div className="flex  gap-3 px-2 border-b-2  border-gray-200 text-gray-400 py-2 ">
            <AiOutlineLock className="text-xl mt-2" />
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleInputChange}
              className="h-8 hover:border-gray-100"
            />
          </div>
        </div>
        <div className="flex flex-col ">
          <label className="mb-4"> Confirm Password</label>
          <div className="flex  gap-3 px-2 border-b-2  border-gray-200 text-gray-400 py-2 ">
            <AiOutlineLock className="text-xl mt-2" />
            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleInputChange}
              className="h-8 hover:border-gray-100"
            />
          </div>
        </div>

        <button
          type="submit"
          className=" border-2 h-12  bg-[#1877F2] hover:bg-[#4b94f3] text-white text-xl mt-5  content-center"
          style={{ width: "240px" }}
          onClick={handelForm}
        >
          {loading && <div className="animate-spin h-5 w-5 mr-3"></div>}
          Register
        </button>
        <p className="mb-6 text-gray-600">
          <Link to="/login"> Already have account? Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
