import styled from "styled-components"

export const ButtonWrapper = styled.a`
    padding: 0px 42px;
    line-height: 50px;
    background-image: linear-gradient(to right, #8490ff 0%, #62bdfc 48%, #8490ff 100%);
    background-size: 200% auto;
    color: #fff;
    display: inline-block;
    border-radius: 5px;
    font-size: 13px;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    transition: all 300ms linear 0s;
    cursor: pointer;

    &:hover {
        background-position: right center;
        color: #fff;
    }
`