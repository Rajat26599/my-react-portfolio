import styled from "styled-components";

export const IconList = styled.ul`
    display: flex;
    justify-content: ${props => props.justifyIcons};
    padding-inline-start: 0;
`
export const IconListItem = styled.li`
    font-size: 1.2rem;
    list-style: none;
    margin-right: 1.5rem;

    &:hover {
        opacity: 0.5;
    }
`