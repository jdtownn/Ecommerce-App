import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "../Context/AuthProvider";

import axios from "../api/axios";
const LOGIN_URL = "/auth";

const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ user, pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data));
      //console.log(JSON.stringify(response));
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ user, pwd, roles, accessToken });
      setUser("");
      setPwd("");
      setSuccess(true);
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      {success ? (
        <section className="max_padd_container flexCenter flex-col pt-32">
          <h1>You are logged in!</h1>
          <br />
          <p>
            <a href="#">Go to Home</a>
          </p>
        </section>
      ) : (
        <section className="max_padd_container flexCenter flex-col pt-32">
          <div className="max-w-[560px] h-[600px] bg-white m-auto px-14 py-10 rounded-md">
            <p
              ref={errRef}
              className={errMsg ? "errmsg" : "offscreen"}
              aria-live="assertive">
              {errMsg}
            </p>
            <h1 className="h3">Sign In</h1>
            <form className="flex flex-col gap-4 mt-8" onSubmit={handleSubmit}>
              <label htmlFor="username">Username:</label>
              <input
                className="h-14 w-full pl-6 bg-slate-900/10 outline-none rounded-xl"
                type="text"
                id="username"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
              />

              <label htmlFor="password">Password:</label>
              <input
                className="h-14 w-full pl-6 bg-slate-900/10 outline-none rounded-xl"
                type="password"
                id="password"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
              />
              <button className="btn_dark_rounded my-5 w-full !rounded-md">
                Sign In
              </button>
            </form>
            <p className="text-black font-bold">
              Need an Account?
              <br />
              <span className="line">
                {/*put router link here*/}
                <a className="text-secondary underline cursor-pointer" href="#">
                  Sign Up
                </a>
              </span>
            </p>
          </div>
        </section>
      )}
    </>
  );
};

export default Login;
