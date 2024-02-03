import { Heading } from "../common/heading/Heading"
import { Paragraph } from "../common/paragraph/Paragraph"
import { ProjectCard, ProjectCards, ProjectContent, ProjectImage, ProjectWrapper, Subtitle } from "./styles"
import { data } from "./data"
import { Subheading } from "../common/subheading/Subheading"
import { createRef, useEffect, useRef, useState } from "react"

export const Projects = () => {
    // by default ref.current is null but we can set it to be anything
    // setting ref.current to be an array here as we need refs for multiple card elements
    const ProjectCardRef = useRef([])
    const [inView, setInView] = useState([])

    if (ProjectCardRef.current.length !== data.projects.length) {
        // add or remove refs
        ProjectCardRef.current = Array(data.projects.length)
          .fill()
          //making every element of ProjectCardRef.current array to be a reference placeholder
          .map((_, i) => ProjectCardRef.current[i] || createRef());
    }

    // callback will execute for element's entry and exit
    const callback = (entries) => {
        var arr = []
        entries.forEach(entry => arr.push(entry.isIntersecting))
        setInView(arr)
    }
    // options for intersection observer
    const options = {
        rootMargin: '0px',
        // when 10% of the element comes into view, callback will be triggered
        threshold: 0.1
    }
    useEffect(() => {
        const observer = new IntersectionObserver(callback, options)
        // observing each reference element for each project card
        data.projects.forEach((_, i) => {
            if(ProjectCardRef.current) observer.observe(ProjectCardRef.current[i])
        })
        // unmounting observer
        return () => observer.disconnect()
    }, [ProjectCardRef, options])

    return (
        <ProjectWrapper id='projects'>
            <Heading>Recent Projects</Heading>
            <Paragraph>The best way to learn a technology is to create projects in it. I've taken it very sincerely.</Paragraph>
            <ProjectCards>
                {
                    data.projects.map((item, index) => (
                        <ProjectCard 
                            key={index} 
                            // relocate actual refereces to ProjectCard.Ref.current array index wise
                            ref={el => ProjectCardRef.current[index] = el}
                            inView={inView[index]}
                            >
                            <a href={item.link} target="_blank" rel="noreferrer">
                                <ProjectContent>
                                    <Subheading>{item.title}</Subheading>
                                    <Subtitle>{item.subtitle}</Subtitle>
                                </ProjectContent>
                                <ProjectImage src={item.img}></ProjectImage>
                            </a>
                        </ProjectCard>
                    ))
                }
            </ProjectCards>
        </ProjectWrapper>
    )
}