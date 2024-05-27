import styled from '@emotion/styled'

export const Background = styled.div`
    width: 100%;
    background-color: ${(props) => props.theme.primaryColor.beige[1]};
    display: flex;
    flex-direction: column;
    gap: 32px;
    padding-top: 96px;
    padding-bottom: 128px;
    justify-content: center;
    align-items: center;
`

export const SkillsHeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    color: ${(props) => props.theme.primaryColor.black[1]};
    gap: 8px;
`
