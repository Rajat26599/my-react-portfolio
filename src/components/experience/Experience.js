import { Heading } from "../common/heading/Heading"
import { Body, CompanyLogo, CompanyLogoWrapper, ResponsibilitiesItem, Duration, ExperienceContent, ExperiencePanel, 
    ExperienceWrapper, ExperiencesRow, ProfileName, ResponsibilitiesPanel, RoleName, ExperienceRows, ExperienceRowsWrapper, 
    ExperienceRowIconWrapper, At } from "./styles"
import { data } from "./data"
import { useState } from "react"
import { Subheading } from "../common/subheading/Subheading"

// FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck, faAnglesRight } from "@fortawesome/free-solid-svg-icons"
import { Spacer } from "../common/spacer/Spacer"

export const Experience = () => {
    const [ selectedExperience, setSelectedExperience ] = useState(0);

    const getExperienceRow = (item, index) => {
        return (
            <ExperienceRowsWrapper key={index}>
                <ExperienceRows>
                    <ExperiencesRow active={selectedExperience===index} onClick={() => setSelectedExperience(index)}>
                        <CompanyLogoWrapper>
                            <CompanyLogo src={item.logo.url} width={item.logo.width} alt={item.logo.alt}></CompanyLogo>
                        </CompanyLogoWrapper>
                        <ExperienceContent>
                            <RoleName>
                                <ProfileName>{item.profileName}</ProfileName>
                                <br /> 
                                <At>{item.companyName}</At> 
                                {/* &nbsp;  */}
                                {/* <CompanyName>{item.companyName}</CompanyName> */}
                            </RoleName>
                            <Duration>{item.duration}</Duration>
                        </ExperienceContent>
                    </ExperiencesRow>
                    <ExperienceRowIconWrapper active={selectedExperience===index}>
                        <FontAwesomeIcon icon={faAnglesRight} />
                    </ExperienceRowIconWrapper>
                </ExperienceRows>
                {selectedExperience === index && getResponsibilitiesPanel()}
            </ExperienceRowsWrapper>
        )
    }
    
    const getResponsibilitiesPanel = () => {
        return (
            // by adding a key react will re-render ResponsibilitiesPanel when selectedExperience changes
            // this let the fadeIn animation take effect otherwise it would have only happened once in the beginning
            <ResponsibilitiesPanel key={selectedExperience}>
                <Subheading>Roles</Subheading>
                <ul>
                    {
                        ((selectedExperience < data.workExperiences.length) ? data.workExperiences[selectedExperience] : data.otherExperiences[selectedExperience - data.workExperiences.length]).responsibilities.map((item, index) => (
                            <ResponsibilitiesItem key={index}>
                                <FontAwesomeIcon icon={faCheck} color='green' />
                                &nbsp;
                                <li key={index}>{item}</li>
                            </ResponsibilitiesItem>
                        ))
                    }
                </ul>
            </ResponsibilitiesPanel>
        )
    }

    return (
        <ExperienceWrapper id='experience'>
            <Heading>Experience</Heading>
            <Body>
                <ExperiencePanel>
                    {
                        data.workExperiences.map((item, index) => (
                            getExperienceRow(item, index) 
                        ))
                    }
                </ExperiencePanel>
                
            </Body>
            
            <Spacer height={'4rem'}></Spacer>

            <Subheading>Positions of Responsibility</Subheading>
            <Body>
                <ExperiencePanel>
                    {
                        data.otherExperiences.map((item, index) => (
                            getExperienceRow(item, index + data.workExperiences.length)
                        ))
                    }
                </ExperiencePanel>
            </Body>
        </ExperienceWrapper>
    )
}