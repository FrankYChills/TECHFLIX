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
      "http://localhost:3500" + "/api/auth/login",
      user
    );

    // dipatch login success o
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
