import { AboutSocials, AboutSocialsWrapper, Background, ContentWrapper, HeaderWrapper, LeftContainer, MainWrapper, RightContainer } from '../components/about'
import { H1, H2, H3, H4 } from '../styles/typography'
import lineWhite from '../assets/icons/line_white.svg'
import { SimpleLink } from '../components/atoms/link'
import { WhiteButton } from '../components/atoms/button'
import { scrollToSection } from '../utils'
import GitHubWhite from '../assets/icons/github_white.svg'
import LinkedInWhite from '../assets/icons/linkedIn_white.svg'

export function About() {
    return (
        <div>
            <section id='about'>
                <Background>
                    <MainWrapper>
                        <HeaderWrapper>
                            <H2>ABOUT ME</H2> <img src={lineWhite} />
                        </HeaderWrapper>
                        <ContentWrapper>
                            <LeftContainer>
                                <H4 style={{ maxWidth: '500px' }}>
                                    Hi there! I{'\u0027'}m Edra, a recent Software Engineering graduate from the University of Victoria. During my time at university, I had the chance to lead a capstone project with a fantastic team of fellow students, which really helped me sharpen my leadership
                                    and project management skills. I also completed co-op programs at{' '}
                                    <SimpleLink to='https://assmb.ly/' target='_blank' rel='noopener noreferrer'>
                                        <span style={{ color: '#6590FF' }}>Assembly</span>
                                    </SimpleLink>{' '}
                                    and{' '}
                                    <SimpleLink to='https://www.rdbrck.com/' target='_blank' rel='noopener noreferrer'>
                                        <span style={{ color: '#6590FF' }}>Redbrick</span>
                                    </SimpleLink>
                                    , where I got hands-on experience with industry-standard software development, especially in{' '}
                                    <SimpleLink to='https://react.dev/' target='_blank' rel='noopener noreferrer'>
                                        <span style={{ color: '#6590FF' }}>React</span>
                                    </SimpleLink>
                                    .
                                </H4>
                                <H4 style={{ maxWidth: '500px' }}>
                                    In addition to my co-op work, I developed my UI/UX design skills through personal projects with friends in a team called INSO. We had a blast designing and building websites for local companies in Victoria, BC. I{'\u0027'}m adaptable and resourceful, and I know
                                    when to ask for help, which makes me a good communicator and a great team player. I love working in collaborative environments and am always eager to learn and grow in the field of software engineering.
                                </H4>
                            </LeftContainer>
                            <RightContainer>
                                <H3 style={{ maxWidth: '500px' }}>Any Type of Questions & Discussions.</H3>
                                <WhiteButton>
                                    <H1 onClick={() => scrollToSection('contact')}>LET{'\u0027'}S TALK WITH ME</H1>
                                </WhiteButton>
                                <AboutSocialsWrapper>
                                    <SimpleLink to='https://github.com/edraprasetio' target='_blank' rel='noopener noreferrer'>
                                        <AboutSocials src={GitHubWhite} />
                                    </SimpleLink>
                                    <SimpleLink to='https://www.linkedin.com/in/edra-prasetio-aa22721b1/' target='_blank' rel='noopener noreferrer'>
                                        <AboutSocials src={LinkedInWhite} />
                                    </SimpleLink>
                                </AboutSocialsWrapper>
                            </RightContainer>
                        </ContentWrapper>
                    </MainWrapper>
                </Background>
            </section>
        </div>
    )
}
