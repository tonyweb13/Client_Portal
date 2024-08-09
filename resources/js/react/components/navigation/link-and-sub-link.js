import React, { useContext } from "react";
import {
    fontFamily,
    routerLinkAdmin,
    routerLinkAdminSelected,
    selectedSubLinkAdmin,
    unselectedSubLinkAdmin,
} from "../shared/styles/theme.js";
import { gray, tertiary } from "../shared/styles/color.js";
import { Link } from "react-router-dom";
import { NavigationLinks } from "../navigation/navigation-links.js";
import { extraLarge, large, medium } from "../shared/styles/sizes.js";
import styled from "styled-components";
import { ToggleIcon } from "../pages/Layout.js";
import { generateIcon } from "../../components/shared/icons/generate-icon.js";
import { AuthContext } from "../context/authContext.js";

function LinkAndSubLink(props) {
    const { handleToggle, toggledLink } = props;
    const { handleSetActivePage, activePage } = useContext(AuthContext);
    return (
        <LinkContainer>
            {NavigationLinks.map((link, index) => {
                return (
                    <ParentLinkContainer key={index}>
                        <ParentLink
                            style={{
                                backgroundColor:
                                    toggledLink == index ? tertiary : "",
                            }}
                        >
                            <Links key={index}>
                                <LinksWithIconContainer>
                                    <LinkIcon src={generateIcon(link.icon)} />{" "}
                                    <StyledLink>
                                        <Link
                                            to={link.link}
                                            style={
                                                index == toggledLink
                                                    ? routerLinkAdminSelected
                                                    : routerLinkAdmin
                                            }
                                        >
                                            {link.name}
                                        </Link>
                                    </StyledLink>
                                </LinksWithIconContainer>
                            </Links>
                            {link.subLink?.length > 0 ? (
                                toggledLink == index ? (
                                    <ToggleIcon
                                        src={generateIcon("ArrowDown")}
                                        style={{
                                            transform: "rotate(5deg)",
                                        }}
                                        onClick={() => {
                                            handleToggle(undefined);
                                        }}
                                    />
                                ) : (
                                    <ToggleIcon
                                        src={generateIcon("ArrowRight")}
                                        style={{
                                            transform: "rotate(360deg)",
                                        }}
                                        onClick={() => {
                                            handleToggle(index);
                                        }}
                                    />
                                )
                            ) : null}
                        </ParentLink>
                        <SubLinkContainer isToggled={toggledLink == index}>
                            <SubLinks>
                                {link.subLink?.map((subLink, index) => {
                                    return (
                                        <ChildLinkWithIconContainer key={index}>
                                            <StyledSubLink>
                                                <Link
                                                    to={subLink.link}
                                                    style={
                                                        activePage ==
                                                        subLink.link
                                                            ? selectedSubLinkAdmin
                                                            : unselectedSubLinkAdmin
                                                    }
                                                    onClick={() => {
                                                        handleSetActivePage(
                                                            subLink.link
                                                        );
                                                    }}
                                                >
                                                    {subLink.name}
                                                </Link>
                                            </StyledSubLink>
                                        </ChildLinkWithIconContainer>
                                    );
                                })}
                            </SubLinks>
                        </SubLinkContainer>
                    </ParentLinkContainer>
                );
            })}
        </LinkContainer>
    );
}

export default LinkAndSubLink;

const LinkContainer = styled.div`
    width: 100%;
    display: inline-block;
    margin-top: ${extraLarge}px;
    overflow-y: auto;
    height: 378px;
    /* Define the style changes as you scroll down */
    ::-webkit-scrollbar {
        width: 10px; /* Adjust the scrollbar width as needed */
    }

    ::-webkit-scrollbar-thumb {
        background: ${gray}; /* Color of the scrollbar thumb */
    }

    /* Define style changes for the scrollable content */
    .scroll-content {
        background-color: ${tertiary}; /* Initial background color */
        transition: background-color 0.3s ease; /* Transition for smooth color change */
        padding: 10px;
        box-sizing: border-box;
    }

    /* Add styles based on scroll position */
    /* For example, change the background color as you scroll down */
    &:hover .scroll-content {
        background-color: ${tertiary}; /* Change to your desired background color */
    }
`;
const SubLinkContainer = styled.div`
    margin-top: -5px;
    max-height: ${(props) => (props.isToggled ? "200px" : "0px")};
    overflow: hidden;
    transition: max-height 0.3s ease-in-out;
`;

const ParentLinkContainer = styled.div`
    display: inline-block;
    width: 92%;
    margin-left: 8%;
`;

const ParentLink = styled.div`
    display: flex;
    justify-content: space-between;
    border-radius: 8px 0px 0px 8px;
`;

const SubLinks = styled.div`
    background-color: rgba(232, 120, 65, 0.5);
    border-radius: 0px 0px 0px 8px;
`;

export const LinkIcon = styled.img`
    width: 26px;
    height: 26px;
    position: absolute;
    top: -4px;
`;

const SubLinkIcon = styled(LinkIcon)`
    padding-top: ${large}px;
`;

const Links = styled.div`
    padding-top: ${medium + 7}px;
    padding-bottom: ${medium + 3}px;
`;

export const LinksWithIconContainer = styled.div`
    width: 82px;
    margin-left: 14px;
    position: relative;
`;

const ChildLinkWithIconContainer = styled(LinksWithIconContainer)`
    &:last-child {
        padding-bottom: ${medium}px;
    }
    padding-top: ${large}px;
    width: 100%;
    margin-left: 49px;
`;

export const StyledLink = styled.span`
    color: #ffffff;
    font-family: ${fontFamily.font};
    font-size: 16px;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: left;
    margin-left: 29px;
    text-decoration: none;
`;

const StyledSubLink = styled(StyledLink)``;
