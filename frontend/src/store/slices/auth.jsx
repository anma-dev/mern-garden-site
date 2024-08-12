import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

axios.defaults.baseURL = "http://127.0.0.1:5000";

let token = localStorage.getItem("auth_token") || null;
let user = null;

if (token) {
  axios.defaults.headers.common.Authorization = token;
  try {
    const response = await axios.get("/api/v1/auth/current-user");
    if (response.data.success) {
      user = response.data.user;
    }
  } catch (error) {
    localStorage.removeItem("auth_token");
    token = null;
    delete axios.defaults.headers.common.Authorization;
  }
}

export const initialState = {
  user,
  token,
  message: null,
  errors: null,
};

export const signIn = createAsyncThunk(
  "auth/signIn",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/v1/auth/user-login", data);
      if (response.data.success) {
        toast.success(response.data.message);
        const token = response.data.token;
        localStorage.setItem("auth_token", token);
        return { token };
      } else {
        toast.error(response.data.message);
        return rejectWithValue(response.data);
      }
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
export const signUp = createAsyncThunk(
  "auth/signUp",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/v1/auth/user-register", data);
      if (response.data.success) {
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
        return rejectWithValue(response.data);
      }
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signOut: (state, action) => {
      toast.success("Logout success!");
      localStorage.removeItem("auth_token");
      delete axios.defaults.headers.common.Authorization;
      state.user = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signIn.fulfilled, (state, action) => {
        // state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.message = action.payload.message;
        state.errors = action.payload.errors;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.message = action.payload.message;
        state.errors = action.payload.errors;
      });
  },
});

export const { signOut } = authSlice.actions;

export default authSlice.reducer;
