import styled from '@emotion/styled'
import { WhiteButton } from './button'

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
    background-color: white;
    padding: 16px 24px;
    position: sticky;
    top: 0;
    z-index: 10;
    @media (max-width: 424px) {
        padding: 32px 16px;
    }
    @media (max-width: 584px) {
        padding: 32px 12px;
    }
`

const LinkWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 16px;
`
export function NavBar() {
    return (
        <StickyContainer>
            <NavWrapper>
                <LinkWrapper>
                    <WhiteButton>About</WhiteButton>
                    <WhiteButton>About</WhiteButton>
                    <WhiteButton>About</WhiteButton>
                </LinkWrapper>
            </NavWrapper>
        </StickyContainer>
    )
}
