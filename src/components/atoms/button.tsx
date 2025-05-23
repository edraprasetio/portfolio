import styled from '@emotion/styled'

const BaseButton = styled.button`
    padding: 0px 24px;
    border-radius: 36px;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    line-height: 29.26px;
    transition: border-color 0.3s ease;
`

export const ClearButton = styled(BaseButton)`
    border: 3px solid rgba(0, 0, 0, 0);
    background-color: transparent;
    color: ${(props) => props.theme.primaryColor.black[1]};
    &:hover {
        border-color: ${(props) => props.theme.primaryColor.black[1]};
    }
    &:active {
        color: ${(props) => props.theme.primaryColor.white[1]};
        background-color: ${(props) => props.theme.primaryColor.black[1]};
    }
`

export const WhiteButton = styled(BaseButton)`
    width: 240px;
    padding: 4px 24px;
    border: 2px solid ${(props) => props.theme.primaryColor.white[1]};
    background-color: ${(props) => props.theme.primaryColor.white[1]};
    color: ${(props) => props.theme.primaryColor.black[1]};
    &:hover {
        background-color: ${(props) => props.theme.primaryColor.white[3]};
        border: 2px solid ${(props) => props.theme.primaryColor.white[3]};
    }
    &:active {
        background-color: ${(props) => props.theme.primaryColor.black[1]};
        border: 2px solid ${(props) => props.theme.primaryColor.white[1]};
        color: ${(props) => props.theme.primaryColor.white[1]};
    }
`

export const BlackButton = styled(BaseButton)`
    width: 240px;
    padding: 4px 16px;
    border: 3px solid ${(props) => props.theme.primaryColor.black[1]};
    background-color: ${(props) => props.theme.primaryColor.black[1]};
    color: ${(props) => props.theme.primaryColor.white[1]};
    &:hover {
        background-color: ${(props) => props.theme.primaryColor.grey[1]};
    }
    &:active {
        background-color: ${(props) => props.theme.primaryColor.white[1]};
        color: ${(props) => props.theme.primaryColor.black[1]};
    }
`

export const NavButton = styled.div`
    position: relative;
    display: inline-block;
    bottom: -8px;
    color: ${(props) => props.theme.primaryColor.blue[3]};
    text-decoration: none;
    text-transform: unset;

    &::after {
        content: '';
        position: absolute;
        bottom: -4px;
        left: 0;
        width: 0%;
        height: 3px;
        background-color: ${(props) => props.theme.primaryColor.blue[3]};
        transition: width 0.3s ease;
    }

    &:hover::after {
        width: 100%;
    }

    &:active {
        color: ${(props) => props.theme.primaryColor.orange[1]};
    }

    &:active::after {
        background-color: ${(props) => props.theme.primaryColor.orange[1]};
    }
`

export const OrangeButton = styled.div`
    display: flex;
    padding: 8px 32px;
    border-radius: 36px;
    align-items: center;
    justify-content: center;
    border: 3px solid ${(props) => props.theme.primaryColor.orange[1]};
    background-color: ${(props) => props.theme.primaryColor.orange[1]};
    color: ${(props) => props.theme.primaryColor.white[1]};

    transition: background-color 0.3s ease, border-color 0.3s ease,
        color 0.3s ease;
    &:hover {
        border: 3px solid ${(props) => props.theme.primaryColor.blue[3]};
        background-color: ${(props) => props.theme.primaryColor.blue[3]};
    }
    &:active {
        background-color: ${(props) => props.theme.primaryColor.white[1]};
        color: ${(props) => props.theme.primaryColor.blue[3]};
    }
`

export const BlueButton = styled(OrangeButton)`
    border: 3px solid ${(props) => props.theme.primaryColor.blue[3]};
    background-color: ${(props) => props.theme.primaryColor.blue[3]};
    &:hover {
        border: 3px solid ${(props) => props.theme.primaryColor.orange[1]};
        background-color: ${(props) => props.theme.primaryColor.orange[1]};
    }
    &:active {
        background-color: ${(props) => props.theme.primaryColor.white[1]};
        color: ${(props) => props.theme.primaryColor.orange[1]};
    }
`
