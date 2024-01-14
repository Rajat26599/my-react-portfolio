import { Heading } from "../common/heading/Heading"
import { AboutCard, AboutWrapper, CardsWrapper, Number, AboutCardIcon, AboutCardContent, Progressbars, ProgressbarWrapper, ProgressbarBox, ProgressFilling, TechName } from "./styles"
import '../../../node_modules/linearicons/dist/web-font/style.css'
import { data } from "./data"
import { Subheading } from "../common/subheading/Subheading"
import { Paragraph } from "../common/paragraph/Paragraph"
import { Spacer } from "../common/spacer/Spacer"

export const About = () => {
    return (
        <AboutWrapper id='about'>
            <Heading>About Myself</Heading>
            <Paragraph>I have been working on my profile as a Full-stack Web Developer lately. I’m eager to seek opportunities in softwares too. I'm skilled in Java/Spring Boot, Python/Django, React, Angular, C, Wordpress, IoT, databases and more. And I’m also an experienced Graphic Designer.</Paragraph>
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
            <Spacer height={'4rem'}></Spacer>
            <Subheading>Tools Expertness</Subheading>
            <Progressbars>
                {
                    data.skills.map((item, index) => (
                        <ProgressbarWrapper key={index}>
                            <TechName>{item.techName} &nbsp;&nbsp; {item.width}%</TechName>
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