import { Heading } from "../common/heading/Heading"
import { Paragraph } from "../common/paragraph/Paragraph"
import { AuthorPost, RecommendationCard, RecommendationCards, RecommendationText, RecommendationWrapper } from "./styles"
import { data } from "./data"
import { Subheading } from "../common/subheading/Subheading"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons"

export const Recommendation = () => {
    return (
        <RecommendationWrapper>
            <Heading>Recommendations</Heading>
            <Paragraph>I love when people like my work. A positive feedback adds positive energy to your work and boosts your confidence.</Paragraph>
            <RecommendationCards>
                {
                    data.recommendations.map((item, index) => (
                        <RecommendationCard>
                            <RecommendationText>{item.text}</RecommendationText>
                            <Subheading>{item.author.name}</Subheading>
                            <AuthorPost>{item.author.post}</AuthorPost>
                            {
                                [...Array(4)].map(() => (
                                    <FontAwesomeIcon icon={faStar} color='#ffc000' />
                                ))
                            }
                            <FontAwesomeIcon icon={faStarHalfStroke} color='#ffc000' />
                        </RecommendationCard>
                    ))
                }
            </RecommendationCards>
        </RecommendationWrapper>
    )
}