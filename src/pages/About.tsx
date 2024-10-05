import { Background, EducationContent, HeaderWrapper, LeftContainer, RightContainer } from '../components/about'
import { H1, H2, H4 } from '../styles/typography'
import lineBlack from '../assets/icons/line_black.svg'
import { SimpleLink } from '../components/atoms/link'
import styled from '@emotion/styled'

const CompanyLink = styled(SimpleLink)`
    color: ${(props) => props.theme.primaryColor.black[1]};

    &:hover {
        color: ${(props) => props.theme.primaryColor.blue[2]};
    }
`

export function About() {
    return (
        <div>
            <section id='about'>
                <Background>
                    <LeftContainer style={{ maxWidth: '500px' }}>
                        <HeaderWrapper>
                            <H2>ABOUT ME</H2> <img src={lineBlack} />
                        </HeaderWrapper>
                        <H4>
                            Hi there! I{'\u0027'}m Edra, a Software Engineer based in Victoria. During my time at university, I had the chance to lead a capstone project with a fantastic team of fellow students, which really helped me sharpen my leadership and project management skills. I also
                            completed co-op programs at{' '}
                            <CompanyLink to='https://assmb.ly/' target='_blank' rel='noopener noreferrer'>
                                <span>Assembly</span>
                            </CompanyLink>{' '}
                            and{' '}
                            <CompanyLink to='https://www.rdbrck.com/' target='_blank' rel='noopener noreferrer'>
                                <span>Redbrick</span>
                            </CompanyLink>
                            , where I got hands-on experience with industry-standard software development.
                        </H4>
                        <H4>
                            In addition to my co-op work, I developed my UI/UX design skills through personal projects with friends in a team called INSO. We had a blast designing and building websites for local companies in Victoria, BC. I{'\u0027'}m adaptable and resourceful, and I know when to
                            ask for help, which makes me a good communicator and a great team player. I love working in collaborative environments and am always eager to learn and grow in the field of software engineering.
                        </H4>
                    </LeftContainer>
                    <RightContainer style={{ maxWidth: '500px' }}>
                        <HeaderWrapper>
                            <H2>EDUCATION</H2> <img src={lineBlack} />
                        </HeaderWrapper>
                        <EducationContent>
                            <H1>UNIVERSITY OF VICTORIA</H1>
                            <H4>Bachelor of Software Engineering</H4>
                        </EducationContent>
                        <EducationContent>
                            <H1>CAMOSUN COLLEGE</H1>
                            <H4>Engineering Transfer Certificate</H4>
                        </EducationContent>
                    </RightContainer>
                </Background>
            </section>
        </div>
    )
}
