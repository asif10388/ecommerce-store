import axios from "axios";
import { setAlert } from "../alert/alert.actions";

import {
  GET_PROFILE,
  PROFILE_ERROR,
  UPDATE_PROFILE,
  ACCOUNT_DELETED,
  CLEAR_PROFILE,
  GET_PROFILES,
  GET_REPOS,
} from "./profile.types";

//Get current users profile

export const getCurrentProfile = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/profile/me");

    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        message: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

//Get ALL users profile

export const getProfiles = () => async (dispatch) => {
  dispatch({ type: CLEAR_PROFILE });

  try {
    const res = await axios.get("/api/profile");

    dispatch({
      type: GET_PROFILES,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        message: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

//Get profile by id

export const getProfileById = (userId) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/profile/user/${userId}`);

    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        message: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

//Get users github repos

// export const getGithubRepos = (username) => async (dispatch) => {
//   //dispatch({ type: CLEAR_PROFILE });

//   try {
//     const res = await axios.get(`/api/profile/github/${username}`);

//     dispatch({
//       type: GET_REPOS,
//       payload: res.data,
//     });
//   } catch (error) {
//     dispatch({
//       type: PROFILE_ERROR,
//       payload: {
//         message: error.response.statusText,
//         status: error.response.status,
//       },
//     });
//   }
// };

//Create or update users profile

export const createProfile = (formData, history, edit = false) => async (
  dispatch
) => {
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const res = await axios.post("/api/profile", formData, config);

    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });

    dispatch(setAlert(edit ? "Profile Updated" : "Profile Created", "success"));

    if (!edit) {
      history.push("/dashboard");
    }
  } catch (error) {
    const errors = error.response.data.errors;
    console.log(errors);
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: {
        message: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

//Add Experience

export const addExperience = (formData, history) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const res = await axios.put("/api/profile/experience", formData, config);

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data,
    });

    dispatch(setAlert("Experience Added", "success"));

    history.push("/dashboard");
  } catch (error) {
    const errors = error.response.data.errors;
    console.log(errors);
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: {
        message: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

//Add Education

export const addEducation = (formData, history) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const res = await axios.put("/api/profile/education", formData, config);

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data,
    });

    dispatch(setAlert("Education Added", "success"));

    history.push("/dashboard");
  } catch (error) {
    const errors = error.response.data.errors;
    console.log(errors);
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: {
        message: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

//Delete experience
export const deleteExperience = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`/api/profile/experience/${id}`);

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data,
    });

    dispatch(setAlert("Experience Removed", "danger"));
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        message: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

//Delete education
export const deleteEducation = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`/api/profile/education/${id}`);

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data,
    });

    dispatch(setAlert("Education Removed", "danger"));
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        message: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

//Delete account and profile
export const deleteAccount = () => async (dispatch) => {
  if (window.confirm("ARE YOU SURE???")) {
    try {
      const res = await axios.delete(`/api/profile`);

      dispatch({
        type: CLEAR_PROFILE,
      });

      dispatch({
        type: ACCOUNT_DELETED,
      });

      dispatch(setAlert("Account Removed", "danger"));
    } catch (error) {
      dispatch({
        type: PROFILE_ERROR,
        payload: {
          message: error.response.statusText,
          status: error.response.status,
        },
      });
    }
  }
};