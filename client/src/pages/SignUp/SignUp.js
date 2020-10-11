import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Spinner from "../../components/spinner/spinner.component";

import { register } from "../../redux/reducers/auth/auth.actions";

const SignUp = ({ location, history }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { name, email, password, confirmPassword } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);

  const { loading, error, userInfo } = userRegister;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      //setAlert("Passwords do not match", "danger", 3000);
    } else {
      dispatch(register({ name, email, password }));
    }
  };

  return (
    <>
      {error && <h1>{error}</h1>}
      {loading && <Spinner />}
      <div className="w-full flex flex-wrap">
        <div className="w-full md:w-1/2 flex flex-col">
          <div className="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-12">
            <a
              href="https://unsplash.com/"
              className="bg-black text-white font-bold text-xl p-4"
            >
              Logo
            </a>
          </div>

          <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
            <p className="text-center text-3xl">Create a new account.</p>
            <form
              className="flex flex-col pt-3 md:pt-8"
              onSubmit={(e) => onSubmit(e)}
            >
              <div className="flex flex-col pt-4">
                <label for="name" className="text-lg">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="John Smith"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                  name="name"
                  value={name}
                  onChange={(e) => onChange(e)}
                />
              </div>

              <div className="flex flex-col pt-4">
                <label for="email" className="text-lg">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="your@email.com"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                  name="email"
                  value={email}
                  onChange={(e) => onChange(e)}
                />
              </div>

              <div className="flex flex-col pt-4">
                <label for="password" className="text-lg">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                  name="password"
                  value={password}
                  onChange={(e) => onChange(e)}
                />
              </div>

              <div className="flex flex-col pt-4">
                <label for="confirm-password" className="text-lg">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirm-password"
                  placeholder="Password"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => onChange(e)}
                />
              </div>

              <input
                type="submit"
                value="Register"
                className="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8"
              />
            </form>
            <div className="text-center pt-12 pb-12">
              <p>
                Already have an account?{" "}
                <Link
                  to={redirect ? `/login?redirect=${redirect}` : "/login"}
                  className="underline font-semibold"
                >
                  Log in here.
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="w-1/2">
          <img
            className="object-cover w-full h-full hidden md:block"
            alt="mic"
            src="https://images.unsplash.com/photo-1585102651425-8caf7848e44b?ixlib=rb-1.2.1&auto=format&fit=crop&w=501&q=80"
          />
        </div>
      </div>
    </>
  );
};

export default SignUp;
