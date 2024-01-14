import styled from "styled-components"

export const globalStylingSpecs = {
    device: {
        medium: '1024px',
        tablet: '768px',
        small: '480px',
    },
    font: {
        size: {
            lg: '1.2rem',
            sm: '0.9rem',
        },
        lineHeight: '1.4rem'
    },
    color: {
        myBlue: '#8490ff',
        myGray: '#889',
        myLightGray: '#dee',
        myBlack: '#222'
    },
    spacing: {
        pageMarginLarge: '5rem',
        pageMarginSmall: '1rem',
    }
}

export const ComponentWrapper = styled.div`
    margin: ${globalStylingSpecs.spacing.pageMarginLarge};

    @media(max-width: ${globalStylingSpecs.device.small}) {
        margin: ${globalStylingSpecs.spacing.pageMarginSmall};
    }
`