import styled from "styled-components";
import { globalStylingSpecs } from "../../global/stylingSpecs";

export const ChartDiv = styled.div`
    width: 60%;
    height: 350px;

    @media(max-width: ${globalStylingSpecs.device.small}) {
        width: 100%;
    }
`