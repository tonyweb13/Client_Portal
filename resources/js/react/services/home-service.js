import Http from "../http/index.js";
import { setUser } from "../redux/reducers/users-reducer.js";
import { setWidgets } from "../redux/reducers/widgets-reducers.js";

export const getWidgets = (page) => {
    return (dispatch) => {
        //axios
        Http.post("/api/main")
            .then((response) => {
                dispatch(setWidgets(response.data.widgets));
                dispatch(setUser(response.data.user));
            })
            .catch((error) => {
                console.log(error);
            });
    };
};
