import React from "react";
import styled from "styled-components";
import { black, itemBg, tertiary } from "../styles/color.js";
import { extraLarge, large, pagePadding } from "../styles/sizes.js";
import { generateIcon } from "../icons/generate-icon.js";
import { fontFamily } from "../styles/theme.js";
import MoreOptionsButton from "./more-options-button.js";
import { Link } from "react-router-dom";

function Widget(props) {
    const { widgets } = props;

    const widgetLink = (title) => {
        switch (title) {
            case "Awaiting Shipments":
                return "/awaiting-shipments";
            case "Pending CPF":
                return "/pending-cpf";
            case "Bad Address":
                return "/bad-address";
            default:
                return "/";
        }
    };

    const linkStyle = { textDecoration: "none" };
    const MoreOptionButtonAdditionalStyles = {
        position: "absolute",
        right: "20px",
    };
    return (
        <WidgetContainer>
            {widgets?.length > 0
                ? widgets.map((data, index) => {
                      return (
                          <Item key={index}>
                              <MoreOptionsButton
                                  style={MoreOptionButtonAdditionalStyles}
                              />
                              <Link
                                  to={widgetLink(data.title)}
                                  style={linkStyle}
                              >
                                  <TitleContainer>
                                      <TitleWithIconContainer>
                                          <TitleIcon
                                              src={generateIcon("Wallet")}
                                          />
                                          <Title>{data.title}</Title>
                                      </TitleWithIconContainer>
                                  </TitleContainer>
                                  <Total>{data.total}</Total>
                                  <TotalValue>{data.totalValue}</TotalValue>
                              </Link>
                          </Item>
                      );
                  })
                : null}
        </WidgetContainer>
    );
}
export default Widget;

const TitleWithIconContainer = styled.div`
    display: flex;
`;

const WidgetContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 2%;
`;

const Item = styled.div`
    flex: 1 0 calc(18.5%);
    min-height: 157px;
    margin-top: ${large}px;
    height: auto;
    background-color: ${itemBg};
    border-radius: 10px;
    padding: ${pagePadding - 1}px ${large - 2}px;
    padding-top: ${large - 5}px;
    font-family: ${fontFamily.font};
    cursor: pointer;
    position: relative;
    &:hover {
        background: linear-gradient(
            45deg,
            transparent 10px,
            rgba(0, 0, 0, 0.2) 10px,
            rgba(0, 0, 0, 0.2) 20px,
            transparent 20px
        );
        box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);
    }
`;

const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;
const Title = styled.div`
    padding: 5px 14px;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: var(--Gray, #a4a4a4);
`;
const TitleIcon = styled.img`
    height: 24px;
    width: 24px;
`;

const Total = styled.div`
    color: ${tertiary};
    font-family: ${fontFamily.font};
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: ${extraLarge + 17}px;
`;

const TotalValue = styled.div`
    color: ${black};
    font-family: ${fontFamily.font};
    font-size: 35px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
`;
