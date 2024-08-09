import React, { useState } from "react";
import styled from "styled-components";
import { itemBg } from "../styles/color.js";
import { fontFamily } from "../styles/theme.js";

const OptionsButton = styled.div`
    position: relative;
    display: inline-block;
    cursor: pointer;
    color: var(--Gray, #a4a4a4);
`;

const OptionsMenu = styled.div`
    display: ${(props) => (props.isOpen ? "block" : "none")};
    position: absolute;
    top: 100%;
    right: 0;
    background-color: ${itemBg};
    border: 1px solid #ccc;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const OptionsMenuItem = styled.li`
    padding: 10px;
    list-style: none;
    font-size: 12px;
    font-family: ${fontFamily.font}
    &:hover {
        background-color: #f0f0f0;
    }

    color: var(--Gray, #a4a4a4);
`;

const MoreOptionsButton = (props) => {
    const { style } = props;
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = (event) => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <OptionsButton onClick={toggleMenu} style={style}>
            •••
            <OptionsMenu isOpen={isMenuOpen}>
                <OptionsMenuItem>Hide</OptionsMenuItem>
            </OptionsMenu>
        </OptionsButton>
    );
};

export default MoreOptionsButton;
