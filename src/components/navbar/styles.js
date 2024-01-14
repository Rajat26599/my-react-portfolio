import styled from "styled-components";
import { ComponentWrapper, globalStylingSpecs } from "../../util/global/stylingSpecs";

export const NavbarWrapper = styled(ComponentWrapper)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 0;
    margin-bottom: 0;
    padding-top: 1rem;
    padding-bottom: 1rem;

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
    padding-left: 1rem;
    padding-right: 1rem;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
        opacity: 0.9;
    }
    a:link, a:visited {
        text-decoration: none;
        color: inherit;
    }
`

export const NameLogo = styled.img`
    height: 1.8rem;
    z-index: 99;
`

export const BreadcrumsWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const Breadcrums = styled.div`
    width: 2rem;
    height: 0.2rem;
    background-color: ${globalStylingSpecs.color.myBlue};
    margin: 0.2rem;
`