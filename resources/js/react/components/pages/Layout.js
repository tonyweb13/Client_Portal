import React, { useEffect, useState, useCallback, useContext } from "react";
import { useAuth } from "../hooks/useAuth.js";
import styled from "styled-components";
import { generateIcon } from "../../components/shared/icons/generate-icon.js";
import LinkAndSubLink, {
    LinkIcon,
    LinksWithIconContainer,
    StyledLink,
} from "../navigation/link-and-sub-link.js";
import Company from "../navigation/company.js";
import { AuthContext } from "../context/authContext.js";
import { black, white } from "../shared/styles/color.js";
import { unselectedSubLinkAdmin } from "../shared/styles/theme.js";
import Http from "../../http/index.js";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";

export const Layout = ({ children }) => {
    const { loginUserOnStartup, setLogout } = useAuth();
    const { isAuth } = useContext(AuthContext);
    const [toggledLink, setToggledLink] = useState(undefined);
    const isAdmin =
        useSelector((state) => state.user.user.is_admin) == "1" ? true : false;
    useEffect(() => {
        loginUserOnStartup();
    }, []);

    const handleToggle = useCallback(
        (index) => {
            setToggledLink(index);
        },
        [toggledLink]
    );

    const linksWithIconContainerCustomStyle = {
        left: "26px",
        cursor: "pointer",
    };

    const handleLogout = () => {
        Swal.fire({
            title: "Are you sure you want to logout?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes",
        }).then((result) => {
            if (result.isConfirmed) {
                Http.post("/api/logout")
                    .then((response) => {
                        setLogout();
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        });
    };

    return (
        <SideBarContainer>
            {isAuth ? (
                <LeftBar style={{ backgroundColor: isAdmin ? black : white }}>
                    <LogoContainer
                        style={{ backgroundColor: isAdmin ? black : white }}
                    >
                        <Logo src={generateIcon("PKLogo")} />
                    </LogoContainer>
                    <Company
                        color={isAdmin ? black : white}
                        company={{
                            companyName: "The Conqueror",
                            title: "Customer Dashboard",
                            logo: "CompanyLogo",
                        }}
                    />
                    <LinkAndSubLink
                        handleToggle={handleToggle}
                        toggledLink={toggledLink}
                    />

                    <LinksWithIconContainer
                        style={linksWithIconContainerCustomStyle}
                        onClick={handleLogout}
                    >
                        <LinkIcon src={generateIcon("Logout")} />{" "}
                        <StyledLink
                            style={{
                                ...unselectedSubLinkAdmin,
                            }}
                        >
                            Logout
                        </StyledLink>
                    </LinksWithIconContainer>
                </LeftBar>
            ) : null}

            <MainContent>{children}</MainContent>
        </SideBarContainer>
    );
};

const LeftBar = styled.div`
    width: 20%;
    flex-shrink: 0;
    background: #000;
    color: #a4a4a4;
    position: relative;
`;

const MainContent = styled.div`
    background-color: #fff;
    width: 100%;
`;

const SideBarContainer = styled.div`
    width: 100%;
    display: flex;
    min-height: 100vh;
    height: auto;
`;

const LogoContainer = styled.div`
    width: 100%;
    background: #000;
    display: flex;
    align-content: center;
`;

const Logo = styled.img`
    margin: auto;
    margin-top: 47px;
    margin-bottom: 47px;
`;

export const ToggleIcon = styled.img`
    width: 16px;
    height: 16px;
    margin-right: 47px;
    cursor: pointer;
    padding-top: 17px;
    transition: transform 0.4s ease;
`;
