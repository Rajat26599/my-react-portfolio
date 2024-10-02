import { Heading } from "../common/heading/Heading"
import { Paragraph } from "../common/paragraph/Paragraph"
import { ProjectCard, ProjectCards, ProjectContent, ProjectImage, ProjectWrapper } from "./styles"
import { data } from "./data"
import { Subheading } from "../common/subheading/Subheading"

export const Projects = () => {
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
                            ref={el => ProjectCardRef.current[index] ? ProjectCardRef.current[index].element = el : null}
                            $inView={inView[index]}
                            $backgroundColor={item.backgroundColor}
                            >
                            <a href={item.link} target="_blank" rel="noreferrer">
                                <ProjectContent>
                                    <Subheading>{item.title}</Subheading>
                                    {/* <Subtitle>{item.subtitle}</Subtitle> */}
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