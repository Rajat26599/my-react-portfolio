import { upper } from "../../../util/common/helperFunctions";
import { SubheadingText } from "./styles"

export const Subheading = (props) => {
    const {
        text
    } = props;
    return (
        <SubheadingText>{upper(text || props.children)}</SubheadingText>
    )
}