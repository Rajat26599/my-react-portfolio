import { About } from "../about/About"
import { Banner } from "../banner/Banner"
import { Experience } from "../experience/Experience"
import { Projects } from "../projects/Projects"
import { Recommendation } from "../recommendation/Recommendation"
import { HomeWrapper } from "./styles"

export const Home = () => {
    return (
        <HomeWrapper>
            <Banner />
            <Experience />
            <About />
            <Projects />
            <Recommendation />
        </HomeWrapper>
    )
}