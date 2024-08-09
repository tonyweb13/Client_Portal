import { createSlice } from "@reduxjs/toolkit";

const allOrdersDetailsSlice = createSlice({
    name: "allorder",
    initialState: {
        data: [],
    },
    reducers: {
        setAllOrdersDetails: (state, action) => {
            state.data = [...action.payload];
        },
    },
});

export const { setAllOrdersDetails } =
    allOrdersDetailsSlice.actions;

export default allOrdersDetailsSlice.reducer;
