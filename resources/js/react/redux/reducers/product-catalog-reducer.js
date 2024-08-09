import { createSlice } from "@reduxjs/toolkit";

const productCatalogSlice = createSlice({
    name: "product-catalog",
    initialState: {
        productCatalog: [],
    },
    reducers: {
        setProductCatalog: (state, action) => {
            state.productCatalog = action.payload;
        },
    },
});

export const { setProductCatalog } = productCatalogSlice.actions;

export default productCatalogSlice.reducer;
