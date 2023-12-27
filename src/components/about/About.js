import { Heading } from "../common/heading/Heading"
import { AboutCard, AboutWrapper, CardsWrapper, Number, AboutCardIcon, AboutCardContent, Progressbars, ProgressbarWrapper, ProgressbarBox, ProgressFilling, TechName, AboutMyselfContent } from "./styles"
import '../../../node_modules/linearicons/dist/web-font/style.css'
import { data } from "./data"
import { Subheading } from "../common/subheading/Subheading"

export const About = () => {
    return (
        <AboutWrapper>
            <Heading>About Myself</Heading>
            <AboutMyselfContent>I have been working on my profile as a Full-stack Web Developer lately. I’m eager to seek opportunities in softwares too. I'm skilled in Java/Spring Boot, Python/Django, React, Angular, C, Wordpress, IoT, databases and more. And I’m also an experienced Graphic Designer.</AboutMyselfContent>
            <CardsWrapper>
                {
                    data.stats.map((item, index) => (
                        <AboutCard key={index}>
                            <AboutCardIcon className={item.iconClass}></AboutCardIcon> 
                            <Number>{item.number}</Number>
                            <AboutCardContent>{item.text}</AboutCardContent>
                        </AboutCard>
                    ))
                }
            </CardsWrapper>
            <Subheading>Tools Expertness</Subheading>
            <Progressbars>
                {
                    data.skills.map((item, index) => (
                        <ProgressbarWrapper key={index}>
                            <TechName>{item.techName}</TechName>
                            <ProgressbarBox>
                                <ProgressFilling width={item.width}></ProgressFilling>
                            </ProgressbarBox>
                        </ProgressbarWrapper>
                    ))
                }
            </Progressbars>
        </AboutWrapper>
    )
}