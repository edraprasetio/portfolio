import { Background } from '../components/hero/background'
import CheckBlue from '../assets/icons/checkRing_blue.svg'

export function Hero() {
    return (
        <section id='hero'>
            <Background>
                This is the hero page <img src={CheckBlue} alt='logo' />
            </Background>
        </section>
    )
}
