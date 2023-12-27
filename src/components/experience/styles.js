import styled from "styled-components";
import { globalStylingSpecs } from "../../util/global/stylingSpecs";

export const ExperienceWrapper = styled.div`
    margin: ${globalStylingSpecs.spacing.pageMargin};
`

export const Body = styled.div`
    display: flex;
    justify-content: space-between;
`

export const ExperiencePanel = styled.ul`
    width: 45%;
    margin-block-start: 0;
`
export const ExperiencesRow = styled.li`
    display: flex;
    min-height: 5rem;
    border-width: 2px;
    border-style: solid;
    border-color: ${(props) => props.active ? globalStylingSpecs.color.myBlue : globalStylingSpecs.color.myLightGray};
    border-radius: 0.5rem;
    margin-bottom: 1rem;
    cursor: pointer;

    &:hover {
        border-color: ${globalStylingSpecs.color.myBlue};
    }
`
export const CompanyLogoWrapper = styled.div`
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const CompanyLogo = styled.img`

`
export const ExperienceContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`
export const RoleName = styled.p`
    font-weight: 700;
`
export const ProfileName = styled.span`
    font-size: 1.2rem;
`
// export const At = styled.span`
//     font-size: 0.9rem;
// `
// export const CompanyName = styled.span`
//     color: ${globalStylingSpecs.color.myBlue};
//     font-size: 1.2rem;
// `
export const Duration = styled.div`
    font-weight: 700;
    color: ${globalStylingSpecs.color.myGray};
`
export const ResponsibilitiesPanel = styled.div`
    width: 45%;
    height: 100%;
    border-width: 2px;
    border-style: solid;
    border-color: ${globalStylingSpecs.color.myGray};
    border-radius: 0.5rem;
    padding: 1rem;
`
export const ResponsibilitiesItem = styled.div`
    display: flex;
`