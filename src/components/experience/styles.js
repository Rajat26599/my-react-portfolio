import styled from "styled-components";
import { ComponentWrapper, globalStylingSpecs } from "../../util/global/stylingSpecs";
import { fadeIn } from "../../util/animations/fadeIn";

export const ExperienceWrapper = styled(ComponentWrapper)``

export const Body = styled.div`
    display: flex;
    justify-content: space-between;

    @media(max-width: ${globalStylingSpecs.device.small}) {
        flex-wrap: wrap;
    }
`

export const ExperiencePanel = styled.ul`
    width: 100%;
    margin-block-start: 0;
`
export const ExperienceRowsWrapper = styled.div`
    width: 100%;
    display: flex;
    margin-bottom: 1rem;

    @media(max-width: ${globalStylingSpecs.device.small}) {
        flex-direction: column;
    }
`
export const ExperienceRows= styled.div`
    display: flex;
    width: 50%;
    height: 100%;
    margin-bottom: 1rem;
    
    @media(max-width: ${globalStylingSpecs.device.small}) {
        width: 100%;
    }
`
export const ExperiencesRow = styled.li`
    display: flex;
    width: 90%;
    min-height: 5.5rem;
    border-width: 2px;
    border-style: solid;
    border-color: ${(props) => props.active ? globalStylingSpecs.color.myBlue : globalStylingSpecs.color.myLightGray};
    border-radius: 0.5rem;
    cursor: pointer;
    
    &:hover {
        border-color: ${globalStylingSpecs.color.myBlue};
    }
    
    @media(max-width: ${globalStylingSpecs.device.small}) {
        flex-direction: column;
    }
`
export const ExperienceRowIconWrapper = styled.div`
    display: ${props => props.active ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;
`
export const CompanyLogoWrapper = styled.div`
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
`
export const CompanyLogo = styled.img`

`
export const ExperienceContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
`
export const RoleName = styled.p`
    font-weight: 700;
    margin-block-start: 0;
`
export const ProfileName = styled.span`
    font-size: 1.2rem;
`
export const At = styled.span`
    font-size: 0.9rem;
    color: ${globalStylingSpecs.color.myGray};
`
export const CompanyName = styled.span`
    color: ${globalStylingSpecs.color.myBlue};
    font-size: 1.2rem;
`
export const Duration = styled.div`
    font-weight: 700;
    color: ${globalStylingSpecs.color.myGray};
`
export const ResponsibilitiesPanel = styled.div`
    width: 40%;
    height: 100%;
    border-width: 2px;
    border-style: solid;
    border-color: ${globalStylingSpecs.color.myGray};
    border-radius: 0.5rem;
    padding: 1rem;
    animation: ${fadeIn} 1s ease;

    @media(max-width: ${globalStylingSpecs.device.small}) {
        width: calc(100% - 4rem);
    }
`
export const ResponsibilitiesItem = styled.div`
    display: flex;
`