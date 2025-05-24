import CheckBlack from '../assets/icons/checkRing_black.svg'
import {
    Background,
    CheckContentHeader,
    CheckMainHeader,
    HeroMainHeader,
    HeroNameHeader,
    HeroSocials,
    HeroSocialsWrapper,
    ImageContainer,
    ImageWrapper,
} from '../components/hero'
import EdraImg from '../assets/images/edra_square.png'
import GitHubBlack from '../assets/icons/github_blue2.svg'
import LinkedInBlack from '../assets/icons/linkedIn_blue2.svg'
import { H1, H3, Header20, Header24, Header64, Paragraph16 } from '../styles/typography'
import { BlackButton, OrangeButton } from '../components/atoms/button'
import { scrollToSection } from '../utils'
import { HeaderLink, SimpleLink } from '../components/atoms/link'
import { Typewriter } from 'react-simple-typewriter'

export function Hero() {
    return (
        <section id='hero'>
            <Background>
                <HeroMainHeader>
                    <HeroNameHeader>
                        <Header24 style={{ color: '#FFB74D' }}>Hello, I Am</Header24>
                        <Header64 style={{ color: '#1a73e8' }}>
                            <Typewriter
                                words={['Edra Prasetio']}
                                loop={true}
                                cursor
                                cursorStyle='|'
                                typeSpeed={120}
                                deleteSpeed={120}
                                delaySpeed={2000}
                            />
                        </Header64>
                    </HeroNameHeader>

                    <HeroNameHeader>
                        <Paragraph16 style={{ color: '#8181AA' }}>
                            Currently building secure, scalable apps - and always learning more
                        </Paragraph16>
                    </HeroNameHeader>

                    <HeaderLink to='#contact' onClick={() => scrollToSection('contact')}>
                        <OrangeButton style={{ width: '200px' }}>
                            <Header20>Let{'\u0027'}s Chat</Header20>
                        </OrangeButton>
                    </HeaderLink>
                </HeroMainHeader>

                <ImageContainer>
                    <ImageWrapper src={EdraImg} />
                    <HeroSocialsWrapper>
                        <SimpleLink to='https://github.com/edraprasetio' target='_blank' rel='noopener noreferrer'>
                            <HeroSocials src={GitHubBlack} />
                        </SimpleLink>
                        <SimpleLink
                            to='https://www.linkedin.com/in/edra-prasetio-aa22721b1/'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <HeroSocials src={LinkedInBlack} />
                        </SimpleLink>
                    </HeroSocialsWrapper>
                </ImageContainer>
            </Background>
        </section>
    )
}
