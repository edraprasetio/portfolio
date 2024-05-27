import styled from '@emotion/styled'
import { WhiteButton } from './atoms/button'

export const Background = styled.div`
    width: 100%;
    background-color: ${(props) => props.theme.primaryColor.blue[2]};
    color: ${(props) => props.theme.primaryColor.white[1]};
    display: flex;
    flex-direction: column;
    gap: 32px;
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

export const EmailButton = styled(WhiteButton)`
    width: 240px;
    padding: 4px 24px;
    border: 2px solid ${(props) => props.theme.primaryColor.white[1]};
    background-color: ${(props) => props.theme.primaryColor.white[1]};
    color: ${(props) => props.theme.primaryColor.blue[1]};
    &:hover {
        background-color: ${(props) => props.theme.primaryColor.white[3]};
        border: 2px solid ${(props) => props.theme.primaryColor.white[3]};
    }
    &:active {
        background-color: ${(props) => props.theme.primaryColor.blue[1]};
        border: 2px solid ${(props) => props.theme.primaryColor.white[1]};
        color: ${(props) => props.theme.primaryColor.white[1]};
    }
`
