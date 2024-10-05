import styled from '@emotion/styled'

export const Background = styled.div`
    width: 100%;
    background-color: ${(props) => props.theme.primaryColor.white[2]};
    color: ${(props) => props.theme.primaryColor.black[1]};
    display: flex;
    flex-direction: column;
    gap: 56px;
    padding-top: 128px;
    padding-bottom: 64px;
    justify-content: center;
    align-items: center;
`

export const Description = styled.div`
    display: flex;
    width: 480px;
    flex-direction: column;
    gap: 16px;
    @media (max-width: ${(props) => props.theme.breakPoints.largePhone}) {
        width: 400px;
    }
    @media (max-width: ${(props) => props.theme.breakPoints.phone}) {
        width: 300px;
    }
`

export const Skill = styled.div`
    padding: 4px 12px;
    border-radius: 20px;
    align-items: center;
    justify-content: center;
    line-height: 29.26px;
    transition: border-color 0.3s ease;
    border: 3px solid rgba(0, 0, 0, 0);
    border-color: ${(props) => props.theme.primaryColor.black[1]};
`

export const SkillsSection = styled.div`
    display: flex;
    gap: 8px;
`

export const SkillsContainer = styled.div`
    display: flex;
    gap: 8px;

    @media (max-width: ${(props) => props.theme.breakPoints.largePhone}) {
        flex-direction: column;
        gap: 8px;
    }
`

export const ExperienceContainer = styled.div`
    display: flex;
    gap: 64px;

    @media (max-width: ${(props) => props.theme.breakPoints.largePhone}) {
        flex-direction: column;
        gap: 16px;
    }
`

export const HeaderWrapper = styled.div`
    display: flex;
    gap: 8px;
    margin-bottom: 8px;
`
