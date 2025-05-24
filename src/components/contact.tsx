import styled from '@emotion/styled'
import { WhiteButton } from './atoms/button'

export const Background = styled.div`
    width: 100%;
    background-color: ${(props) => props.theme.primaryColor.white[2]};
    display: flex;
    flex-direction: column;
    gap: 32px;
    padding-top: 64px;
    padding-bottom: 64px;
    justify-content: center;
    align-items: center;
    text-align: center;
`

export const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
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

export const Card = styled.div`
    background-color: ${(props) => props.theme.primaryColor.white[2]};
    display: flex;
    flex-direction: column;
    border-radius: 16px;
    padding: 32px;
    border: 2px solid transparent;
    align-items: center;
    gap: 32px;

    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
`

export const FormContainer = styled.form`
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 16px;
    align-items: center;
`
export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 16px;
`
