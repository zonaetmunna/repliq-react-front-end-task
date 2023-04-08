/* import { authStart, authSuccess, authFailure, logout } from "./authSlice";
import axios from "axios";

export const login = (credentials) => async (dispatch) => {
  dispatch(authStart());
  try {
    // Simulate a server request with a delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Check the credentials against local storage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) =>
        u.email === credentials.email && u.password === credentials.password
    );

    if (user) {
      // Authenticate the user
      localStorage.setItem("currentUser", JSON.stringify(user));
      dispatch(authSuccess(user));
    } else {
      // Invalid credentials
      dispatch(authFailure("Invalid email or password"));
    }
  } catch (error) {
    dispatch(authFailure(error.message));
  }
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("currentUser");
  dispatch(logout());
};
 */
