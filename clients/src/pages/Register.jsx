import { useState } from "react";
import { RxAvatar } from "react-icons/rx";
import { AiOutlineLock, AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";

const Register = () => {
  const initialState = { email: "", password: "" };
  const [formValue, setFormValue] = useState(initialState);
  const { email, password } = formValue;
  const handelForm = () => {};
  return (
    <div className="flex justify-center  ">
      <form
        method="post"
        className=" border-2 flex flex-col gap-4 justify-center items-center shadow-lg shadow-indigo-500/40 mt-11"
        style={{ width: "420px" }}
      >
        <RxAvatar className="text-4xl mt-5" />
        <p className="text-2xl font-serif">Register</p>
        <div className="flex flex-col ">
          <div className="flex justify-around">
            <label className=" ml-6">FirstName</label>
            <label className="">FirstName</label>
          </div>

          <div className="flex  justify-around  gap-3 px-2 border-b-2  border-gray-200 text-gray-400 py-2 ">
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => {
                e.target.value;
              }}
              className="h-8 hover:border-gray-100"
            />
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => {
                e.target.value;
              }}
              className="h-8 hover:border-gray-100"
            />
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
              onChange={(e) => {
                e.target.value;
              }}
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
              onChange={(e) => {
                e.target.value;
              }}
              className="h-8 hover:border-gray-100"
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
              onChange={(e) => {
                e.target.value;
              }}
              className="h-8 hover:border-gray-100"
            />
          </div>
        </div>

        <button
          type="submit"
          onSubmit={handelForm}
          className=" border-2 h-12  bg-[#1877F2] hover:bg-[#4b94f3] text-white text-xl mt-5  content-center"
          style={{ width: "240px" }}
        >
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
