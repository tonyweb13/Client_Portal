import AllOrders from "../components/pages/client/all-orders/AllOrders.js";
import ProductCatalog from "../components/pages/client/product-catalog/ProductCatalog.js";
import { Login } from "../components/pages/auth/Login.js";
import { Dashboard } from "../components/pages/client/Dashboard.js";
import { Custom } from "../components/pages/client/Custom.js";
import WarehouseStocks from "../components/pages/client/inventory/WarehouseStocks.js";

export const routes = [
    {
        path: "/",
        element: Dashboard,
    },
    {
        path: "/login",
        element: Login,
    },
    {
        path: "/custom",
        element: Custom,
    },
    {
        path: "/awaiting-shipments",
        element: AllOrders,
    },
    {
        path: "/bad-address",
        element: AllOrders,
    },
    {
        path: "/pending-cpf",
        element: AllOrders,
    },
    {
        path: "/back-order",
        element: AllOrders,
    },
    {
        path: "/product-catalog",
        element: ProductCatalog,
    },
    {
        path: "/warehouse-stocks",
        element: WarehouseStocks,
    },
];
