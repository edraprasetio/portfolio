import line from '../assets/icons/line_black.svg'
import {
    Bubble,
    BubbleWrapper,
    CardContainer,
    DescriptionWrapper,
    HeaderWrapper,
    LogoWrapper,
    ProjectCard,
    ProjectLink,
    ProjectLinkWithHover,
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
    H4,
    H5,
    Header24,
    Header40,
    Paragraph14,
    Paragraph16,
} from '../styles/typography'
import project1 from '../assets/logos/project1_logo.svg'
import project2 from '../assets/logos/project2_logo.svg'
import project3 from '../assets/logos/project3_logo.svg'
import project4 from '../assets/logos/project4_logo.svg'

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

                <CardContainer>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '32px',
                        }}
                    >
                        <ProjectCard>
                            <LogoWrapper src={project1} />
                            <DescriptionWrapper>
                                <Header24>Secure Messaging App</Header24>
                                <Paragraph16 style={{ color: '#8181AA' }}>
                                    Developing a secure messaging app with
                                    end-to-end encryption to ensure private and
                                    tamper-proof communication.
                                </Paragraph16>
                                <BubbleWrapper>
                                    <Bubble>
                                        <Paragraph14>React</Paragraph14>
                                    </Bubble>
                                    <Bubble>
                                        <Paragraph14>Go</Paragraph14>
                                    </Bubble>
                                    <Bubble>
                                        <Paragraph14>MongoDB</Paragraph14>
                                    </Bubble>
                                    <Bubble>
                                        <Paragraph14>RSA</Paragraph14>
                                    </Bubble>
                                </BubbleWrapper>
                                <ProjectLinkWithHover
                                    to='https://github.com/edraprasetio/messeji'
                                    label='Source Code'
                                />
                            </DescriptionWrapper>
                        </ProjectCard>

                        <ProjectCard>
                            <LogoWrapper src={project2} />
                            <DescriptionWrapper>
                                <Header24>Mobile Card Game</Header24>
                                <Paragraph16 style={{ color: '#8181AA' }}>
                                    Built a card game for iOS using Swift as a
                                    fun way to explore new programming languages
                                    and mobile development.
                                </Paragraph16>
                                <BubbleWrapper>
                                    <Bubble>
                                        <Paragraph14>Swift</Paragraph14>
                                    </Bubble>
                                    <Bubble>
                                        <Paragraph14>iOS</Paragraph14>
                                    </Bubble>
                                </BubbleWrapper>
                                <ProjectLinkWithHover
                                    to='https://github.com/edraprasetio/warCardGame'
                                    label='Source Code'
                                />
                            </DescriptionWrapper>
                        </ProjectCard>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '32px',
                        }}
                    >
                        <ProjectCard>
                            <LogoWrapper src={project3} />
                            <DescriptionWrapper>
                                <Header24>INSO Systems</Header24>
                                <Paragraph16 style={{ color: '#8181AA' }}>
                                    Co-founded a startup to design and build
                                    modern, responsive websites for local
                                    businesses using React and Firebase.
                                </Paragraph16>
                                <BubbleWrapper>
                                    <Bubble>
                                        <Paragraph14>React</Paragraph14>
                                    </Bubble>
                                    <Bubble>
                                        <Paragraph14>Firebase</Paragraph14>
                                    </Bubble>
                                    <Bubble>
                                        <Paragraph14>Figma</Paragraph14>
                                    </Bubble>
                                </BubbleWrapper>
                                <ProjectLinkWithHover
                                    to='https://morganebbett.com/'
                                    label='View Client Site'
                                />
                            </DescriptionWrapper>
                        </ProjectCard>

                        <ProjectCard>
                            <LogoWrapper src={project4} />
                            <DescriptionWrapper>
                                <Header24>Capstone Scheduler App</Header24>
                                <Paragraph16 style={{ color: '#8181AA' }}>
                                    Led a team of frontend developers to build a
                                    scheduling app that helps professors request
                                    and manage their preferred teaching
                                    schedules each semester.
                                </Paragraph16>
                                <BubbleWrapper>
                                    <Bubble>
                                        <Paragraph14>React</Paragraph14>
                                    </Bubble>
                                    <Bubble>
                                        <Paragraph14>Go</Paragraph14>
                                    </Bubble>
                                    <Bubble>
                                        <Paragraph14>Python</Paragraph14>
                                    </Bubble>
                                    <Bubble>
                                        <Paragraph14>MongoDB</Paragraph14>
                                    </Bubble>
                                </BubbleWrapper>
                                <ProjectLinkWithHover
                                    to='https://github.com/SENG-499-Company2-B01/Frontend'
                                    label='Source Code'
                                />
                            </DescriptionWrapper>
                        </ProjectCard>
                    </div>
                </CardContainer>
            </Background>
        </section>
    )
}
