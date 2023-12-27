import styled from "styled-components";
import { globalStylingSpecs } from "../../util/global/stylingSpecs";

export const ProjectWrapper = styled.div`
    margin: ${globalStylingSpecs.spacing.pageMargin};
`
export const ProjectCards = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    flex-wrap: wrap;
`
export const ProjectCard = styled.div`
    position: relative;
    width: 30%;
    height: auto;
    border-radius: 1rem;
    margin-bottom: 2rem;
`
export const ProjectImage = styled.img`

`
export const ProjectContent = styled.div`
    position: absolute;
    bottom: 0;
    margin: 1rem;
`
export const Subtitle = styled.p`
    color: ${globalStylingSpecs.color.myGray};
`