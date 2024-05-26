import CheckBlack from '../assets/icons/checkRing_black.svg'
import { Background, CheckContentHeader, CheckMainHeader, HeroMainHeader, HeroNameHeader, HeroSocials, HeroSocialsWrapper, ImageContainer, ImageWrapper } from '../components/hero'
import EdraImg from '../assets/images/edra_square.png'
import GitHubBlack from '../assets/icons/github_black.svg'
import LinkedInBlack from '../assets/icons/linkedIn_black.svg'
import { H1, H3 } from '../styles/typography'
import { BlueButton } from '../components/atoms/button'
import { scrollToSection } from '../utils'
import { SimpleLink } from '../components/atoms/link'

export function Hero() {
    return (
        <section id='hero'>
            <Background>
                <HeroMainHeader>
                    <HeroNameHeader>
                        <H1>HELLO, I AM</H1>
                        <H3 style={{ color: '#404040' }}>EDRA PRASETIO</H3>
                    </HeroNameHeader>

                    <HeroNameHeader>
                        <H3>
                            A <span style={{ color: '#4D7CF6' }}>WEB DEVELOPER</span>
                        </H3>
                        <H3>BASED IN VICTORIA, BC</H3>
                    </HeroNameHeader>

                    <CheckMainHeader>
                        <CheckContentHeader>
                            <img src={CheckBlack} />
                            <H1>DESIGN</H1>
                        </CheckContentHeader>
                        <CheckContentHeader>
                            <img src={CheckBlack} />
                            <H1>DEVELOPMENT</H1>
                        </CheckContentHeader>
                    </CheckMainHeader>

                    <BlueButton style={{ marginTop: '4px' }} onClick={() => scrollToSection('contact')}>
                        <H1>COME HAVE A CHAT</H1>
                    </BlueButton>
                </HeroMainHeader>

                <ImageContainer>
                    <ImageWrapper src={EdraImg} />
                    <HeroSocialsWrapper>
                        <SimpleLink to='https://github.com/edraprasetio' target='_blank' rel='noopener noreferrer'>
                            <HeroSocials src={GitHubBlack} />
                        </SimpleLink>
                        <SimpleLink to='https://www.linkedin.com/in/edra-prasetio-aa22721b1/' target='_blank' rel='noopener noreferrer'>
                            <HeroSocials src={LinkedInBlack} />
                        </SimpleLink>
                    </HeroSocialsWrapper>
                </ImageContainer>
            </Background>
        </section>
    )
}
