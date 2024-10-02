import styled, { css } from "styled-components";
import bannerImage from './../../assets/img/snow-mountain.jpg';
import { globalStylingSpecs } from "../../util/global/stylingSpecs";
import { bounce } from "../../util/animations/bounce";
import { IconList, IconListItem } from "../common/socialSites/styles";

export const BannerWrapper = styled.div`
    background-image: url(${bannerImage});
    background-color: rgba(10,16,30,0.5);
    background-blend-mode: multiply;
    background-size: cover;
    background-position-y: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
    width: 100vw;
    height: calc(100vh - 80px);

    @media(max-width: ${globalStylingSpecs.device.tablet}) {
        height: calc(50vh - 80px);
    }
`

export const WelcomeMessage = styled.p`
    font-size: 3rem;
    height: 3.5rem;
    overflow: hidden;
    margin-block-start: 0;
    margin-block-end: 0.8rem;

    div {
        display: inline-flex;
    }

    @media(max-width: ${globalStylingSpecs.device.small}) {
        font-size: 2rem;
        height: 2.5rem;
    }
`
export const Intro = styled.p`
    color: white;
    opacity: 0.6;
    letter-spacing: 1px;
`

export const ButtonWrapper = styled.div`
    margin-top: 1rem;
    margin-bottom: 1rem;
`

const bounceAnimationStyles = (i) => {
    return (
        css`
            ${IconListItem}:nth-child(${i}) {
                animation: ${css`${bounce} ${i*0.2}s ease-in-out;`}
                animation-delay: ${i===0 ? 0 : ((i-1)*0.2 - 0.1)}s;

                &:hover {
                    transform: scale(1.5);
                }
            }
        `
        )
}

export const SocialSitesContainer = styled.div`
    display: flex;
    justify-content: center;

    ${IconList} {
        margin-block-start: 0;
        margin-block-end: 0;
        padding-top: 1rem;
        padding-bottom: 1rem;
    }
    
    ${() => [...Array(5)].map((_, index) => bounceAnimationStyles(index+1))}
    
`