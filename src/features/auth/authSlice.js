import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: { number: "", role: "" },
  status: "idle",
  isLoading: false,
  error: null,
};

// First, create the async thunk using createAsyncThunk
export const login = createAsyncThunk(
  "auth/login",
  async ({ number, password }) => {
    // Make an API call to the local storage using axios
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => u.number === number && u.password === password
    );
    if (!user) {
      throw new Error("Invalid number or password");
    }
    // Return the user data
    return user;
  }
);

export const signup = createAsyncThunk(
  "auth/signup",
  async ({ number, password, role }) => {
    // Simulate an API call to the backend using local storage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = users.find((user) => user.number === number);

    if (existingUser) {
      throw new Error("User already exists!");
    }

    const user = {
      number,
      password,
      role,
    };
    const newUser = { ...user };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    return newUser;
  }
);

// Then, create a slice for the state and the reducers
const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    logout: (state) => {
      state.user = "";
    },
  },
  extraReducers: (builder) => {
    builder
      // .addCase(signup.pending, (state) => {
      //   state.status = "loading";
      // })
      // .addCase(signup.fulfilled, (state, action) => {
      //   state.status = "succeeded";
      //   state.user = action.payload;
      // })
      // .addCase(signup.rejected, (state, action) => {
      //   state.status = "failed";
      //   state.error = action.error.message;
      // })
      // Handle the login pending state
      .addCase(login.pending, (state) => {
        state.status = "loading";
      })
      // Handle the login fulfilled state
      .addCase(login.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
        localStorage.setItem("currentUser", JSON.stringify(action.payload));
      })
      // Handle the login rejected state
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// Export the actions and reducers
export const { logout } = authSlice.actions;
export default authSlice.reducer;
