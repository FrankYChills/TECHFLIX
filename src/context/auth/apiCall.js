import axios from "axios";
import {
  loginFailure,
  loginSuccess,
  loginStart,
  logoutSuccess,
} from "./authAction";

//login
export const login = async (user, dispatch) => {
  // use dispath to trigger actions
  dispatch(loginStart());
  // start authentication process
  try {
    const res = await axios.post(
      process.env.REACT_APP_API_URL + "/api/auth/login",
      user
    );

    // dipatch login success
    dispatch(loginSuccess(res.data.data));
  } catch (err) {
    dispatch(loginFailure());
    console.log(err);
  }
};

// logout
export const logout = (dispatch) => {
  dispatch(logoutSuccess());
};

// Register a new user
export const signup = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(
      process.env.REACT_APP_API_URL + "/api/auth/register",
      user
    );
    // update state
    dispatch(loginSuccess(res.data.data));
  } catch (err) {
    dispatch(loginFailure());
    console.log(err);
  }
};
