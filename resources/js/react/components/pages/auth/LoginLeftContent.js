import React from "react";
import styled from "styled-components";
import { getLoginImages } from "../../shared/images/get-login-images.js";

export const LoginLeftContent = () => {
    return (
        <LeftContent>
            <LoginDesignTop src={getLoginImages("LoginDesign2")} />
            <LoginLogo src={getLoginImages("LogoOnly")} />
            <TextTitleContent>
                Selling online is full of ups and downs.
            </TextTitleContent>
            <TextTaglineContent>
                You handle the ups, and we’ll handle the downs.
            </TextTaglineContent>
            <LoginDesignBottom src={getLoginImages("LoginDesign1")} />
        </LeftContent>
    );
};

const LeftContent = styled.div`
    background-color: black;
    width: 30%;
    height: 100vh;
    position: relative;
`;

const TextTitleContent = styled.div`
    width: 250px;
    height: 135px;
    top: 282px;
    left: 67px;
    font-family: Gotham;
    font-size: 40px;
    font-weight: 400;
    line-height: 43px;
    letter-spacing: 0em;
    text-align: left;
    color: #ffffff;
    margin-left: 65px;
    margin-top: 50px;
`;

const TextTaglineContent = styled.div`
    width: 220px;
    height: 60px;
    top: 459px;
    left: 67px;
    font-family: Gotham;
    font-size: 15px;
    font-weight: 325;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    color: #a9a9a9;
    margin-left: 65px;
`;

const LoginLogo = styled.img`
    width: 103px;
    height: 106px;
    margin-top: 75px;
    margin-left: 40px;
`;

const LoginDesignTop = styled.img`
    width: 502px;
    height: 484px;
    margin-left: 160px;
    position: absolute;
`;

const LoginDesignBottom = styled.img`
    width: 550px;
    height: 352px;
    z-index: 99;
    bottom: 0;
    left: 0;
    position: absolute;
`;
