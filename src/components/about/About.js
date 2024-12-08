import { Heading } from "../common/heading/Heading"
import { AboutCard, AboutWrapper, CardsWrapper, Number, AboutCardIcon, AboutCardContent, Progressbars, ProgressbarWrapper, ProgressbarBox, ProgressFilling, TechName, SkillsContainer, TechIcon, TechNameSpan } from "./styles"
import '../../../node_modules/linearicons/dist/web-font/style.css'
import { data } from "./data"
import { Subheading } from "../common/subheading/Subheading"
import { Paragraph } from "../common/paragraph/Paragraph"
import { Spacer } from "../common/spacer/Spacer"
import { useEffect, useRef, useState } from "react"
import { Counter } from "../common/counter/Counter"
import HierarchyChart from "../../util/charts/hierarchyChart/HierarchyChart"

export const About = () => {
    const progressRef = useRef([])
    const [inView, setInView] = useState(null)
    
    const callback = (entries) => {
        setInView(entries[0].isIntersecting)
    }

    useEffect(() => {
        const observer = new IntersectionObserver(callback, { threshold: 0.1 })

        // observing each reference element
        if(progressRef.current) observer.observe(progressRef.current)
    
        // unmounting observer
        return () => observer.disconnect()
    })

    return (
        <AboutWrapper id='about'>
            <Heading>About Myself</Heading>
            <Paragraph>
                4 years of experience in Full Stack Development with expertise in React.js, Spring Boot, and MERN stack, working with Infosys and TCS, excelling in UI/UX development, backend APIs, and agile methodologies. Passion for continuous learning and creative problem-solving.
            </Paragraph>
            <CardsWrapper>
                {
                    data.stats.map((item, index) => (
                        <AboutCard key={index} href={item.url} target="_blank" hasurl={item.url} bgimg={item.img}>
                            <AboutCardIcon className={item.iconClass}></AboutCardIcon> 
                            <Number><Counter to={item.number}></Counter>{item.additional}</Number>
                            <AboutCardContent>{item.text}</AboutCardContent>
                        </AboutCard>
                    ))
                }
            </CardsWrapper>
            <Spacer height={'4rem'}></Spacer>
            <Subheading>Tools Expertness</Subheading>
            <SkillsContainer>
                <Progressbars ref={progressRef}>
                    {
                        data.skills.map((item, index) => (
                            <ProgressbarWrapper key={index}>
                                <TechName>
                                    {
                                        item.techName.map(tech => (
                                            <>
                                                <TechIcon src={tech.icon} width={16} alt={`${tech.name} logo`} />
                                                <TechNameSpan>{tech.name}</TechNameSpan>
                                            </>
                                        ))
                                    }
                                    &nbsp;&nbsp; 
                                    {item.width}%
                                </TechName>
                                <ProgressbarBox>
                                    <ProgressFilling width={item.width} $inView={inView}></ProgressFilling>
                                </ProgressbarBox>
                            </ProgressbarWrapper>
                        ))
                    }
                </Progressbars>
                <HierarchyChart />
            </SkillsContainer>
        </AboutWrapper>
    )
}