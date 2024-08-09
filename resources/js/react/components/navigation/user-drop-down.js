import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { generateIcon } from "../../components/shared/icons/generate-icon.js";
import { black, itemBg, white } from "../shared/styles/color.js";
import { fontFamily } from "../shared/styles/theme.js";
import Swal from "sweetalert2";
import Http from "../../http/index.js";
import { useAuth } from "../hooks/useAuth.js";

function UserDropdown(props) {
    const [isOpen, setIsOpen] = useState(false);
    const { user } = props;
    const { setLogout } = useAuth();
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleLogout = useCallback(() => {
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
    }, []);

    return (
        <DropdownContainer>
            <DropdownButton
                onClick={toggleDropdown}
                style={{
                    backgroundColor: isOpen ? black : itemBg,
                    color: isOpen ? white : black,
                }}
            >
                {`${user.first_name ?? ""} ${user.last_name ?? ""}`}{" "}
                <ToggleIcon src={generateIcon("ProfileArrow")} />
            </DropdownButton>
            <DropdownContent isOpen={isOpen}>
                <DropdownItem key={1}>{"Profile"}</DropdownItem>
                <DropdownItem key={2}>{"Settings"}</DropdownItem>
                <DropdownItem key={5} onClick={handleLogout}>
                    {"Logout"}
                </DropdownItem>
            </DropdownContent>
        </DropdownContainer>
    );
}

export default UserDropdown;

const ToggleIcon = styled.img`
    cursor: pointer;
    transition: transform 0.4s ease;
`;

const DropdownContainer = styled.div`
    position: relative;
    display: inline-block;
`;

const DropdownButton = styled.button`
    border: none;
    padding: 10px 15px;
    cursor: pointer;
    height: 43px;
    width: 100%;
    border-radius: 20px;
`;

const DropdownContent = styled.div`
    display: ${(props) => (props.isOpen ? "block" : "none")};
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #fff;
    border: 1px solid #ccc;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    min-width: 100%;
    z-index: 1;
`;

const DropdownItem = styled.div`
    padding: 10px;
    cursor: pointer;
    background-color: ${itemBg};
    &:hover {
        background-color: #f0f0f0;
    }
    text-align: left;
    color: var(--Gray, #a4a4a4);
    font-family: ${fontFamily.font};
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    height: 11.981px;
    flex-shrink: 0;
`;
