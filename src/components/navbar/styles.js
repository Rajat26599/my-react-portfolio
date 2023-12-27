import styled from "styled-components";

export const NavbarWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 7rem;
    z-index: 99;
`

export const NavList = styled.ul`
    display: flex;
`

export const NavListItem = styled.li`
    list-style: none;
    display: inline-block;
    font-size: 0.9rem;
    font-weight: bold;
    padding: 1rem;
    opacity: 0.5;

    &:hover {
        opacity: 0.9;
    }
`

export const NameLogo = styled.img`
    height: 1.8rem;
    z-index: 99;
`