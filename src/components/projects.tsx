import styled from '@emotion/styled'
import { SimpleLink } from './atoms/link'

export const Background = styled.div`
    width: 100%;
    background-color: ${(props) => props.theme.primaryColor.white[2]};
    display: flex;
    flex-direction: column;
    gap: 56px;
    padding-top: 64px;
    padding-bottom: 64px;
    justify-content: center;
    align-items: center;
`
export const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
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

export const ProjectCard = styled.div`
    background-color: ${(props) => props.theme.primaryColor.white[2]};
    width: 446px;
    height: 202px;
    display: flex;
    border-radius: 16px;
    padding: 16px;
    border: 2px solid transparent;
    align-items: center;
    gap: 32px;

    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
    transition: border 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        border: 2px solid #a6d4ff; /* Light blue */
        box-shadow: 0 6px 12px 0 rgba(0, 155, 255, 0.2),
            0 8px 24px 0 rgba(0, 155, 255, 0.2);
    }
`

export const LogoWrapper = styled.img`
    width: 96px;
    height: 96px;
`
export const DescriptionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    color: ${(props) => props.theme.primaryColor.blue[3]};
`
