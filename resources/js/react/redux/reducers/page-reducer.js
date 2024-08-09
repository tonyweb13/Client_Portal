import { createSlice } from "@reduxjs/toolkit";

const pageSlice = createSlice({
    name: "page",
    initialState: {
        title: "",
    },
    reducers: {
        setPageInfo: (state, action) => {
            state.title = action.payload.title;
        },
    },
});

export const { setPageInfo } = pageSlice.actions;

export default pageSlice.reducer;
