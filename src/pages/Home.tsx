import { NavBar } from '../components/atoms/header'
import { About } from './About'
import { Contact } from './Contact'
import { Experience } from './Experience'
import { Hero } from './Hero'
import { Skills } from './Skills'

export const Home = () => {
    return (
        <div>
            <NavBar />
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Contact />
        </div>
    )
}
