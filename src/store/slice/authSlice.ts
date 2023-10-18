import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the type for your initial state
interface AuthState {
    refreshToken: string | null;
    photoURL: string | null;
    displayName: string | null;
    email: string | null;
}

const initialState: AuthState = {
    refreshToken: null,
    photoURL: null,
    displayName: null,
    email: null,
};

export const authSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        saveUser: (state, action: PayloadAction<{ refreshToken: string | null; photoURL: string | null; displayName: string | null; email: string | null }>) => {
            const { refreshToken, photoURL, displayName, email } = action.payload;
            state.refreshToken = refreshToken;
            state.photoURL = photoURL;
            state.displayName = displayName;
            state.email = email;
        },
    },
    
});

// Action creators are generated for each case reducer function
export const { saveUser } = authSlice.actions;

export default authSlice.reducer;
