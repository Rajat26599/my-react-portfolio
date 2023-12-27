import styled from "styled-components";
import { globalStylingSpecs } from "../../util/global/stylingSpecs";

export const RecommendationWrapper = styled.div`
    padding: 0 ${globalStylingSpecs.spacing.pageMargin};
    padding-bottom: ${globalStylingSpecs.spacing.pageMargin};
    background-color: #f9f9ff;
    margin: ${globalStylingSpecs.spacing.pageMargin} 0;
`
export const RecommendationCards = styled.div`
    display: flex;
    justify-content: space-between;
`
export const RecommendationCard = styled.div`
    width: 45%;
    background-color: white;
    padding: 1rem;
    border: 1px solid ${globalStylingSpecs.color.myLightGray};
    border-radius: 1rem;
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
export const AuthorPost = styled.p`
    font-size: 0.9rem;
    font-weight: 700;
    opacity: 0.5;
    margin-block-start: -1em;
`