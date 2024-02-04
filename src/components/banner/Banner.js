import { BannerWrapper, MyPic, MyPicWrapper, MyName, BannerContent, ButtonWrapper, SocialSitesContainer } from "./styles"
import myFormalPic from './../../assets/img/home-left-1.png'
import '../../../node_modules/linearicons/dist/web-font/style.css'

import { upper } from "../../util/common/helperFunctions"
import { SocialSites } from "../common/socialSites/SocialSites"
import { globalStylingSpecs } from "../../util/global/stylingSpecs"
import { Button } from "../common/Button/Button"

export const Banner = () => {
    return (
        <BannerWrapper id='banner'>
            <MyPicWrapper>
                <MyPic src={myFormalPic}></MyPic>
            </MyPicWrapper>
            <BannerContent>
                <h5>This is me</h5>
                <MyName>{upper('Rajat Saxena')}</MyName>
                <p><i className="lnr lnr-bug"></i> &nbsp;&nbsp;&nbsp;&nbsp; Full-stack Developer &nbsp;&nbsp;&nbsp;&nbsp; <i className="lnr lnr-pie-chart"></i> &nbsp;&nbsp;&nbsp;&nbsp; Graphic Designer &nbsp;&nbsp;&nbsp;&nbsp; <i className="lnr lnr-code"></i> &nbsp;&nbsp;&nbsp;&nbsp; Software Enthusiast</p>
                <p><i className="lnr lnr-star"></i> &nbsp;&nbsp;&nbsp;&nbsp; Founder of CODE &nbsp;&nbsp;&nbsp;&nbsp; <i className="lnr lnr-briefcase"></i> &nbsp;&nbsp;&nbsp;&nbsp; ABA (UI Developer) at Infosys</p>
                <ButtonWrapper>
                    <a href='#experience'>
                        <Button>Discover Now</Button>
                    </a>
                </ButtonWrapper>
                <SocialSitesContainer>
                    <SocialSites iconColor={globalStylingSpecs.color.myGray} />
                </SocialSitesContainer>
            </BannerContent>
        </BannerWrapper>
    )
}