import styled from "styled-components";
import { ComponentWrapper, globalStylingSpecs } from "../../util/global/stylingSpecs";
import { fadeIn } from "../../util/animations/fadeIn";
import { SubheadingText } from "../common/subheading/styles";

export const ProjectWrapper = styled(ComponentWrapper)``

//  unlike space-evenly space-around provides half sized spacing around the edges
export const ProjectCards = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    flex-wrap: wrap;
`
export const ProjectCard = styled.div`
    position: relative;
    width: 30%;
    aspect-ratio: 1 / 1;
    border-radius: 1rem;
    margin-bottom: 2rem;
    overflow: hidden;
    
    ${props => props.$inView ? 
        css`animation: ${fadeIn} 1s ease-in-out;`
        : css`opacity: 0;`
    }
    background-color: ${props => props.$backgroundColor ? props.$backgroundColor : 'white'};

    &:hover {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.15), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
        ${SubheadingText} {
            color: rgb(50,50,255);
        }
    }

    @media(max-width: ${globalStylingSpecs.device.medium}) {
        width: 40%;
        margin: 1rem auto;
    }

    @media(max-width: ${globalStylingSpecs.device.small}) {
        width: 100%;
        margin: 1rem auto;
    }
`
export const ProjectImage = styled.img`
    width: 100%;
    height: 100%;
`
export const ProjectContent = styled.div`
    position: absolute;
    bottom: 0;
    padding-left: 1rem;
    margin-bottom: 1rem;
    background: rgba(255,255,255,0.5);
    width: 100%;
`
export const Subtitle = styled.p`
    color: ${globalStylingSpecs.color.myGray};
`