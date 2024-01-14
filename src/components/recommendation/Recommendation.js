import { Heading } from "../common/heading/Heading"
import { Paragraph } from "../common/paragraph/Paragraph"
import { AuthorDetails, AuthorPost, RecommendationCard, RecommendationCards, RecommendationText, RecommendationWrapper } from "./styles"
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
                        <RecommendationCard key={index}>
                            <RecommendationText>{item.text}</RecommendationText>
                            <AuthorDetails>
                                <Subheading>{item.author.name}</Subheading>
                                <AuthorPost>{item.author.post}</AuthorPost>
                                {
                                    [...Array(4)].map((item, index) => (
                                        <FontAwesomeIcon key={index} icon={faStar} color='#ffc000' />
                                    ))
                                }
                                <FontAwesomeIcon icon={faStarHalfStroke} color='#ffc000' />
                            </AuthorDetails>
                        </RecommendationCard>
                    ))
                }
            </RecommendationCards>
        </RecommendationWrapper>
    )
}