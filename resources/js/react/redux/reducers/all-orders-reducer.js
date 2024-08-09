import { createSlice } from "@reduxjs/toolkit";

const allOrdersSlice = createSlice({
    name: "allorder",
    initialState: {
        data: [],
        total: 0,
        loading: false,
    },
    reducers: {
        setAllOrdersList: (state, action) => {
            state.data = [...action.payload.data];
            state.total = action.payload.total;
        },
        setAllOrdersLoading: (state, action) => {
            state.loading = action.payload;
        }
    },
});

export const { setAllOrdersList, setAllOrdersLoading } = allOrdersSlice.actions;

export default allOrdersSlice.reducer;
