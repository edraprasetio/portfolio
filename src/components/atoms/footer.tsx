import styled from '@emotion/styled'
import { HeaderLink, SimpleLink } from './link'

import { H1, H2, H4 } from '../../styles/typography'
import { scrollToSection } from '../../utils'
import { HeroSocials } from '../hero'
import linkedInWhite from '../../assets/icons/linkedIn_white.svg'
import gitHubWhite from '../../assets/icons/github_white.svg'

const NavWrapper = styled.nav`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${(props) => props.theme.primaryColor.black[1]};
    color: ${(props) => props.theme.primaryColor.white[3]};
    padding: 40px 256px;
    top: 0;
    z-index: 10;
    transition: all 0.3s;

    @media (max-width: ${(props) => props.theme.breakPoints.largePhone}) {
        padding: 128px 32px;
        flex-direction: column;
        gap: 32px;
    }

    @media (max-width: ${(props) => props.theme.breakPoints.phone}) {
        padding: 128px 32px;
    }
`

const LinkWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

const RightWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 32px;
    @media (max-width: ${(props) => props.theme.breakPoints.largePhone}) {
        flex-direction: column;
        text-align: center;
        gap: 32px;
    }
`

const LogoWrapper = styled.div``

const SocialWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 16px;
    justify-content: center;
`

const AddressWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    @media (max-width: ${(props) => props.theme.breakPoints.largePhone}) {
        text-align: center;
        gap: 16px;
    }
`

const FooterLink = styled(HeaderLink)`
    color: ${(props) => props.theme.primaryColor.white[1]};
    &:hover {
        color: ${(props) => props.theme.primaryColor.blue[2]};
    }
`

export function Footer() {
    return (
        <NavWrapper>
            <AddressWrapper>
                <FooterLink to='/' onClick={() => scrollToSection('hero')}>
                    <H2>Edra Prasetio</H2>
                </FooterLink>
                <H1 style={{ fontSize: '14px' }}>VICTORIA, BC</H1>
                <H1 style={{ fontSize: '14px' }}>CANADA</H1>
            </AddressWrapper>

            <RightWrapper>
                <LinkWrapper>
                    <FooterLink to='#about' onClick={() => scrollToSection('about')}>
                        <H4>About</H4>
                    </FooterLink>

                    <FooterLink to='#skills' onClick={() => scrollToSection('skills')}>
                        <H4>Skills</H4>
                    </FooterLink>

                    <FooterLink to='#experience' onClick={() => scrollToSection('experience')}>
                        <H4>Experience</H4>
                    </FooterLink>

                    <FooterLink to='#contact' onClick={() => scrollToSection('contact')}>
                        <H4>Contact</H4>
                    </FooterLink>
                </LinkWrapper>
                <LinkWrapper>
                    <H4>SOCIALS</H4>
                    <SocialWrapper>
                        <SimpleLink to='https://github.com/edraprasetio' target='_blank' rel='noopener noreferrer'>
                            <HeroSocials src={gitHubWhite} />
                        </SimpleLink>
                        <SimpleLink to='https://www.linkedin.com/in/edra-prasetio-aa22721b1/' target='_blank' rel='noopener noreferrer'>
                            <HeroSocials src={linkedInWhite} />
                        </SimpleLink>
                    </SocialWrapper>
                </LinkWrapper>
            </RightWrapper>
        </NavWrapper>
    )
}
