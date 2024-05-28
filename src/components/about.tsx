import styled from '@emotion/styled'

export const Background = styled.div`
    width: 100%;
    background-color: ${(props) => props.theme.primaryColor.black[1]};
    color: ${(props) => props.theme.primaryColor.white[1]};
    display: flex;
    flex-direction: row;
    gap: 32px;
    padding-top: 96px;
    padding-bottom: 128px;
    justify-content: center;
    align-items: start;
    @media (max-width: ${(props) => props.theme.breakPoints.largePhone}) {
        flex-direction: column;
        gap: 56px;
        align-items: center;
    }
`
export const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`
export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 40px;
`

export const LeftContainer = styled.div`
    color: ${(props) => props.theme.primaryColor.white[3]};
    display: flex;
    flex-direction: column;
    gap: 16px;
`

export const HeaderWrapper = styled.div`
    color: ${(props) => props.theme.primaryColor.white[1]};
    display: flex;
    gap: 8px;
    margin-bottom: 8px;
`

export const RightContainer = styled(LeftContainer)`
    color: ${(props) => props.theme.primaryColor.white[1]};
    gap: 20px;
`

export const AboutSocialsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 16px;
`

export const AboutSocials = styled.img`
    width: 32px;
    height: 32px;
`

export const EducationContent = styled.div`
    color: ${(props) => props.theme.primaryColor.white[3]};
    display: flex;
    flex-direction: column;
    gap: 8px;
`
