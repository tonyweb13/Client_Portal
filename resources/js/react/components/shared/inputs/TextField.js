import React from "react";
import styled from "styled-components";
import { tertiary } from "../styles/color.js";
import { SubHeading } from "../generic/headers.js";
import { fontFamily } from "../styles/theme.js";

export const InputField = styled.input`
    padding: 0 17px;
    background: #ffffff;
    box-shadow: 1px 1px 2px rgb(255 255 255 / 30%),
        -1px -1px 2px rgb(237 237 237 / 50%),
        inset -3px 3px 6px rgb(237 237 237 / 20%),
        inset 3px -3px 6px rgb(237 237 237 / 20%),
        inset -3px -3px 6px rgb(255 255 255 / 90%),
        inset 3px 3px 8px rgb(237 237 237 / 90%);
    border-radius: 5px;
    height: 40px;
    font-family: ${fontFamily.font};
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    border: white solid 1px;
    color: ${tertiary};
`;

export const InputWrapper = styled.div`
    position: relative;
    display: block;
`;

function TextField(props, ref) {
    const {
        validationMessage,
        type,
        onBlur,
        onChange,
        isValid,
        value,
        placeholder,
    } = props;
    return (
        <InputWrapper>
            <InputField
                value={value}
                type={type ?? "text"}
                onChange={onChange}
                onBlur={onBlur}
                placeholder={placeholder ?? ""}
                {...ref}
            />
            {!isValid && <SubHeading>{validationMessage}</SubHeading>}
        </InputWrapper>
    );
}
export default TextField;
