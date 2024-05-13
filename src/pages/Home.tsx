import { NavBar } from '../components/atoms/header'
import { HomeBackground } from '../components/home/background'

export const Home = () => {
    return (
        <div>
            <NavBar />
            <HomeBackground>My own website, or is it?</HomeBackground>
        </div>
    )
}
