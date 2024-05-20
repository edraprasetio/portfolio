import styled from '@emotion/styled'
import { WhiteButton } from './button'
import { HeaderLink } from './link'
import { useEffect, useState } from 'react'

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

    @media (max-width: 424px) {
        padding: 32px 16px;
    }
    @media (max-width: 584px) {
        padding: 32px 12px;
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
`

export function NavBar() {
    const [hasShadow, setHasShadow] = useState(false)

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

    const scrollToSection = (id: string) => {
        if (id === 'home') {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        } else {
            const section = document.getElementById(id)
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' })
            }
        }
    }

    return (
        <StickyContainer>
            <NavWrapper className={hasShadow ? 'displayShadow' : ''}>
                <HeaderLink to='/' onClick={() => scrollToSection('hero')}>
                    <div>Logo</div>
                </HeaderLink>
                <LinkWrapper>
                    <HeaderLink to='#about' onClick={() => scrollToSection('about')}>
                        <WhiteButton>About</WhiteButton>
                    </HeaderLink>

                    <HeaderLink to='#skills' onClick={() => scrollToSection('skills')}>
                        <WhiteButton>Skills</WhiteButton>
                    </HeaderLink>

                    <HeaderLink to='#experience' onClick={() => scrollToSection('experience')}>
                        <WhiteButton>Experience</WhiteButton>
                    </HeaderLink>

                    <HeaderLink to='#contact' onClick={() => scrollToSection('contact')}>
                        <WhiteButton>contact</WhiteButton>
                    </HeaderLink>
                </LinkWrapper>
            </NavWrapper>
        </StickyContainer>
    )
}
