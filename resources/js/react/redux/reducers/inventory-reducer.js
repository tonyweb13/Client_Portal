import { createSlice } from "@reduxjs/toolkit";

const inventorySlice = createSlice({
    name: "inventory",
    initialState: {
        data: [],
        total: 0,
    },
    reducers: {
        setInventoryList: (state, action) => {
            state.data = [...action.payload.data];
            state.total = action.payload.total;
        },
    },
});

export const { setInventoryList } = inventorySlice.actions;

export default inventorySlice.reducer;
