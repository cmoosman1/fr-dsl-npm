import styled from 'styled-components';

export interface ButtonProps {
    primary?: Boolean
}

export const Button = styled.button<ButtonProps>`
    background: ${props => props.primary ? "red" : "white"};
    border: 2px solid red;
    border-radius: 3px;
    color: ${props => props.primary ? "white" : "red"};
    fonst-size: 1em;
    height: 50px;
    margin: 1em;
    padding; 0.25em 1em;
    width: 175px

    &:hover {
        background: #0073cf;
        color: #FFFFFF;
    }

    &:focus {
        outline: 3px solid #0073cf;
        outline-offset: 2px;
    }

    &:active {
        background: #158fef;
        border-color: #158fef;
        color: #FFFFFF;
    }

    &:disabled {
        background: #737581;
        color: #f4f5f7;
        cursor: none;
    }
`;
