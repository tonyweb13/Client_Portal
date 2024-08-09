import styled from "styled-components";
import { large } from "../styles/sizes.js";
import { fontFamily } from "../styles/theme.js";
import { black } from "../styles/color.js";

export const PrimaryButton = styled.button`
    font-family: ${fontFamily.font};
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    color: #fff;
    height: 39px;
    border-radius: 5px;
    background-color: ${black};
    padding: 0 14px;
    line-height: 18px;
    border: 0;
    width: 151px;
    cursor: pointer;
`;

export const SecondaryButton = styled.button`
    font-family: ${fontFamily.font};
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    text-align: center;
    color: #fff;
    background-color: ${black}
    box-shadow: -1px 1px 2px rgb(53 53 53 / 10%),
        1px -1px 2px rgb(53 53 53 / 10%), -1px -1px 2px rgb(55 55 55 / 10%),
        1px 1px 3px rgb(53 53 53 / 10%);
    border-radius: 10px;
    border: 0;
    height: 50px;
    width: 100%;
    cursor: pointer;
    margin-bottom: ${large}px;
`;
