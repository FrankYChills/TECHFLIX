// reducers takes data in from action and update the state
const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      // return new state
      return {
        user: null,
        isFetching: true,
        error: false,
      };

    case "LOGIN_SUCCESS":
      return {
        // action.payload will be user here
        user: action.payload,
        isFetching: false,
        error: false,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        isFetching: false,
        error: true,
      };
    case "LOGOUT":
      return {
        user: null,
        isFetching: false,
        error: false,
      };
  }
};

export default authReducer;
