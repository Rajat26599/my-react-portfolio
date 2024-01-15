import styled from "styled-components";
import { ComponentWrapper, globalStylingSpecs } from "../../util/global/stylingSpecs";
import { fadeIn } from "../../util/animations/fadeIn";

export const ProjectWrapper = styled(ComponentWrapper)``

export const ProjectCards = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    flex-wrap: wrap;
`
export const ProjectCard = styled.div`
    position: relative;
    width: 30%;
    aspect-ratio: 1 / 1;
    border-radius: 1rem;
    margin-bottom: 2rem;
    overflow: hidden;
    animation: ${fadeIn} 1s linear;

    @media(max-width: ${globalStylingSpecs.device.small}) {
        width: 100%;
        margin: 1rem auto;
    }
`
export const ProjectImage = styled.img`
    @media(max-width: ${globalStylingSpecs.device.small}) {
        width: 100%;
        height: 100%;
    }
`
export const ProjectContent = styled.div`
    position: absolute;
    bottom: 0;
    margin: 1rem;
`
export const Subtitle = styled.p`
    color: ${globalStylingSpecs.color.myGray};
`