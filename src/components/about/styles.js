import styled from "styled-components";
import { ComponentWrapper, globalStylingSpecs } from "../../util/global/stylingSpecs";

export const AboutWrapper = styled(ComponentWrapper)``

export const CardsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
`
export const AboutCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20%;
    border: 1px solid ${globalStylingSpecs.color.myLightGray};
    border-radius: 1rem;
    padding: 1rem;

    &:hover {
        border-color: ${globalStylingSpecs.color.myBlue};
    }

    @media(max-width: ${globalStylingSpecs.device.small}) {
        width: 40%;
    }
`
export const AboutCardIcon = styled.i`
    font-size: 1.5rem;
    color: ${globalStylingSpecs.color.myBlue};
`
export const Number = styled.p`
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
export const Progressbars = styled.ul`
    width: 50%;

    @media(max-width: ${globalStylingSpecs.device.small}) {
        width: 80%;
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
    width: ${props => props.width}%;
    height: 0.5rem;
    background-color: #007bff;
    border-radius: 1rem;
`