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
`;
