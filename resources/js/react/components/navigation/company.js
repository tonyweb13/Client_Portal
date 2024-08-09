import React from "react";
import styled from "styled-components";
import { large, medium } from "../shared/styles/sizes.js";
import { generateIcon } from "../shared/icons/generate-icon.js";
import { fontFamily } from "../shared/styles/theme.js";

function Company(props) {
    const { companyName, title, logo, color } = props?.company;
    return (
        <UserIconMain>
            <UserIconContainer>
                <UserIcon>
                    <CompanyContent>
                        <CompanyLogo src={generateIcon(logo)}></CompanyLogo>
                    </CompanyContent>
                    <CompanyContent>
                        <div>
                            <CompanyName style={{ color: color }}>
                                {companyName ?? null}
                            </CompanyName>
                        </div>
                        <div>
                            <Title>{title ?? null}</Title>
                        </div>
                    </CompanyContent>
                    <CompanyContent>
                        <ToggleCommpanyIcon src={generateIcon("ArrowDown")} />
                    </CompanyContent>
                </UserIcon>
            </UserIconContainer>
        </UserIconMain>
    );
}
export default Company;

const CompanyName = styled.label`
    font-family: ${fontFamily.font};
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

const Title = styled.label`
    color: var(--Gray, #a4a4a4);
    font-family: ${fontFamily.title};
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

const CompanyLogo = styled.img`
    width: 36px;
    height: 36px;
    flex-shrink: 0;
    border-radius: 36px;
`;

const CompanyContent = styled.div`
    margin-right: ${medium - 2}px;
    margin-left: ${medium - 2}px;
`;

const UserIconMain = styled.div`
    padding-left: ${large - 1}px;
    padding-right: ${large - 1}px;
`;

const UserIconContainer = styled.div`
    width: 100%;
    display: flex;
    align-content: center;
    border-bottom: 1px solid #a4a4a4;
`;

const UserIcon = styled.div`
    margin: auto;
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
`;
const ToggleIcon = styled.img`
    width: 16px;
    height: 16px;
    margin-right: 47px;
    cursor: pointer;
    padding-top: 17px;
    transition: transform 0.4s ease;
`;

const ToggleCommpanyIcon = styled(ToggleIcon)`
    padding-top: 3px;
`;
