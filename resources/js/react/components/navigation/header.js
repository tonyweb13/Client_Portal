import React, { useContext } from "react";
import styled from "styled-components";
import { generateIcon } from "../../components/shared/icons/generate-icon.js";
import { extraLarge, large } from "../shared/styles/sizes.js";
import { AuthContext } from "../context/authContext.js";
import UserDropdown from "./user-drop-down.js";
import { useSelector } from "react-redux";
import { itemBg } from "../shared/styles/color.js";
import {
    MainTitle,
    SubTitle,
    TitleContainer,
} from "../shared/page-components/PageContainer.js";
import { getCurrentUrl } from "../shared/url/getCurrentUrl.js";

function Header() {
    const { isAuth } = useContext(AuthContext);
    const user = useSelector((state) => state.user.user);
    const pageInfo = useSelector((state) => state.page.title);
    const handleSearch = (event) => {
        console.log(event.target.value);
    };

    return isAuth ? (
        <HeaderContainer>
            <TitleContainer>
                <MainTitle>
                    {pageInfo}
                    <SubTitle>{orderTitle()}</SubTitle>
                </MainTitle>
            </TitleContainer>
            <RightContainer>
                <SearchBarContainer>
                    <SearchIcon src={generateIcon("SearchIcon")} />
                    <SearchBar
                        placeholder="Search here"
                        onBlur={handleSearch}
                    />
                </SearchBarContainer>
                <AccountContainer>
                    <UserDropdown user={user} />
                </AccountContainer>
            </RightContainer>
        </HeaderContainer>
    ) : null;
}

export default Header;

export const orderTitle = () => {
    const getOrderTitle = getCurrentUrl()?.pathname;
    switch (getOrderTitle) {
        case "awaiting-shipments":
            return " /Awaiting Shipments";
        case "hold-brazil-cpf":
            return " /Hold Brazil CPF";
        case "bad-address":
            return " /Bad Address";
        case "postal-hold":
            return " /Postal Hold";
        default:
            return "";
    }
};

const RightContainer = styled.div`
    display: flex;
    width: 50%;
    justify-content: flex-end;
    gap: ${large}px;
`;

const HeaderContainer = styled.div`
    display: flex;
    padding: ${extraLarge}px ${extraLarge - 10}px;
    padding-bottom: 0px;
    justify-content: space-between;
`;

const SearchIcon = styled.img`
    width: 27px;
    height: 27px;
    flex-shrink: 0;
    position: absolute;
    top: 10px;
    left: 15px;
`;

const SearchBar = styled.input`
    height: 100%;
    width: 87%;
    outline: none;
    border: none;
    background-color: ${itemBg};
    border-radius: 20px;
`;

const SearchBarContainer = styled.div`
    height: 43px;
    border: 0px solid black;
    border-radius: 20px;
    background-color: ${itemBg};
    position: relative;
    text-align: right;
    width: 60%;
`;

const AccountContainer = styled.div`
    text-align: right;
`;
