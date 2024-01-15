import styled from "styled-components";
import bannerImage from './../../assets/img/home-banner.jpg';
import { globalStylingSpecs } from "../../util/global/stylingSpecs";
import { fadeIn } from "../../util/animations/fadeIn";

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
    animation: ${fadeIn} 1s linear;
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