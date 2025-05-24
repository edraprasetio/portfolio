import styled from '@emotion/styled'
import { SimpleLink } from './atoms/link'
import { useState } from 'react'
import { Paragraph16 } from '../styles/typography'
import linkBlue from '../assets/logos/link-blue.svg'
import linkOrange from '../assets/logos/link-orange.svg'

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
        box-shadow: 0 6px 12px 0 rgba(0, 155, 255, 0.2), 0 8px 24px 0 rgba(0, 155, 255, 0.2);
    }
`

export const CardContainer = styled.div`
    display: flex;
    gap: 32px;
    @media (max-width: ${(props) => props.theme.breakPoints.miniTablet}) {
        flex-direction: column;
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

export const BubbleWrapper = styled.div`
    display: flex;
    gap: 8px;
`

export const Bubble = styled.div`
    display: flex;
    padding: 4px 8px;
    background-color: #eaf8fb;
    border-radius: 36px;
`
export const ProjectLink = styled(SimpleLink)`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 4px;
    color: #309bff;
    transition: color 0.3s ease, gap 0.3s ease;
    &:hover {
        gap: 8px;
        color: ${(props) => props.theme.primaryColor.orange[1]};
    }
`

interface ProjectLinkWithHoverProps {
    to: string
    label: string
}

export const ProjectLinkWithHover = ({ to, label }: ProjectLinkWithHoverProps) => {
    const [isHovered, setIsHovered] = useState(false)
    return (
        <ProjectLink
            to={to}
            target='_blank'
            rel='noopener noreferrer'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Paragraph16>{label}</Paragraph16>
            <img src={isHovered ? linkOrange : linkBlue} alt='link icon' />
        </ProjectLink>
    )
}
