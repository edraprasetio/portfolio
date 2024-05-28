import { Background, Card, CardDescription, CardImage, CardImageContainer, CardWrapper, HeaderWrapper, TwoCardsWrapper } from '../components/experience'
import { H1, H2, H4, H5 } from '../styles/typography'
import lineBlack from '../assets/icons/line_black.svg'
import assembly from '../assets/logos/assembly.png'
import inspire from '../assets/logos/inspire.png'
import lgl from '../assets/logos/lgl.png'
import redbrick from '../assets/logos/inspireRedbrick.png'

export function Experience() {
    return (
        <div>
            <section id='experience'>
                <Background>
                    <HeaderWrapper>
                        <img src={lineBlack} />
                        WORK EXPERIENCE <img src={lineBlack} />
                    </HeaderWrapper>

                    <CardWrapper>
                        <TwoCardsWrapper>
                            <Card>
                                <CardImageContainer>
                                    <CardImage src={assembly} />
                                </CardImageContainer>
                                <CardDescription>
                                    <H5>Assembly Digital Media</H5>
                                    <H1 style={{ fontSize: '14px', color: '#666464' }}>Developer Co-Op</H1>
                                    <H4>Developed full stack applications for 10+ assets using React and MySQL. Deployed projects on AWS and wrote regression test suites with Jest to ensure code quality and reliability.</H4>
                                </CardDescription>
                            </Card>
                            <Card>
                                <CardImageContainer>
                                    <CardImage src={lgl} />
                                </CardImageContainer>
                                <CardDescription>
                                    <H5>LGL Limited</H5>
                                    <H1 style={{ fontSize: '14px', color: '#666464' }}>IT Co-Op</H1>
                                    <H4>Developed a data collection web application using the R Shiny library. Implemented data filtering and manipulation features to generate comprehensive reports.</H4>
                                </CardDescription>
                            </Card>
                        </TwoCardsWrapper>
                        <TwoCardsWrapper>
                            <Card>
                                <CardImageContainer>
                                    <CardImage src={redbrick} />
                                </CardImageContainer>
                                <CardDescription>
                                    <H5>Inspire and Redbrick</H5>
                                    <H1 style={{ fontSize: '14px', color: '#666464' }}>Full-Stack Developer Co-Op</H1>
                                    <H4>In partnership with Redbrick, collaborated with a team of computer science students on full stack development using React and Django. Developed an application that tracks the carbon footprint of web browsing.</H4>
                                </CardDescription>
                            </Card>
                            <Card>
                                <CardImageContainer>
                                    <CardImage src={inspire} />
                                </CardImageContainer>
                                <CardDescription>
                                    <H5>Inspire</H5>
                                    <H1 style={{ fontSize: '14px', color: '#666464' }}>Apprentice Garage Member Co-Op</H1>
                                    <H4>
                                        Managed Inspire{'\u0027'}s website using Squarespace. Edited footage for Inspire{'\u0027'}s podcast and conference videos for social media.
                                    </H4>
                                </CardDescription>
                            </Card>
                        </TwoCardsWrapper>
                    </CardWrapper>
                </Background>
            </section>
        </div>
    )
}
