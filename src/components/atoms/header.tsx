import styled from '@emotion/styled'
import { ClearButton } from './button'
import { HeaderLink } from './link'
import { useEffect, useState } from 'react'
import { H1, H2 } from '../../styles/typography'
import { scrollToSection } from '../../utils'
import closeIcon from '../../assets/icons/menuClose.svg'
import menuIcon from '../../assets/icons/menuOpen.svg'

// Container that makes all of it's contents stick to the top of the viewport
const StickyContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: sticky;
    top: 0;
    z-index: 10;
`
// Styling for NavWrapper
const NavWrapper = styled.nav`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: transparent;
    padding: 16px 256px;
    position: sticky;
    top: 0;
    z-index: 10;
    transition: all 0.3s;

    @media (max-width: ${(props) => props.theme.breakPoints.largePhone}) {
        padding: 16px 128px;
    }

    @media (max-width: ${(props) => props.theme.breakPoints.phone}) {
        padding: 16px 32px;
    }

    &:hover {
        background-color: ${(props) => props.theme.primaryColor.white[2]};
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    }

    &.displayShadow {
        background-color: ${(props) => props.theme.primaryColor.white[2]};
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    }
`

const LinkWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 16px;
    @media (max-width: ${(props) => props.theme.breakPoints.miniTablet}) {
        display: none;
    }
`

const StyledMenuIcon = styled.img`
    display: flex;
    width: 48px;
    height: 48px;
    margin-left: 35px;
    @media (min-width: ${(props) => props.theme.breakPoints.miniTablet}) {
        display: none;
    }
`

const OpenMenu = styled.div`
    display: flex;
    background-color: ${(props) => props.theme.primaryColor.white[2]};
    flex-direction: column;
    align-items: center;
    z-index: 10;
    height: 90vh;
    gap: 32px;
    width: 100%;
    align-items: center;
    padding-top: 128px;
    overflow-y: hidden;
    @media (min-width: ${(props) => props.theme.breakPoints.miniTablet}) {
        display: none;
    }
`

const LogoWrapper = styled.div`
    color: ${(props) => props.theme.primaryColor.black[1]};
`

export function NavBar() {
    let menu
    const [hasShadow, setHasShadow] = useState(false)
    const [showMenu, setShowMenu] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                // Adjust this value based on when you want the shadow to appear
                setHasShadow(true)
            } else {
                setHasShadow(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const handleMenuClick = (id: string) => {
        setShowMenu(false)
        setTimeout(() => {
            scrollToSection(id)
        }, 0)
    }

    if (showMenu) {
        menu = (
            <OpenMenu>
                <HeaderLink to='#about' onClick={() => handleMenuClick('about')}>
                    <ClearButton>
                        <H1>About</H1>
                    </ClearButton>
                </HeaderLink>

                <HeaderLink to='#skills' onClick={() => handleMenuClick('skills')}>
                    <ClearButton>
                        <H1>Skills</H1>
                    </ClearButton>
                </HeaderLink>

                <HeaderLink to='#experience' onClick={() => handleMenuClick('experience')}>
                    <ClearButton>
                        <H1>Experience</H1>
                    </ClearButton>
                </HeaderLink>

                <HeaderLink to='#contact' onClick={() => handleMenuClick('contact')}>
                    <ClearButton>
                        <H1>Contact</H1>
                    </ClearButton>
                </HeaderLink>
            </OpenMenu>
        )
    }

    return (
        <StickyContainer>
            <NavWrapper className={hasShadow ? 'displayShadow' : ''}>
                <HeaderLink to='/' onClick={() => scrollToSection('hero')}>
                    <LogoWrapper>
                        <H2>Edra</H2>
                    </LogoWrapper>
                </HeaderLink>
                <LinkWrapper>
                    <HeaderLink to='#about' onClick={() => scrollToSection('about')}>
                        <ClearButton>
                            <H1>About</H1>
                        </ClearButton>
                    </HeaderLink>

                    <HeaderLink to='#skills' onClick={() => scrollToSection('skills')}>
                        <ClearButton>
                            <H1>Skills</H1>
                        </ClearButton>
                    </HeaderLink>

                    <HeaderLink to='#experience' onClick={() => scrollToSection('experience')}>
                        <ClearButton>
                            <H1>Experience</H1>
                        </ClearButton>
                    </HeaderLink>

                    <HeaderLink to='#contact' onClick={() => scrollToSection('contact')}>
                        <ClearButton>
                            <H1>Contact</H1>
                        </ClearButton>
                    </HeaderLink>
                </LinkWrapper>
                <StyledMenuIcon src={showMenu ? closeIcon : menuIcon} onClick={() => setShowMenu(!showMenu)} />
            </NavWrapper>
            {menu}
        </StickyContainer>
    )
}
