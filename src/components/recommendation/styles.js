import styled from "styled-components";
import { globalStylingSpecs } from "../../util/global/stylingSpecs";

export const RecommendationWrapper = styled.div`
    padding: 0 ${globalStylingSpecs.spacing.pageMarginLarge};
    padding-bottom: ${globalStylingSpecs.spacing.pageMarginLarge};
    background-color: #f9f9ff;
    margin: ${globalStylingSpecs.spacing.pageMarginLarge} 0;

    @media(max-width: ${globalStylingSpecs.device.small}) {
        padding: 0 ${globalStylingSpecs.spacing.pageMarginSmall};
    }
`
export const RecommendationCards = styled.div`
    display: flex;
    justify-content: space-between;

    @media(max-width: ${globalStylingSpecs.device.small}) {
        flex-wrap: wrap;
    }
`
export const RecommendationCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 45%;
    background-color: white;
    padding: 1rem;
    border: 1px solid ${globalStylingSpecs.color.myLightGray};
    border-radius: 1rem;
    
    @media(max-width: ${globalStylingSpecs.device.small}) {
        width: 100%;
    }
`
export const RecommendationText = styled.pre`
    white-space: pre-line;
    white-space: -moz-pre-line;
    white-space: -pre-line;
    white-space: -o-pre-line;
    word-wrap: break-word;
    text-align: justify;
    line-height: ${globalStylingSpecs.font.lineHeight};

    font-style: italic;
    text-align: left;
    opacity: 0.5;
`
export const AuthorDetails = styled.div`
`
export const AuthorPost = styled.p`
    font-size: 0.9rem;
    font-weight: 700;
    opacity: 0.5;
    margin-block-start: -1em;
`