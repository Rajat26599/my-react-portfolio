import { upper } from "../../../util/common/helperFunctions";
import { HeadingText } from "./styles"

export const Heading = (props) => {
    const {
        text
    } = props;
    return (
        <HeadingText>{upper(text || props.children)}</HeadingText>
    )
}