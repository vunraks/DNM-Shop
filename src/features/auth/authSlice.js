import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const load = () => {
  try {
    const raw = localStorage.getItem("auth_v1");
    return raw ? JSON.parse(raw) : { user: null };
  } catch {
    return { user: null };
  }
};

const save = (state) => {
  try {
    localStorage.setItem("auth_v1", JSON.stringify(state));
  } catch {}
};

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ username, password }) => {
    const res = await fetch("https://dummyjson.com/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();
    console.log("DEBUG LOGIN", res.status, data, username, password);

    if (res.status >= 400)
      throw new Error(data.message || "Invalid credentials");
    return data;
  }
);

const initial = load();

const authSlice = createSlice({
  name: "auth",
  initialState: { user: initial.user, status: "idle", error: null },
  reducers: {
    logout: (state) => {
      state.user = null;
      save(state);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
        save(state);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
