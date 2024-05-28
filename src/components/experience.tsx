import styled from '@emotion/styled'

export const Background = styled.div`
    width: 100%;
    background-color: ${(props) => props.theme.primaryColor.white[2]};
    color: ${(props) => props.theme.primaryColor.black[1]};
    display: flex;
    flex-direction: column;
    gap: 56px;
    padding-top: 128px;
    padding-bottom: 128px;
    justify-content: center;
    align-items: center;
`

export const HeaderWrapper = styled.div`
    display: flex;
    gap: 8px;
    margin-bottom: 8px;
`

export const CardWrapper = styled.div`
    display: flex;
    gap: 32px;
    @media (max-width: 1420px) {
        flex-direction: column;
        gap: 40px;
    }
`

export const TwoCardsWrapper = styled.div`
    display: flex;
    gap: 32px;
    @media (max-width: ${(props) => props.theme.breakPoints.phone}) {
        flex-direction: column;
        gap: 56px;
    }
`

export const Card = styled.div`
    width: 300px;
    height: 500px;
    background-color: ${(props) => props.theme.primaryColor.white[1]};
    border-radius: 16px;
    padding: 0px 16px 16px;
    gap: 8px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
`

export const CardImageContainer = styled.div`
    width: 100%;
    height: 40%;
    display: flex;
    border-radius: 16px;
    align-items: center;
    justify-content: center;
`

export const CardImage = styled.img`
    width: 100%;
    height: 80%;
    object-fit: cover;
`

export const CardDescription = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`
