import styled from '@emotion/styled'
import { ClearButton, NavButton, OrangeButton } from './button'
import { HeaderLink } from './link'
import { useEffect, useState } from 'react'
import { H1, H2, Header16, Header20 } from '../../styles/typography'
import { scrollToSection } from '../../utils'
import closeIcon from '../../assets/icons/menuCloseBlue.svg'
import menuIcon from '../../assets/icons/menuOpenBlue.svg'
import nameLogo from '../../assets/logos/edraPrasetioLogo1.2.png'

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
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: transparent;
    padding: 16px 256px;
    position: absolute;
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
    color: #1a73e8;
    gap: 32px;
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
    z-index: 5;
    height: 100vh;
    gap: 64px;
    width: 100%;
    align-items: center;
    padding-top: 256px;
    overflow-y: hidden;
    @media (min-width: ${(props) => props.theme.breakPoints.miniTablet}) {
        display: none;
    }
`

const LogoWrapper = styled.img`
    width: 64px;
    height: 64px;
`

export function NavBar() {
    let menu
    const [hasShadow, setHasShadow] = useState(false)
    const [showMenu, setShowMenu] = useState(false)

    useEffect(() => {
        const setVh = () => {
            const vh = window.innerHeight * 0.01
            document.documentElement.style.setProperty('--vh', `${vh}px`)
        }

        setVh()
        window.addEventListener('resize', setVh)
        return () => window.removeEventListener('resize', setVh)
    }, [])

    useEffect(() => {
        if (showMenu) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }

        // Clean up if component unmounts
        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [showMenu])

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
                <HeaderLink to='/' onClick={() => handleMenuClick('hero')}>
                    <NavButton>
                        <Header20>Home</Header20>
                    </NavButton>
                </HeaderLink>
                <HeaderLink to='#projects' onClick={() => handleMenuClick('projects')}>
                    <NavButton>
                        <Header20>Projects</Header20>
                    </NavButton>
                </HeaderLink>
                <HeaderLink to='#about' onClick={() => handleMenuClick('about')}>
                    <NavButton>
                        <Header20>About</Header20>
                    </NavButton>
                </HeaderLink>
                <HeaderLink to='#contact' onClick={() => handleMenuClick('contact')}>
                    <NavButton>
                        <Header20>Contact</Header20>
                    </NavButton>
                </HeaderLink>
            </OpenMenu>
        )
    }

    return (
        <StickyContainer>
            <NavWrapper className={hasShadow ? 'displayShadow' : ''}>
                <HeaderLink to='/' onClick={() => scrollToSection('hero')}>
                    <LogoWrapper src={nameLogo} />
                </HeaderLink>
                <LinkWrapper>
                    <HeaderLink to='/' onClick={() => scrollToSection('hero')}>
                        <NavButton>
                            <Header20>Home</Header20>
                        </NavButton>
                    </HeaderLink>
                    <HeaderLink to='#projects' onClick={() => scrollToSection('projects')}>
                        <NavButton>
                            <Header20>Projects</Header20>
                        </NavButton>
                    </HeaderLink>

                    <HeaderLink to='#about' onClick={() => scrollToSection('about')}>
                        <NavButton>
                            <Header20>About</Header20>
                        </NavButton>
                    </HeaderLink>

                    <HeaderLink to='#contact' onClick={() => scrollToSection('contact')}>
                        <OrangeButton>
                            <Header20>Contact</Header20>
                        </OrangeButton>
                    </HeaderLink>
                </LinkWrapper>
                <StyledMenuIcon src={showMenu ? closeIcon : menuIcon} onClick={() => setShowMenu(!showMenu)} />
            </NavWrapper>
            {menu}
        </StickyContainer>
    )
}
