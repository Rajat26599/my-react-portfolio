import styled from "styled-components";
import { ComponentWrapper, globalStylingSpecs } from "../../util/global/stylingSpecs";

export const NavbarWrapper = styled(ComponentWrapper)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 0;
    margin-bottom: 0;

    @media(max-width: ${globalStylingSpecs.device.small}) {
        margin-left: ${globalStylingSpecs.spacing.pageMarginSmall};
        margin-right: ${globalStylingSpecs.spacing.pageMarginSmall};
    }
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