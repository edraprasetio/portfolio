import React, { useState } from 'react'
import { Background, EmailButton, HeaderWrapper } from '../components/contact'
import lineBlack from '../assets/icons/line_black.svg'
import { H1, H2, H3, H4, H5 } from '../styles/typography'
import { SimpleLink } from '../components/atoms/link'
import { BlackButton } from '../components/atoms/button'
import styled from '@emotion/styled'

const EmailLink = styled(SimpleLink)`
    color: ${(props) => props.theme.primaryColor.black[1]};

    &:hover {
        color: ${(props) => props.theme.primaryColor.blue[2]};
    }
`

export function Contact() {
    const [showEmail, setShowEmail] = useState(false)
    return (
        <section id='contact'>
            <Background>
                <HeaderWrapper>
                    <img src={lineBlack} />
                    <H2>CONTACT</H2>
                    <img src={lineBlack} />
                </HeaderWrapper>
                <H3 style={{ maxWidth: '800px' }}>Any Type of Questions & Discussions.</H3>
                <H4 style={{ maxWidth: '512px', padding: '0px 32px' }}>
                    Feel free to reach out if you think we{'\u0027'}d be a great fit! Whether you{'\u0027'}re looking to collaborate on a project or just want to have a conversation, the best way to contact me is via email. Looking forward to connecting! Cheers!
                </H4>

                {showEmail ? (
                    <EmailLink to={`mailto:${'edraadrianp@gmail.com'}`}>
                        <H5>edraadrianp@gmail.com</H5>
                    </EmailLink>
                ) : (
                    <BlackButton onClick={() => setShowEmail(true)}>
                        <H1>SHOW EMAIL</H1>
                    </BlackButton>
                )}
            </Background>
        </section>
    )
}
