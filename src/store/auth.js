
import { createSlice } from "@reduxjs/toolkit";
const authState = { isAuthenticated: false };


const authSlice = createSlice({
    name: "authorization",
    initialState: authState,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        }
    }
});

export const authActions = authSlice.actions
export default authSlice.reducer;