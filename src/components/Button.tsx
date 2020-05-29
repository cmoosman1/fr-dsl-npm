import styled from 'styled-components';

export interface ButtonProps {
    primary?: Boolean
}

export const Button = styled.button<ButtonProps>`
    background: ${props => props.primary ? "red" : "white"};
    color: ${props => props.primary ? "white" : "red"};
    cursor: pointer;
    font-size: 1em;
    height: 50px;
    margin: 1em;
    padding: 0.25em 1em;
    width: 175px;

    &:hover {
        background: #0073cf;
        color: #FFFFFF;
    }

    &:focus {
        background: #0073cf;
        outline: 3px solid #0073cf;
        outline-offset: 2px;
    }

    &:active {
        background: #0073cf;
        color: #FFFFFF;
    }

    &:disabled {
        background: #737581;
        color: #f4f5f7;
        cursor: none;
    }
`;
