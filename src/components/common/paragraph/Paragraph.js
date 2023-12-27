import { ParagraphText } from "./styles"

export const Paragraph = (props) => {
    const {
        text
    } = props;

    return (
        <ParagraphText>{text || props.children}</ParagraphText>
    )
}