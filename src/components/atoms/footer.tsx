import styled from '@emotion/styled'
import { HeaderLink, SimpleLink } from './link'

import { H1, H2, H4, Header16, Header20, Header24 } from '../../styles/typography'
import { scrollToSection } from '../../utils'
import { HeroSocials } from '../hero'
import linkedInWhite from '../../assets/icons/linkedIn_white.svg'
import gitHubWhite from '../../assets/icons/github_white.svg'
import nameLogo from '../../assets/logos/edraPrasetioLogo1.3.png'

const NavWrapper = styled.nav`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${(props) => props.theme.primaryColor.blue[3]};
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
    gap: 64px;
    @media (max-width: ${(props) => props.theme.breakPoints.largePhone}) {
        flex-direction: column;
        text-align: center;
        gap: 32px;
    }
`

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

const FooterLink = styled.div`
    position: relative;
    display: inline-block;
    color: ${(props) => props.theme.primaryColor.white[1]};
    text-decoration: none;
    text-transform: unset;

    &::after {
        content: '';
        position: absolute;
        bottom: -4px;
        left: 0;
        width: 0%;
        height: 2px;
        background-color: ${(props) => props.theme.primaryColor.white[1]};
        transition: width 0.3s ease;
    }

    &:hover::after {
        width: 100%;
    }

    &:active {
        color: ${(props) => props.theme.primaryColor.orange[1]};
    }

    &:active::after {
        background-color: ${(props) => props.theme.primaryColor.orange[1]};
    }
`

export function Footer() {
    return (
        <NavWrapper>
            <AddressWrapper>
                <HeaderLink to='/' onClick={() => scrollToSection('hero')}>
                    <img src={nameLogo} style={{ width: '80px' }} />
                </HeaderLink>
                <Header16 style={{ fontSize: '14px' }}>VICTORIA, BC</Header16>
                <Header16 style={{ fontSize: '14px' }}>CANADA</Header16>
            </AddressWrapper>

            <RightWrapper>
                <LinkWrapper>
                    <HeaderLink to='/' onClick={() => scrollToSection('hero')}>
                        <FooterLink>
                            <Header16>Home</Header16>
                        </FooterLink>
                    </HeaderLink>

                    <HeaderLink to='#about' onClick={() => scrollToSection('about')}>
                        <FooterLink>
                            <Header16>About</Header16>
                        </FooterLink>
                    </HeaderLink>

                    <HeaderLink to='#projects' onClick={() => scrollToSection('projects')}>
                        <FooterLink>
                            <Header16>Projects</Header16>
                        </FooterLink>
                    </HeaderLink>

                    <HeaderLink to='#contact' onClick={() => scrollToSection('contact')}>
                        <FooterLink>
                            <Header16>Contact</Header16>
                        </FooterLink>
                    </HeaderLink>
                </LinkWrapper>
                <LinkWrapper>
                    <H4>SOCIALS</H4>
                    <SocialWrapper>
                        <SimpleLink to='https://github.com/edraprasetio' target='_blank' rel='noopener noreferrer'>
                            <HeroSocials src={gitHubWhite} />
                        </SimpleLink>
                        <SimpleLink
                            to='https://www.linkedin.com/in/edra-prasetio-aa22721b1/'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <HeroSocials src={linkedInWhite} />
                        </SimpleLink>
                    </SocialWrapper>
                </LinkWrapper>
            </RightWrapper>
        </NavWrapper>
    )
}
