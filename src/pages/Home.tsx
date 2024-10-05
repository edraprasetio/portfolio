import { Footer } from '../components/atoms/footer'
import { NavBar } from '../components/atoms/header'
import { About } from './About'
import { Contact } from './Contact'
import { Hero } from './Hero'
import { Projects } from './Project'
import { Work } from './Work'

export const Home = () => {
    return (
        <div style={{ backgroundColor: '#F3F3F3' }}>
            <NavBar />
            <Hero />
            <About />
            {/* <Skills /> */}
            <Work />
            <Projects />
            <Contact />
            <Footer />
        </div>
    )
}
