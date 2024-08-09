import axios from "axios";

// create new instance
const Http = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  withCredentials: true, // Include cookies in requests
});

// set default config
// Http.defaults.baseURL = "http://localhost/";
Http.defaults.headers.common.Accept = "application/json";

/**
 * intercept the response so we can handle the
 * expected exceptions from the API
 */
Http.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        /**
         * This could be a CORS issue or
         * a dropped internet connection.
         */
        if (typeof error.response === "undefined") {
            return alert("A network error occurred.");
        }

        switch (error.response.status) {
            case 401:
                break;
            case 500:
            case 562:
            case 563:
            case 567:
            case 568:
            case 570:
                break;
            default:
                break;
        }

        return Promise.reject(error);
    }
);

export default Http;
