import Http from "../http/index.js";
import { setInventoryList } from "../redux/reducers/inventory-reducer.js";

export const getInventory = (page, status, warehouse) => {
    return (dispatch) => {
        Http.get(
            "/api/testProductCatalog?page=" +
                page +
                "&status=" +
                status +
                "&warehouse=" +
                warehouse
        )
            .then((response) => {
                dispatch(setInventoryList(response.data));
            })
            .catch((error) => {
                console.log(error);
            });
    };
};
