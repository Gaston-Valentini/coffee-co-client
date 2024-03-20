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
    },
});

export { userSlice };
export default userSlice.reducer;
export const { setTokenRedux, setUserRedux } = userSlice.actions;
