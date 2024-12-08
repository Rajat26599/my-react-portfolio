import styled, { css } from "styled-components";
import { ComponentWrapper, globalStylingSpecs } from "../../util/global/stylingSpecs";
import { fadeIn } from "../../util/animations/fadeIn";

export const AboutWrapper = styled(ComponentWrapper)``

export const CardsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
`
export const AboutCard = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20%;
    border-radius: 1rem;
    padding: 1rem;
    border: 1px solid ${globalStylingSpecs.color.myLightGray};
    
    ${props => props.hasurl && css`
        cursor: pointer;
        text-decoration: none;
        &:hover {
            background-image: url(${props.bgimg});
            background-size: cover;
            background-position: center;
            transition: background 0.5s;
            animation: ${fadeIn} 0.5s ease;
        }
        &:hover > * {
            visibility: hidden;
        }
    `}
            
    @media(max-width: ${globalStylingSpecs.device.small}) {
        width: 40%;
    }
`
export const AboutCardIcon = styled.i`
    font-size: 1.5rem;
    color: ${globalStylingSpecs.color.myBlue};
`
export const Number = styled.p`
    color: ${globalStylingSpecs.color.myBlack};
    font-size: 1.5rem;
    font-weight: 700;
    margin-block-start: 0.5em;
    margin-block-end: 0.5em;
`
export const AboutCardContent = styled.p`
    color: ${globalStylingSpecs.color.myGray};
    margin-block-start: 0;
    margin-block-end: 0;
    text-align: center;
`
export const SkillsContainer = styled.div`
    display: flex;

    @media(max-width: ${globalStylingSpecs.device.small}) {
        display: block;
    }
`
export const TechIcon = styled.img`
    vertical-align: top;
    margin-right: 5px;
`
export const TechNameSpan = styled.span`
    margin-right: 5px;
`
export const Progressbars = styled.ul`
    width: 40%;
    padding-inline-start: 0;

    @media(max-width: ${globalStylingSpecs.device.small}) {
        width: 100%;
    }
`

export const ProgressbarWrapper = styled.li`
    background-color: transparent;
    height: 4rem;
`
export const TechName = styled.p`
    background-color: transparent;
    margin-block-start: 0;
    margin-block-end: 0;
`
export const ProgressbarBox = styled.div`
    border: 1px solid ${globalStylingSpecs.color.myLightGray};
    border-radius: 1rem;
    padding: 0.2rem;
    margin-top: 0.3rem;
    box-shadow: 0 20px 20px 0 rgba(132, 144, 255, 0.2);
    background-color: transparent;
`
export const ProgressFilling = styled.div`
    width: ${props => props.$inView ? props.width : 0}%;
    height: 0.5rem;
    background-color: #007bff;
    border-radius: 1rem;
    transition-duration: 2s;
    transition-property: width;
    transition-timing-function: ease;
`