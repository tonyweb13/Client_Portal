import Http from "../http/index.js";
import { setAllOrdersDetails } from "../redux/reducers/all-orders-details-reducer.js";

export const getAllOrdersDetails = (orderid) => {
    return (dispatch) => {
        Http.get("/api/client/orders/view?orderid=" + orderid)
            .then((response) => {
                dispatch(setAllOrdersDetails(response.data));
            })
            .catch((error) => {
                console.log(error);
            });
    };
};
