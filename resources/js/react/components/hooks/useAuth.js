import React, { useContext, useEffect } from "react";
import { Cookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import Http from "../../http/index.js";
import { AuthContext } from "../context/authContext.js";

export const useAuth = () => {
    let navigate = useNavigate();

    const [userData, setUserdata] = React.useState({
        signedIn: false,
        user: null,
    });

    const { handleSetAuthData, authData } = useContext(AuthContext);

    useEffect(() => {
        handleSetAuthData(authData);
    }, [authData.signedIn]);

    function getAuthCookieExpiration() {
        let date = new Date();
        date.setTime(date.getTime() + 7 * 24 * 60 * 60 * 1000); // 7 days
        return date;
    }

    function setAsLogged(user) {
        const cookie = new Cookies();

        cookie.set("is_auth", true, {
            path: "/",
            expires: getAuthCookieExpiration(),
            sameSite: "lax",
            httpOnly: false,
        });

        setUserdata({ signedIn: true, user });

        navigate("/");
    }

    function setLogout() {
        const cookie = new Cookies();

        cookie.remove("is_auth", {
            path: "/",
            expires: getAuthCookieExpiration(),
            sameSite: "lax",
            httpOnly: false,
        });

        setUserdata({ signedIn: false, user: null });

        location.reload();
    }

    function loginUserOnStartup() {
        const cookie = new Cookies();
        if (cookie.get("is_auth")) {
            Http.post("/api/main")
                .then((response) => {
                    setUserdata({ signedIn: true, user: response.data.user });
                    navigate("/");
                })
                .catch((error) => {
                    setUserdata({ signedIn: false, user: null });
                    setLogout();
                });
        } else {
            setUserdata({ signedIn: false, user: null });
            navigate("/login");
        }
    }

    return {
        userData,
        setAsLogged,
        setLogout,
        loginUserOnStartup,
    };
};
