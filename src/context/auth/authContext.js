import { createContext, useEffect, useReducer } from "react";
import authReducer from "./authReducer";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isFetching: false,
  error: false,
};

export const authContext = createContext(initialState);

export const AuthContextProvider = ({ children }) => {
  // define reducer
  const [state, dispatch] = useReducer(authReducer, initialState);

  // save the user in cache
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  //   provide state accces  to children
  return (
    <authContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </authContext.Provider>
  );
};
