import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        login:(state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
            state.loading = false;
            state.error = null;
        },
        logout:(state) =>{
            state.user = null;
            state.isAuthenticated = false;
        },
        setError:(state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
        setLoading:(state, action) => {
            state.loading = action.payload;
        },
    }
})
export const { login, logout, setError, setLoading } = authSlice.actions;
export default authSlice.reducer;