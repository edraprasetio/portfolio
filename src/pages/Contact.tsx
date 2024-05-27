import React from 'react'
import { Background, EmailButton, HeaderWrapper } from '../components/contact'
import lineWhite from '../assets/icons/line_white.svg'
import { H1, H2, H3 } from '../styles/typography'
import { SimpleLink } from '../components/atoms/link'

export function Contact() {
    return (
        <section id='contact'>
            <Background>
                <HeaderWrapper>
                    <img src={lineWhite} />
                    <H2>CONTACT ME</H2>
                    <img src={lineWhite} />
                </HeaderWrapper>
                <H3 style={{ maxWidth: '800px' }}>Any Type of Questions & Discussions.</H3>
                <SimpleLink to={`mailto:${'edraadrianp@gmail.com'}`}>
                    <EmailButton>
                        <H1>EMAIL ME</H1>
                    </EmailButton>
                </SimpleLink>
            </Background>
        </section>
    )
}
