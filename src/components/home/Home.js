import { Banner } from "../banner/Banner"
import { Experience } from "../experience/Experience"
import { HomeWrapper } from "./styles"

export const Home = () => {
    return (
        <HomeWrapper>
            <Banner />
            <Experience />
        </HomeWrapper>
    )
}