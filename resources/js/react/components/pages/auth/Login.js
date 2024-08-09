import React, { useContext, useEffect, useState } from "react";
import { useForm } from "../../hooks/useForm.js";
import { useAuth } from "../../hooks/useAuth.js";
import { AuthContext } from "../../context/authContext.js";
import Http from "../../../http/index.js";
import styled from "styled-components";
import { LoginLeftContent } from "./LoginLeftContent.js";
import {
    TextField,
    Checkbox,
    Button,
    FormGroup,
    FormControlLabel,
} from "@mui/material";
import { fontFamily } from "../../shared/styles/theme.js";
import { black } from "../../shared/styles/color.js";
import { large } from "../../shared/styles/sizes.js";

export const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);
    const { setAsLogged } = useAuth();
    const { authData, handleSetAuthData, isAuth } = useContext(AuthContext);
    const { setErrors, renderFieldError, message, setMessage, navigate } =
        useForm();

    useEffect(() => {
        if (!isAuth) {
            navigate("/login");
        } else {
            navigate("/");
        }
    }, []);

    const makeRequest = (e) => {
        e.preventDefault();
        setErrors(null);
        setMessage("");

        Http.get("/sanctum/csrf-cookie").then(() => {
            const payload = {
                email,
                password,
            };

            if (remember) {
                payload.remember = true;
            }

            Http.post("/api/login", payload, {
                headers: {
                    Accept: "application/json",
                },
            })
                .then((response) => {
                    if (response.data.user) {
                        setAsLogged(response.data.user);
                        handleSetAuthData(response.data.user);
                    }
                })
                .catch((error) => {
                    console.log(error);

                    if (error.response) {
                        if (error.response.data.message) {
                            setMessage(error.response.data.message);
                        }

                        if (error.response.data.errors) {
                            setErrors(error.response.data.errors);
                        }
                    }
                });
        });
    };

    return (
        <ContentContainer>
            <LoginLeftContent />
            <LoginRightContent>
                <LoginContainer onSubmit={makeRequest} component="form">
                    {message && (
                        <AlertDanger>
                            {message} {renderFieldError("email")}
                        </AlertDanger>
                    )}
                    <LoginText>Login</LoginText>
                    <TextField
                        type="email"
                        name="email"
                        fullWidth
                        focused
                        autoComplete="email"
                        color="grey"
                        onChange={(e) => setEmail(e.target.value)}
                        label="Email Address"
                        style={{
                            marginBottom: "20px",
                        }}
                    />

                    <TextField
                        id="outlined-helperText"
                        margin="normal"
                        type="password"
                        name="password"
                        fullWidth
                        focused
                        autoComplete="current-password"
                        color="grey"
                        onChange={(e) => setPassword(e.target.value)}
                        label="Password"
                    />
                    <FormGroup>
                        <FormControlLabel
                            name="remember"
                            control={<Checkbox />}
                            label="Remember Me"
                            onChange={(e) => {
                                setRemember(e.target.checked ? 1 : 0);
                            }}
                        />
                    </FormGroup>
                    <SubmitButton type="submit">Login</SubmitButton>
                </LoginContainer>
            </LoginRightContent>
        </ContentContainer>
    );
};

const SubmitButton = styled.button`
    color: #ffffff;
    background-color: ${black};
    height: 45px;
    fontweight: 900;
    width: 100%;
    border-radius: 8px;
    margin-top: ${large + 4}px;
    cursor: pointer;
`;

const LoginText = styled.h1`
    color: ${black};
    font-family: ${fontFamily.font};
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

const LoginContainer = styled.form`
    margin: 20% auto;
    width: 575px;
`;

const ContentContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    background-color: black;
    position: relative;
`;

const LoginRightContent = styled.div`
    width: 70%;
    height: 100vh;
    left: 502px;
    z-index: 9;
    background-color: white;
    border-radius: 45px 0px 0px 45px;
`;

const AlertDanger = styled.div`
    color: red;
`;
