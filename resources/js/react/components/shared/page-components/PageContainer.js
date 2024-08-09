import styled from "styled-components";
import { extraLarge, pagePadding } from "../styles/sizes.js";
import { fontFamily } from "../styles/theme.js";

export const PageContainer = styled.div`
    padding: ${pagePadding}px ${extraLarge - 10}px;
`;

export const TitleContainer = styled.div`
    width: 50%;
    display: flex;
`;

export const MainTitle = styled.h1`
    color: #000;
    font-size: 20px;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 10px;
    font-family: ${fontFamily.fontSemiBold};
`;

export const SubTitle = styled.span`
    color: var(--Gray, #a4a4a4);
    font-family: ${fontFamily.fontSemiBold};
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

export const ActionsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
`;
