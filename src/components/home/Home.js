import { About } from "../about/About"
import { Banner } from "../banner/Banner"
import { Experience } from "../experience/Experience"
import { Footer } from "../footer/Footer"
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
            <Footer />
        </HomeWrapper>
    )
}