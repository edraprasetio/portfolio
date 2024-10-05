import { Background, Description, ExperienceContainer, HeaderWrapper, Skill, SkillsContainer, SkillsSection } from '../components/work'
import { H1, H2, H4 } from '../styles/typography'
import line from '../assets/icons/line_black.svg'
import { BlackButton } from '../components/atoms/button'

export function Work() {
    const handleDownload = () => {
        const link = document.createElement('a')
        link.href = 'https://drive.google.com/file/d/1diqUddBYnqDwZcA3iDp1Jb8TG7nFezhw/view?usp=drive_link'
        link.download = 'edraPrasetio_resume.pdf'
        link.click()
    }

    return (
        <section id='experience'>
            <Background>
                <HeaderWrapper>
                    <img src={line} />
                    <H2>MY JOURNEY</H2>
                    <img src={line} />
                </HeaderWrapper>
                <ExperienceContainer>
                    <H1>Jan 2024 - Apr 2024</H1>
                    <Description>
                        <H1>Software Developer @ Assembly Digital Media</H1>
                        <H4>Developed full stack applications for 10+ assets using React and MySQL. Deployed projects on AWS and wrote regression test suites with Jest to ensure code quality and reliability.</H4>
                        <SkillsContainer>
                            <SkillsSection>
                                <Skill>
                                    <H1>TypeScript</H1>
                                </Skill>
                                <Skill>
                                    <H1>WordPress</H1>
                                </Skill>
                            </SkillsSection>
                            <SkillsSection>
                                <Skill>
                                    <H1>SQL</H1>
                                </Skill>
                                <Skill>
                                    <H1>AWS</H1>
                                </Skill>
                            </SkillsSection>
                        </SkillsContainer>
                    </Description>
                </ExperienceContainer>
                <ExperienceContainer>
                    <H1>Sep 2022 - Jan 2024</H1>
                    <Description>
                        <H1>Co-Founder @ INSO Systems</H1>
                        <H4>Developed websites for local businesses in British Columbia using React and Typescript.</H4>
                        <SkillsContainer>
                            <SkillsSection>
                                <Skill>
                                    <H1>TypeScript</H1>
                                </Skill>
                                <Skill>
                                    <H1>Figma</H1>
                                </Skill>
                            </SkillsSection>
                        </SkillsContainer>
                    </Description>
                </ExperienceContainer>
                <ExperienceContainer>
                    <H1>Sep 2023 - Dec 2023</H1>
                    <Description>
                        <H1>IT & Software Developer @ LGL Limited</H1>
                        <H4>Developed data collection web application using R Shiny Library. Implemented data filtering and manipulation to generate reports.</H4>
                        <SkillsContainer>
                            <SkillsSection>
                                <Skill>
                                    <H1>R</H1>
                                </Skill>
                                <Skill>
                                    <H1>CSS</H1>
                                </Skill>
                            </SkillsSection>
                        </SkillsContainer>
                    </Description>
                </ExperienceContainer>
                <ExperienceContainer>
                    <H1>Sep 2022 - Dec 2022</H1>
                    <Description>
                        <H1>IT @ Inspire: STEM for Social Impact</H1>
                        <H4>
                            Managed Inspire{'\u0027'}s website using Squarespace. Edited footage for Inspire{'\u0027'}s podcast and conference videos for social media.
                        </H4>
                        <SkillsContainer>
                            <SkillsSection>
                                <Skill>
                                    <H1>SquareSpace</H1>
                                </Skill>
                                <Skill>
                                    <H1>CSS</H1>
                                </Skill>
                            </SkillsSection>
                        </SkillsContainer>
                    </Description>
                </ExperienceContainer>
                <ExperienceContainer>
                    <H1>May 2022 - Aug 2022</H1>
                    <Description>
                        <H1>Full-Stack Developer @ Redbrick</H1>
                        <H4>Collaborated with a team of computer science students on full-stack development using React and Django. Developed an application that tracks the carbon footprint of web browsing.</H4>
                        <SkillsContainer>
                            <SkillsSection>
                                <Skill>
                                    <H1>TypeScript</H1>
                                </Skill>
                                <Skill>
                                    <H1>Django</H1>
                                </Skill>
                            </SkillsSection>
                            <SkillsSection>
                                <Skill>
                                    <H1>SQL</H1>
                                </Skill>
                            </SkillsSection>
                        </SkillsContainer>
                    </Description>
                </ExperienceContainer>
                <BlackButton onClick={handleDownload}>
                    <H4>Download Resume</H4>
                </BlackButton>
            </Background>
        </section>
    )
}
