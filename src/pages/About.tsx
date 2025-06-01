import {
    Background,
    BottomRightImage,
    HeaderWrapper,
    LeftContainer,
    RightContainer,
    TopLeftImage,
} from '../components/about'
import { Header16, Header24, Header32, Paragraph16 } from '../styles/typography'
import { SimpleLink } from '../components/atoms/link'
import styled from '@emotion/styled'
import { BlueButton, OrangeButton } from '../components/atoms/button'
import ResumeDoc from '../assets/files/Resume_EdraPrasetio.pdf'
import topLeftImg from '../assets/images/topLeftImgLarge.svg'
import bottomRightImg from '../assets/images/hopspan_screenshot1.1.png'

const CompanyLink = styled(SimpleLink)`
    color: ${(props) => props.theme.primaryColor.blue[3]};
    font-family: MonaSans-SemiBold;
    font-size: 16px;
    line-height: unset;
    transition: color 0.3s ease;

    &:hover {
        color: ${(props) => props.theme.primaryColor.orange[1]};
    }
`

export function About() {
    return (
        <div>
            <section id='about'>
                <Background>
                    <LeftContainer>
                        <TopLeftImage src={topLeftImg} />
                        <BottomRightImage src={bottomRightImg} />
                    </LeftContainer>
                    <RightContainer style={{ maxWidth: '500px' }}>
                        <HeaderWrapper>
                            <Header24 style={{ color: '#1A73E8' }}>About Me</Header24>
                            <Header32 style={{ color: '#FFB74D' }}>Turning Ideas into Real-World Software</Header32>
                        </HeaderWrapper>
                        <Paragraph16 style={{ color: '#8181AA' }}>
                            I’m a full-stack developer with a strong focus on building practical, user-focused
                            applications. My background in software engineering helps me create systems that are not
                            only functional, but reliable and secure.
                            <br />
                            <br /> I care deeply about clear design, thoughtful architecture, and writing code that
                            solves real problems. I’ve built secure messaging apps, scheduling tools, and websites for
                            local businesses. At <CompanyLink to='https://www.rdbrck.com/'>Redbrick</CompanyLink>, I
                            helped develop a carbon calculator app, and at{' '}
                            <CompanyLink to='https://assmb.ly/'>Assembly</CompanyLink>, I worked on tools for managing
                            digital media assets. Whether I’m collaborating with a team or building something on my own,
                            I aim to deliver work that’s both efficient and meaningful.
                        </Paragraph16>

                        <a href={ResumeDoc} download='EdraPrasetioResume' style={{ textDecoration: 'none' }}>
                            <BlueButton style={{ width: '240px', marginTop: '8px' }}>
                                <Header16>Download Resume</Header16>
                            </BlueButton>
                        </a>
                    </RightContainer>
                </Background>
            </section>
        </div>
    )
}
