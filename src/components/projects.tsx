import styled from '@emotion/styled'
import { SimpleLink } from './atoms/link'

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
export const HeaderWrapper = styled.div`
    display: flex;
    gap: 8px;
    margin-bottom: 8px;
`

export const ImageContainer = styled.img`
    width: 640px;
    border-radius: 20px;
    @media (max-width: ${(props) => props.theme.breakPoints.largePhone}) {
        width: 300px;
    }
`

export const ProjectWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    max-width: 640px;
    @media (max-width: ${(props) => props.theme.breakPoints.largePhone}) {
        width: 300px;
        justify-content: center;
        align-items: center;
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
export const SkillsContainer = styled.div`
    display: flex;
    gap: 8px;
`

export const SiteLinks = styled(SimpleLink)`
    display: flex;
    justify-content: center;
    color: ${(props) => props.theme.primaryColor.white[1]};
`
