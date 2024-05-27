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

    @media (max-width: 424px) {
        padding: 32px 16px;
    }
    @media (max-width: 584px) {
        padding: 32px 12px;
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
`

const LogoWrapper = styled.div`
    color: ${(props) => props.theme.primaryColor.white[1]};
`

const SocialWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 16px;
`

const AddressWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export function Footer() {
    return (
        <NavWrapper>
            <AddressWrapper>
                <HeaderLink to='/' onClick={() => scrollToSection('hero')}>
                    <LogoWrapper>
                        <H2>Edra Prasetio</H2>
                    </LogoWrapper>
                </HeaderLink>
                <H1 style={{ fontSize: '14px' }}>VICTORIA, BC</H1>
                <H1 style={{ fontSize: '14px' }}>CANADA</H1>
            </AddressWrapper>

            <RightWrapper>
                <LinkWrapper>
                    <HeaderLink to='#about' onClick={() => scrollToSection('about')}>
                        <H4 style={{ color: '#FFFFFF' }}>About</H4>
                    </HeaderLink>

                    <HeaderLink to='#skills' onClick={() => scrollToSection('skills')}>
                        <H4 style={{ color: '#FFFFFF' }}>Skills</H4>
                    </HeaderLink>

                    <HeaderLink to='#experience' onClick={() => scrollToSection('experience')}>
                        <H4 style={{ color: '#FFFFFF' }}>Experience</H4>
                    </HeaderLink>

                    <HeaderLink to='#contact' onClick={() => scrollToSection('contact')}>
                        <H4 style={{ color: '#FFFFFF' }}>Contact</H4>
                    </HeaderLink>
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
