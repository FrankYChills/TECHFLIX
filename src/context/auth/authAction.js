// actions send params to reducer to update the state
// any function triggered will send type and payload to reducer

// LOGIN ACTIONS

export const loginStart = () => ({
  type: "LOGIN_START",
});

export const loginSuccess = (user) => ({
  type: "LOGIN_SUCCESS",
  payload: user,
});

export const loginFailure = () => ({
  type: "LOGIN_FAILURE",
});

// LOG-OUT ACTION
export const logoutSuccess = () => ({
  type: "LOGOUT",
});
