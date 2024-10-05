import line from '../assets/icons/line_black.svg'
import { HeaderWrapper } from '../components/about'
import { Background, ImageContainer, ProjectWrapper, Skill, SkillsContainer } from '../components/projects'
import { H1, H2, H4, H5 } from '../styles/typography'
import greenspace from '../assets/images/greenspace.svg'
import morganEbbett from '../assets/images/morgan_ebbett.svg'
import { SimpleLink } from '../components/atoms/link'
import { BlackButton } from '../components/atoms/button'

export function Projects() {
    return (
        <section id='projects'>
            <Background>
                <HeaderWrapper>
                    <img src={line} />
                    <H2>MY PROJECTS</H2>
                    <img src={line} />
                </HeaderWrapper>

                <ProjectWrapper>
                    <H5>Morgan Ebbett</H5>
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
                    <ImageContainer src={morganEbbett} />
                    <H4>
                        At INSO Systems, we created a sleek, responsive website for Morgan Ebbett, a career counseling service. Built using React for a seamless user experience and Firebase for robust backend support, the site showcases all the services offered by Morgan Ebbett. The design,
                        thoughtfully crafted in Figma, ensures a user-friendly interface that engages visitors and effectively communicates the company{'\u0027'}s offerings.
                    </H4>
                    <SimpleLink to='https://morganebbett.com/' target='_blank' rel='noopener noreferrer' style={{ width: '160px' }}>
                        <BlackButton style={{ width: '160px' }}>
                            <H4>Visit Site</H4>
                        </BlackButton>
                    </SimpleLink>
                </ProjectWrapper>

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
                        At INSO Systems, we developed a dynamic website for Greenspace Designs, a landscaping company. Using React and Firebase, the site showcases their full range of services, highlights their goals, and features a portfolio of completed projects. Designed in Figma, the website
                        offers a clean and visually appealing experience that reflects the company{'\u0027'}s commitment to quality and creativity in landscape design.
                    </H4>
                    <SimpleLink to='https://greenspace-designs.web.app/' target='_blank' rel='noopener noreferrer' style={{ width: '160px' }}>
                        <BlackButton style={{ width: '160px' }}>
                            <H4>Visit Site</H4>
                        </BlackButton>
                    </SimpleLink>
                </ProjectWrapper>
            </Background>
        </section>
    )
}
