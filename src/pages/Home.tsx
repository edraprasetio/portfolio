import { Footer } from '../components/atoms/footer'
import { NavBar } from '../components/atoms/header'
import { About } from './About'
import { Contact } from './Contact'
import { Experience } from './Experience'
import { Hero } from './Hero'
import { Skills } from './Skills'

export const Home = () => {
    return (
        <div style={{ backgroundColor: '#F3F3F3' }}>
            <NavBar />
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Contact />
            <Footer />
        </div>
    )
}
