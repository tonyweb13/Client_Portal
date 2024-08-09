import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "../components/pages/Layout.js";
import { Login } from "../components/pages/auth/Login.js";
import { Dashboard } from "../components/pages/client/Dashboard.js";
import { Custom } from "../components/pages/client/Custom.js";
import Header from "../components/navigation/header.js";
import { AuthProvider } from "../components/context/authContext.js";
import styled from "styled-components";
import { white } from "../components/shared/styles/color.js";
import { Provider } from "react-redux";
import store from "../redux/store.js";
import AllOrders from "../components/pages/client/all-orders/AllOrders.js";

const App = () => {
    const routes = [
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
            path: "/hold-brazil-cpf",
            element: AllOrders,
        },
        {
            path: "/postal-hold",
            element: AllOrders,
        },
    ];

    return (
        <Provider store={store}>
            <AuthProvider>
                <Layout>
                    <Header />
                    <Content>
                        <Routes>
                            {routes.map((route, index) => {
                                return (
                                    <Route
                                        key={index}
                                        path={route.path}
                                        element={<route.element />}
                                    />
                                );
                            })}
                        </Routes>
                    </Content>
                </Layout>
            </AuthProvider>
        </Provider>
    );
};

createRoot(document.getElementById("app")).render(
    <Router>
        <App />
    </Router>
);

const Content = styled.div`
    background-color: ${white};
`;
