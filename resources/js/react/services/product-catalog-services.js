import Http from "../http/index.js";
import { setProductCatalog } from "../redux/reducers/product-catalog-reducer.js";

export const getProductCatalog = (page, status) => {
    return (dispatch) => {
        Http.get(
            "/api/testProductCatalog?page=" + page + "&status=" + status
        )
            .then((response) => {
                dispatch(setProductCatalog(response.data.data));
            })
            .catch((error) => {
                console.log(error);
            });
    };
};
