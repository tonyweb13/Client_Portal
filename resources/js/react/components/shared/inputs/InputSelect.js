import React from "react";
import styled from "styled-components";
import { medium } from "../styles/sizes.js";
import { fontFamily } from "../styles/theme.js";
import { ToggleIcon } from "../../pages/Layout.js";
import { generateIcon } from "../icons/generate-icon.js";
import { itemBg } from "../styles/color.js";

function InputSelect({ options, onChange, value, name }) {
    return (
        <SelectWrapper>
            <Select onChange={onChange} value={value} name={name}>
                {options.map((option) => (
                    <Option key={option.value} value={option.value}>
                        {option.label}
                    </Option>
                ))}
            </Select>
            <Arrow src={generateIcon("ProfileArrow")} />
        </SelectWrapper>
    );
}

export default InputSelect;

const SelectWrapper = styled.div`
    position: relative;
    display: inline-block;
    margin-bottom: ${medium}px;
`;

const Select = styled.select`
    appearance: none;
    padding-left: 10px;
    border: 0.5px solid #ccc;
    height: 39px;
    border-radius: 4px;
    font-size: 16px;
    color: #333;
    width: 200px; /* Adjust the width as needed */
    background-color: ${itemBg};
    cursor: pointer;
    outline: none;
    font-family: ${fontFamily.font};
`;

const Arrow = styled(ToggleIcon)`
    position: absolute;
    padding-top: 0px;
    top: 52%;
    right: 10px;
    transform: translateY(-50%);
    margin-right: 0px;
`;

const Option = styled.option`
    background-color: ${itemBg};
`;
