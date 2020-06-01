import React from 'react';
import styled from 'styled-components';
import { typeScale } from '../utils';
import { applyStyleModifiers } from 'styled-components-modifiers';

const BUTTON_MODIFIERS = {
    small: () => `
        font-size: ${typeScale.helperText};
        padding: 8px;
    `,
    large: () => `
        font-size: ${typeScale.header5};
        padding: 16px 24px;
    `,
    warning: () => `
        background-color: ${props => props.theme.status.warningColor};
        color: ${props => props.theme.textColorInverted};

        &:hover, &:focus {
            background-color: ${props => props.theme.status.warningColorHover};
            outline: 3px solid ${props => props.theme.status.warningColorHover};
        }

        &:active {
            background-color: ${props => props.theme.status.warningColorActive};
        }
    `
}

const Button = styled.button `
    min-widt: 180px;
    cursor: pointer;
    border-radius: 2px;
    color: #ffffff;
    padding: 12px 24px;
    font-size: ${typeScale.paragraph};
    font-family: "Robot Mono", monospace;
    transition: background-color 0.2s linear, color 0.2s liner;

    &:disabled {
        background: unset;
        background-color: #e7e7e7;
        color: #585858;
        cursor: none;
    }
`

export const PrimaryButton = styled(Button) `
    background: linear-gradient(0deg, #0073cf 50%, #158fef 50%);
    border: none;
    color: #ffffff;

    &:hover {
        background: linear-gradient(0deg, #158fef 50%, #158fef 50%);
        border: none;
    }

    &:focus {
        border: solid 1px #0073cf;
    }

    &:active {
        background: linear-gradient(0deg, #0073cf 50%, #0073cf 50%);
        border-color: #0073cf;
    }

    ${applyStyleModifiers(BUTTON_MODIFIERS)}
`
export const SecondaryButton = styled(Button) `
    background: linear-gradient(0deg, #e7e7e7 50%, #FFFFFF 50%);
    border-radius: 5px;
    border: solid 1px #b6b6b6;
    color: #003087;

    &:hover {
        background: linear-gradient(0deg, #e7e7e7 50%, #e7e7e7 50%);
        border: solid 1px #e7e7e7;
    }

    &:focus {
        border: solid 1px #e7e7e7;
    }

    &:active {
        background: linear-gradient(0deg, #FFFFFF 50%, #FFFFFF 50%);
    }

    ${applyStyleModifiers(BUTTON_MODIFIERS)}
`

export const CrossSellButton = styled(Button) `
    background: linear-gradient(0deg, #b30032 50%, #e01933 50%);
    border: none;
    color: #FFFFFF;

    &:hover {
        background: linear-gradient(0deg, #e01933 50%, #e01933 50%);
        border: none;
    }

    &:focus {
        border: solid 1px #e01933;
    }

    &:active {
        background: linear-gradient(0deg, #e01933 50%, #e01933 50%);
        border-color: #e01933;
    }
    ${applyStyleModifiers(BUTTON_MODIFIERS)}
`
