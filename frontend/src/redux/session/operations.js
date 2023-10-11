import { setToken, resetSession } from "./sessionSlice";
import { resetFinance } from "../../redux/finance/financeSlice";
import {
  resetGlobal,
  closeModalLogout,
} from "../../redux/global/globalSlice.js";

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const api = axios.create({
  baseURL: "https://wallet.dupawklamerkach.pl",
});

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const signUp = createAsyncThunk(
  "session/signUp",
  async (credentials, thunkAPI) => {
    try {
      const res = await api.post("/api/auth/sign-up", credentials);
      setAuthHeader(res.data.user.accessToken);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signIn = createAsyncThunk(
  "session/signIn",
  async (credentials, thunkAPI) => {
    try {
      const res = await api.post("/api/auth/sign-in", credentials);
      setAuthHeader(res.data.user.accessToken);
      localStorage.setItem("accessToken", res.data.user.accessToken);
      thunkAPI.dispatch(setToken(res.data.user.accessToken));
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signOut = createAsyncThunk(
  "session/signOut",
  async (token, { dispatch }) => {
    // console.log("singout token", token);
    try {
      await api.post(
        "/api/auth/sign-out",
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      // console.log("signOut successful");
      dispatch(resetSession());
      // console.log("resetSession");
      dispatch(resetGlobal());
      // console.log("resetGlobal");
      dispatch(resetFinance());
      // console.log("resetFinance");
      clearAuthHeader();
    } catch (error) {
      toast.error("Oops something went wrong during logout.");
      dispatch(closeModalLogout());
      throw error;
    }
  }
);

export const refreshUser = createAsyncThunk(
  "session/refreshUser",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.user.accessToken;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }

    try {
      setAuthHeader(persistedToken);
      const res = await api.get("api/users/current");
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const refreshUser = createAsyncThunk(
//   "user/refreshUser",
//   async (refreshToken, thunkAPI) => {
//     try {
//       const response = await api.post("/api/auth/refresh", {
//         refreshToken,
//       });
//       const newAccessToken = response.data.accessToken;
//       return newAccessToken;
//     } catch (error) {
//       return thunkAPI.rejectWithValue("Token refresh error", error.message);
//     }
//   }
// );
