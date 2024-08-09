import Http from "../http/index.js";
import { setAllOrdersList, setAllOrdersLoading } from "../redux/reducers/all-orders-reducer.js";

const statuses = {
    " /Awaiting Shipments": "Awaiting Shipments",
    " /Bad Address": "Bad Address",
    " /Hold Brazil CPF": "Hold Brazil CPF",
    " /Postal Hold": "Postal Hold",
};

export const getAllOrders = (page, status) => {
    return (dispatch) => {
        Http.get(
            "/api/client/orders?page=" +
                (page ? page : 1) +
                "&status=" +
                statuses[status]
        )
            .then((response) => {
                dispatch(setAllOrdersList(response.data));
                dispatch(setAllOrdersLoading(false));
            })
            .catch((error) => {
                console.log(error);
            });
    };
};
