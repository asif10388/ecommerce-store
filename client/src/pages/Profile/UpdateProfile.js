import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Spinner from "../../components/spinner/spinner.component";
import SideBar from "../../components/sidebar/sidebar.component";

import {
  getUserDetails,
  updateUserProfile,
} from "../../redux/reducers/auth/auth.actions";

const UpdateProfile = ({ location, history }) => {
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

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { success } = userUpdateProfile;

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    } else {
      if (!user.name) {
        dispatch(getUserDetails("profile"));
      } else {
        setFormData({ ...formData, name: user.name, email: user.email });
      }
    }
  }, [dispatch, history, userInfo, user]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      //setAlert("Passwords do not match", "danger", 3000);
    } else {
      dispatch(updateUserProfile({ id: user._id, name, email, password }));
    }
  };

  return (
    <>
      <div className="flex">
        <SideBar />
        <main class="w-full flex-grow p-6">
          <div class="w-full lg:w-1/2 my-6 pr-0 lg:pr-2">
            <p class="text-xl pb-6 flex items-center">
              <i class="fas fa-list mr-3"></i> Update Your Profile
            </p>
            <div class="leading-loose">
              <form
                class="p-10 bg-white rounded shadow-sm"
                onSubmit={(e) => onSubmit(e)}
              >
                <div class="">
                  <label class="block text-sm text-gray-600" for="name">
                    Name
                  </label>
                  <input
                    class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                    id="name"
                    type="text"
                    placeholder="Your Name"
                    aria-label="Name"
                    name="name"
                    value={name}
                    onChange={(e) => onChange(e)}
                  />
                </div>
                <div class="mt-2">
                  <label class="block text-sm text-gray-600" for="email">
                    Email
                  </label>
                  <input
                    class="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded"
                    id="email"
                    type="text"
                    placeholder="Your Email"
                    aria-label="Email"
                    name="email"
                    value={email}
                    onChange={(e) => onChange(e)}
                  />
                </div>
                <div class="mt-2">
                  <label class="block text-sm text-gray-600" for="password">
                    Password
                  </label>
                  <input
                    class="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded"
                    id="password"
                    type="password"
                    placeholder="Enter Password"
                    name="password"
                    value={password}
                    onChange={(e) => onChange(e)}
                  />
                </div>
                <div class="mt-2">
                  <label class="block text-sm text-gray-600" for="password">
                    Confirm Password
                  </label>
                  <input
                    class="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded"
                    id="password"
                    type="password"
                    placeholder="Enter Password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => onChange(e)}
                  />
                </div>

                <div class="mt-6">
                  <button
                    class="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default UpdateProfile;
