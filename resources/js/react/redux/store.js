import { configureStore } from "@reduxjs/toolkit";
import allOrdersSlice from "./reducers/all-orders-reducer.js";
import allOrdersDetailsSlice from "./reducers/all-orders-details-reducer.js";
import userSlice from "./reducers/users-reducer.js";
import widgetsSlice from "./reducers/widgets-reducers.js";
import productCatalogSlice from "./reducers/product-catalog-reducer.js";
import inventorySlice from "./reducers/inventory-reducer.js";
import pageSlice from "./reducers/page-reducer.js";

const store = configureStore({
    reducer: {
        allOrders: allOrdersSlice,
        allOrdersDetails: allOrdersDetailsSlice,
        user: userSlice,
        widgets: widgetsSlice,
        productCatalog: productCatalogSlice,
        inventory: inventorySlice,
        page: pageSlice,
    },
});

export default store;
