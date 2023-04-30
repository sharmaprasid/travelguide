import { useEffect, useState } from "react";
import { RxAvatar } from "react-icons/rx";
import { AiOutlineLock, AiOutlineMail } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { googleSignin, login } from "../store/features/authSlice";
import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";

const Login = () => {
  const initialState = { email: "", password: "" };
  const [formValue, setFormValue] = useState(initialState);
  const { email, password } = formValue;
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
    if (email && password) {
      dispatch(login({ formValue, navigate, toast }));
    }
  };
  const googleSuccess = (resp) => {
    const email = resp?.profileObj?.email;
    const name = resp?.profileObj?.name;
    const token = resp?.tokenId;
    const googleId = resp?.googleId;
    const result = { email, name, token, googleId };
    dispatch(googleSignin({ result, navigate, toast }));
  };
  const googleFailure = (error) => {
    toast.error(error);
  };
  return (
    <div className="flex justify-center  ">
      <form
        onSubmit={handelForm}
        method="post"
        className=" border-2 flex flex-col gap-4 justify-center items-center shadow-lg shadow-indigo-500/40 mt-11"
        style={{ width: "420px" }}
      >
        <RxAvatar className="text-4xl mt-8" />
        <p className="text-2xl font-serif">LOGIN</p>
        <div className="flex flex-col ">
          <label className="mb-4">Email</label>
          <div className="flex  gap-3 px-2 border-b-2 border-gray-200  py-2 ">
            <AiOutlineMail className="text-xl mt-2 text-gray-400" />
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
          <div className="flex  gap-3 px-2 border-b-2  border-gray-200  py-2 ">
            <AiOutlineLock className="text-xl mt-2 text-gray-400" />
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleInputChange}
              className="h-8 hover:border-gray-100"
            />
          </div>
        </div>
        <button
          type="submit"
          className=" border-2 h-12  bg-[#1877F2] hover:bg-[#4b94f3] text-white text-xl mt-5  content-center"
          style={{ width: "240px" }}
        >
          {loading && <div className="animate-spin h-5 w-5 mr-3"></div>}
          Login
        </button>
        <GoogleOAuthProvider clientId="556243839381-hfr5ann55e53n7cjbp7pj46k88hid2e2.apps.googleusercontent.com">
          <GoogleLogin onSuccess={googleSuccess} onError={googleFailure} />;
        </GoogleOAuthProvider>

        <p className="mb-6 text-gray-600">
          Don&apos;t have account? <Link to="/register"> Signup</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
