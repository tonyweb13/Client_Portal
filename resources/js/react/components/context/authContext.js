import React, { createContext, useState } from "react";
import { Cookies } from "react-cookie";
import { getCurrentUrl } from "../shared/url/getCurrentUrl.js";

export const AuthContext = createContext();

export const AuthProvider = ({ children, ...otherProps }) => {
    const cookie = new Cookies();
    const isAuth = cookie.get("is_auth");
    const [activePage, setActivePage] = useState("");

    const [authData, setAuthData] = useState({
        signedIn: false,
        user: null,
    });

    const handleSetActivePage = (page) => {
        setActivePage(page);
    };

    const handleSetAuthData = (userData) => {
        setAuthData(userData);
    };

    return (
        <AuthContext.Provider
            value={{
                authData,
                handleSetAuthData,
                isAuth,
                activePage,
                handleSetActivePage,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
