import line from '../assets/icons/line_black.svg'
import {
    DescriptionWrapper,
    HeaderWrapper,
    LogoWrapper,
    ProjectCard,
} from '../components/projects'
import {
    Background,
    ImageContainer,
    ProjectWrapper,
    Skill,
    SkillsContainer,
} from '../components/projects'
import {
    H1,
    H2,
    H4,
    H5,
    Header24,
    Header40,
    Paragraph14,
} from '../styles/typography'
import greenspace from '../assets/images/greenspace.png'
import morganEbbett from '../assets/images/morgan_ebbett.png'
import { SimpleLink } from '../components/atoms/link'
import { BlackButton } from '../components/atoms/button'
import project1 from '../assets/logos/project1_logo.svg'

export function Projects() {
    return (
        <section id='projects'>
            <Background>
                <HeaderWrapper>
                    <Header24 style={{ color: '#1A73E8' }}>
                        My Projects
                    </Header24>
                    <Header40 style={{ color: '#FFB74D' }}>
                        Things I Love to Tinker With
                    </Header40>
                </HeaderWrapper>

                <ProjectCard>
                    <LogoWrapper src={project1} />
                    <DescriptionWrapper>
                        <Header24>Secure Messaging App</Header24>
                        <Paragraph14 style={{ color: '#8181AA' }}>
                            Developing a secure messaging app with end-to-end
                            encryption to ensure private and tamper-proof
                            communication.
                        </Paragraph14>
                    </DescriptionWrapper>
                </ProjectCard>

                <ProjectWrapper>
                    <H5>Greenspace Designs</H5>
                    <SkillsContainer>
                        <Skill>
                            <H1>React</H1>
                        </Skill>
                        <Skill>
                            <H1>Firebase</H1>
                        </Skill>
                        <Skill>
                            <H1>Figma</H1>
                        </Skill>
                    </SkillsContainer>
                    <ImageContainer src={greenspace} />
                    <H4>
                        At INSO Systems, we developed a dynamic website for
                        Greenspace Designs, a landscaping company. Using React
                        and Firebase, the site showcases their full range of
                        services, highlights their goals, and features a
                        portfolio of completed projects. Designed in Figma, the
                        website offers a clean and visually appealing experience
                        that reflects the company{'\u0027'}s commitment to
                        quality and creativity in landscape design.
                    </H4>
                    <SimpleLink
                        to='https://greenspace-designs.web.app/'
                        target='_blank'
                        rel='noopener noreferrer'
                        style={{ width: '160px' }}
                    >
                        <BlackButton style={{ width: '160px' }}>
                            <H4>Visit Site</H4>
                        </BlackButton>
                    </SimpleLink>
                </ProjectWrapper>
            </Background>
        </section>
    )
}
