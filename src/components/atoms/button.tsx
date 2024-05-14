import styled from '@emotion/styled'

export const WhiteButton = styled.button`
    padding: 0px 24px;
    border: 2px solid rgba(0, 0, 0, 0);
    border-radius: 36px;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 550;
    text-transform: uppercase;
    color: black;
    line-height: 29.26px;
    letter-spacing: 10%;
    transition: border-color 0.3s ease;
    &:hover {
        border-color: black;
    }
    &:active {
        color: white;
        background-color: black;
    }
`
