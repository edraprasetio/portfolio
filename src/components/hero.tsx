import styled from '@emotion/styled'

export const Background = styled.div`
    width: 100%;
    background-color: ${(props) => props.theme.primaryColor.white[2]};
    display: flex;
    flex-direction: row;
    gap: 128px;
    padding-top: 96px;
    padding-bottom: 64px;
    justify-content: center;
    align-items: center;
    @media (max-width: ${(props) => props.theme.breakPoints.miniTablet}) {
        flex-direction: column;
        gap: 56px;
        padding-bottom: 96px;
    }
`

const HeroHeader = styled.div`
    display: flex;
    flex-direction: column;
    color: ${(props) => props.theme.primaryColor.grey[1]};
`

export const HeroMainHeader = styled(HeroHeader)`
    gap: 16px;
    @media (max-width: ${(props) => props.theme.breakPoints.miniTablet}) {
        justify-content: center;
        align-items: center;
    }
`

export const HeroNameHeader = styled(HeroHeader)`
    gap: 4px;
    @media (max-width: ${(props) => props.theme.breakPoints.miniTablet}) {
        justify-content: center;
        align-items: center;
    }
`

export const CheckMainHeader = styled.div`
    display: flex;
    margin-top: 4px;
    fled-direction: row;
    gap: 32px;
`

export const CheckContentHeader = styled(CheckMainHeader)`
    font-weight: 700;
    gap: 8px;
`

export const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
`

export const ImageWrapper = styled.img`
    width: 320px;
    height: 320px;
    border-radius: 50%;
`

export const HeroSocialsWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 32px;
`

export const HeroSocials = styled.img`
    width: 32px;
    height: 32px;
`
