import styled from "styled-components";
import { globalStylingSpecs } from "../../util/global/stylingSpecs";

export const NavbarWrapper = styled.div`
    margin-top: 0;
    margin-bottom: 0;
    padding-top: 1rem;
    padding-bottom: 1rem;

    @media(max-width: ${globalStylingSpecs.device.medium}) and (min-width: ${globalStylingSpecs.device.small}) {
        padding-top: 2rem;
        padding-bottom: 2rem;
    }
`

export const MainNavbar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 ${globalStylingSpecs.spacing.pageMarginLarge};

    @media(max-width: ${globalStylingSpecs.device.small}) {
        margin: ${globalStylingSpecs.spacing.pageMarginSmall};
    }
`

export const NavList = styled.ul`
    display: flex;
    align-items: center;
    margin-block-start: 0;
    margin-block-end: 0;
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

    ${props => props.expanded && `
        display: block;
        padding-top: 1rem;
        padding-bottom: 1rem;
    `}

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
    transition: all 1s ease-in-out;
    transform-origin: right;
    
    ${props => props.showCross && `
        &:nth-child(1) {
            transform: rotate(-40deg);
        }

        &:nth-child(2) {
            opacity: 0;
        }

        &:nth-child(3) {
            transform: rotate(40deg);
        }
    ` }
`

export const NavExpansion = styled.ul`
    position: absolute;
    height: 50vh;
    width: 100vw;
    opacity: 1;
    background-color: white;
    padding-top: 2rem;
    padding-bottom: 2rem;
    z-index: 9;
    transition: all 0.5s ease;
    box-shadow: 0px 10px 10px rgba(0,0,0,0.15);

    ${props => !props.visible && `
        height: 0;
        opacity: 0;
        transition: all 0s;
    `}
`