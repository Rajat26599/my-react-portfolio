import styled, { css } from "styled-components";
import bannerImage from './../../assets/img/home-banner.jpg';
import { globalStylingSpecs } from "../../util/global/stylingSpecs";
import { fadeIn } from "../../util/animations/fadeIn";
import { bounce } from "../../util/animations/bounce";
import { IconList, IconListItem } from "../common/socialSites/styles";

export const BannerWrapper = styled.div`
    background-image: url(${bannerImage});
    background-size: contain;
    display: flex;
    width: 100vw;
    padding-top: 120px;
    margin-top: -80px;

    @media(max-width: ${globalStylingSpecs.device.tablet}) {
        height: auto;
    }
`

export const MyPicWrapper = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: flex-end;

    @media (max-width: ${globalStylingSpecs.device.small}) {
        display: none;
    }
`

export const MyPic = styled.img`
    height: 30vw;
    animation: ${fadeIn} 1s ease-in-out;
`

export const BannerContent = styled.div`
    @media(max-width: ${globalStylingSpecs.device.small}) {
        padding-left: ${globalStylingSpecs.spacing.pageMarginSmall};
        padding-right: ${globalStylingSpecs.spacing.pageMarginSmall};
    }
`

export const MyName = styled.h2`
    font-size: 3rem;
    opacity: 0.9;
`

export const ButtonWrapper = styled.div`
    margin: 1rem 0;
`

const bounceAnimationStyles = (i) => {
    return (
        css`
            ${IconListItem}:nth-child(${i}) {
                animation: ${css`${bounce} ${i*0.2}s ease-in-out;`}
                animation-delay: ${i===0 ? 0 : ((i-1)*0.2 - 0.1)}s;
            }
        `
        )
}

export const SocialSitesContainer = styled.div`
    ${IconList} {
        margin-block-start: 0;
        margin-block-end: 0;
        padding-top: 1rem;
        padding-bottom: 1rem;
    }
    
    ${() => [...Array(5)].map((item, index) => bounceAnimationStyles(index+1))}
    
`