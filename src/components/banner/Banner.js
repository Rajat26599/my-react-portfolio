import { BannerWrapper, ButtonWrapper, SocialSitesContainer, Intro, WelcomeMessage } from "./styles"
import '../../../node_modules/linearicons/dist/web-font/style.css'

import { SocialSites } from "../common/socialSites/SocialSites"
import { Button } from "../common/Button/Button"
import Typewriter from 'typewriter-effect';

export const Banner = () => {
    return (
        <BannerWrapper id='banner'>
            <WelcomeMessage>
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter.typeString('<div>Hi! I am&nbsp;<span style="color: gold;">Rajat Saxena</span></div>')
                        .pauseFor(3500)
                        .deleteAll()
                        .start();
                    }}
                    options={{
                        loop: true,
                    }}
                />
            </WelcomeMessage>
            <Intro>3+ years of passion about web development and leveraging cutting-edge <br /> technologies to create impactful solutions.</Intro>
            <SocialSitesContainer>
                <SocialSites iconColor={'white'} />
            </SocialSitesContainer>
            <ButtonWrapper>
                <a href='#experience'>
                    <Button>Discover Now</Button>
                </a>
            </ButtonWrapper>
        </BannerWrapper>
    )
}