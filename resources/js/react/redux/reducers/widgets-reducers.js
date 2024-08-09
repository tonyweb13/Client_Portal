import { createSlice } from "@reduxjs/toolkit";

const widgetsSlice = createSlice({
    name: "widgets",
    initialState: {
        widgets: [],
    },
    reducers: {
        setWidgets: (state, action) => {
            state.widgets = action.payload;
        },
    },
});

export const { setWidgets } = widgetsSlice.actions;

export default widgetsSlice.reducer;
