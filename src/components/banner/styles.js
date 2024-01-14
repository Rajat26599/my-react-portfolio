import styled from "styled-components";
import bannerImage from './../../assets/img/home-banner.jpg';
import { globalStylingSpecs } from "../../util/global/stylingSpecs";

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

export const BannerButton = styled.a`
    padding: 0px 42px;
    margin: 1rem 0;
    line-height: 50px;
    background-image: linear-gradient(to right, #8490ff 0%, #62bdfc 48%, #8490ff 100%);
    background-size: 200% auto;
    color: #fff;
    display: inline-block;
    border-radius: 5px;
    font-size: 13px;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    transition: all 300ms linear 0s;

    &:hover {
        background-position: right center;
        color: #fff;
    }
`