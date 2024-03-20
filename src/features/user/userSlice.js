import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        token: null,
        data: null,
    },
    reducers: {
        setTokenRedux: (state, action) => {
            return {
                ...state,
                token: action.payload,
            };
        },

        setUserRedux: (state, action) => {
            return {
                ...state,
                data: action.payload,
            };
        },

        logout: (state, action) => {
            return {
                token: null,
                data: null,
            };
        },
    },
});

export { userSlice };
export default userSlice.reducer;
export const { setTokenRedux, setUserRedux, logout } = userSlice.actions;
