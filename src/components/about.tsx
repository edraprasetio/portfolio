import styled from '@emotion/styled'

export const Background = styled.div`
    width: 100%;
    background-color: ${(props) => props.theme.primaryColor.white[3]};
    display: flex;
    flex-direction: row;
    gap: 64px;
    padding-top: 64px;
    padding-bottom: 64px;
    justify-content: center;
    align-items: start;
    @media (max-width: ${(props) => props.theme.breakPoints.miniTablet}) {
        flex-direction: column-reverse;
        gap: 56px;
        align-items: center;
    }

    @media (max-width: ${(props) => props.theme.breakPoints.largePhone}) {
        flex-direction: column-reverse;
        gap: 80px;
        align-items: center;
    }
`

export const LeftContainer = styled.div`
    position: relative;
    width: 382px;
    height: 416px;
    padding-bottom: 168px;
    @media (max-width: ${(props) => props.theme.breakPoints.largePhone}) {
        padding-bottom: 240px;
    }
`

export const TopLeftImage = styled.img`
    position: absolute;
    width: 320px;
    height: 320px;
    top: 0;
    left: 0;
`

export const BottomRightImage = styled.img`
    position: absolute;
    width: 240px;
    height: 240px;
    border-radius: 360px;
    bottom: 0;
    right: 0;
`

export const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    @media (max-width: ${(props) => props.theme.breakPoints.miniTablet}) {
        align-items: center;
        text-align: center;
    }
`

export const RightContainer = styled(LeftContainer)`
    display: flex;
    flex-direction: column;
    color: ${(props) => props.theme.primaryColor.black[1]};
    width: 498px;
    gap: 20px;
    @media (max-width: ${(props) => props.theme.breakPoints.miniTablet}) {
        align-items: center;
    }
    @media (max-width: ${(props) => props.theme.breakPoints.largePhone}) {
        width: unset;
        margin: 0px 16px;
    }
`
