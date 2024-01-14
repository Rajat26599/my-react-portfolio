import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { globalStylingSpecs } from "../../util/global/stylingSpecs"
import { Paragraph } from "../common/paragraph/Paragraph"
import { SocialSites } from "../common/socialSites/SocialSites"
import { DeveloperName, FooterWrapper } from "./styles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Footer = () => {
    return (
        <FooterWrapper id='footer'>
            <SocialSites iconColor={globalStylingSpecs.color.myLightGray} justifyIcons={'center'} />
            <Paragraph>
                Copyright © All rights reserved | Made with
                &nbsp;
                <span><FontAwesomeIcon icon={faHeart} /></span>
                &nbsp;
                by
                &nbsp;
                <DeveloperName>Rajat Saxena</DeveloperName>
            </Paragraph>
        </FooterWrapper>
    )
}