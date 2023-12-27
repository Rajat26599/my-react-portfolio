import styled from "styled-components";

export const SpacerWrapper = styled.div`
    ${props => 
        `
        height: ${props.height};
        width: ${props.width || '100%'};
        `
    }
`