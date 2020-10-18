import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Spinner from "../../components/spinner/spinner.component";
import SideBar from "../../components/sidebar/sidebar.component";

import {
  getUserDetails,
  updateUserState,
} from "../../redux/reducers/auth/auth.actions";

import { USER_STATE_UPDATE_RESET } from "../../redux/reducers/auth/auth.types";

const UpdateUser = ({ match, history }) => {
  const userId = match.params.id;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [isAdmin, setIsAdmin] = useState(false);

  const { name, email } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userUpdateState = useSelector((state) => state.userUpdateState);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = userUpdateState;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: USER_STATE_UPDATE_RESET });
      history.push("/admin/userslist");
    } else {
      if (!user.name || user._id !== userId) {
        dispatch(getUserDetails(userId));
      } else {
        setFormData({ ...formData, name: user.name, email: user.email });
        setIsAdmin(user.isAdmin);
      }
    }
  }, [dispatch, history, userId, user, successUpdate]);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUserState({ _id: userId, name, email, isAdmin }));
  };

  return (
    <>
      <div className="flex">
        <SideBar />
        <main class="w-full flex-grow p-6">
          <div class="w-full lg:w-1/2 my-6 pr-0 lg:pr-2">
            <p class="text-xl pb-6 flex items-center">
              <i class="fas fa-list mr-3"></i> Edit User
            </p>{" "}
            {loadingUpdate && <Spinner />}
            {loading ? (
              <Spinner />
            ) : (
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
                    <label class="inline-flex items-center mt-3">
                      <input
                        type="checkbox"
                        class="h-5 w-5 text-gray-600"
                        label="Is Admin"
                        id="IsAdmin"
                        name="isAdmin"
                        checked={isAdmin}
                        onChange={(e) => setIsAdmin(e.target.checked)}
                      />
                      <span class="ml-2 text-gray-700">Is Admin?</span>
                    </label>
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
            )}
          </div>
        </main>
      </div>
    </>
  );
};

export default UpdateUser;
