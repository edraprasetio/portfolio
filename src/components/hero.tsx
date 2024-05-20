import styled from '@emotion/styled'

export const Background = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${(props) => props.theme.primaryColor.white[2]};
    display: flex;
    flex-direction: column;
    margin-top: -80px;
    gap: 32px;
    justify-content: center;
    align-items: center;
`