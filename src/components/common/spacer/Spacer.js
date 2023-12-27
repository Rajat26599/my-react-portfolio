import { SpacerWrapper } from "./styles"

export const Spacer = (props) => {
    const {
        height, weight
    } = props;

    return (
        <SpacerWrapper height={height} weight={weight}></SpacerWrapper>
    )
}