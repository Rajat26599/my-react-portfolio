import styled from "styled-components";
import bannerImage from './../../assets/img/home-banner.jpg';

export const BannerWrapper = styled.div`
    background-image: url(${bannerImage});
    background-size: contain;
    display: flex;
    width: 100vw;
    height: 100vh;
    padding-top: 120px;
    margin-top: -80px;
`

export const MyPicWrapper = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
`

export const MyPic = styled.img`
    transform: scale(0.8);
`

export const MyName = styled.h2`
    font-size: 3rem;
    opacity: 0.9;
`

export const BannerButton = styled.a`
    padding: 0px 42px;
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
export const IconList = styled.ul`
    display: flex;
    padding-inline-start: 0;
`
export const IconListItem = styled.li`
    font-size: 1.2rem;
    list-style: none;
    margin: 1rem 1.5rem 0 0;
    opacity: 0.5;

    &:hover {
        opacity: 0.9;
    }
`