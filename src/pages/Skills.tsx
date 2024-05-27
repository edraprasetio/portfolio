import FilterComponent from '../FilterComponent'
import { Background, SkillsHeaderContainer } from '../components/skills'
import lineBlack from '../assets/icons/line_black.svg'
import { H2 } from '../styles/typography'
import aws from '../assets/icons/skills/aws-2.svg'
import azure from '../assets/icons/skills/azure-2.svg'
import c from '../assets/icons/skills/c-1.svg'
import cpp from '../assets/icons/skills/c.svg'
import css from '../assets/icons/skills/css-3.svg'
import django from '../assets/icons/skills/django (1).svg'
import git from '../assets/icons/skills/git-bash.svg'
import go from '../assets/icons/skills/go-6.svg'
import html from '../assets/icons/skills/html-1.svg'
import java from '../assets/icons/skills/java-4.svg'
import javaScript from '../assets/icons/skills/logo-javascript.svg'
import mongodb from '../assets/icons/skills/mongodb-icon-1.svg'
import mysql from '../assets/icons/skills/mysql-icon.svg'
import nodeJS from '../assets/icons/skills/nodejs-1.svg'
import postgress from '../assets/icons/skills/postgresql.svg'
import python from '../assets/icons/skills/python-5.svg'
import r from '../assets/icons/skills/r-lang.svg'
import react from '../assets/icons/skills/react-2.svg'
import typeScript from '../assets/icons/skills/typescript.svg'
import wordPress from '../assets/icons/skills/wordpress-icon.svg'

export function Skills() {
    const items = [
        { id: 1, name: 'AWS', category: 'Development Tools', yearsOfExperience: 0.5, imageUrl: aws },
        { id: 2, name: 'Azure', category: 'Development Tools', yearsOfExperience: 1, imageUrl: azure },
        { id: 3, name: 'C', category: 'Programming Languages', yearsOfExperience: 5, imageUrl: c },
        { id: 4, name: 'C++', category: 'Programming Languages', yearsOfExperience: 1, imageUrl: cpp },
        { id: 5, name: 'CSS', category: 'Development Tools', yearsOfExperience: 2, imageUrl: css },
        { id: 6, name: 'Django', category: 'Development Tools', yearsOfExperience: 3, imageUrl: django },
        { id: 7, name: 'Git', category: 'Development Tools', yearsOfExperience: 5, imageUrl: git },
        { id: 8, name: 'Go', category: 'Programming Languages', yearsOfExperience: 3, imageUrl: go },
        { id: 9, name: 'HTML', category: 'Development Tools', yearsOfExperience: 2, imageUrl: html },
        { id: 10, name: 'Java', category: 'Programming Languages', yearsOfExperience: 5, imageUrl: java },
        { id: 11, name: 'JavaScript', category: 'Programming Languages', yearsOfExperience: 2, imageUrl: javaScript },
        { id: 12, name: 'MongoDB', category: 'Databases', yearsOfExperience: 1, imageUrl: mongodb },
        { id: 13, name: 'MySQL', category: 'Databases', yearsOfExperience: 3, imageUrl: mysql },
        { id: 14, name: 'Node.js', category: 'Development Tools', yearsOfExperience: 2, imageUrl: nodeJS },
        { id: 15, name: 'PostgreSQL', category: 'Databases', yearsOfExperience: 3, imageUrl: postgress },
        { id: 16, name: 'Python', category: 'Programming Languages', yearsOfExperience: 5, imageUrl: python },
        { id: 17, name: 'R', category: 'Programming Languages', yearsOfExperience: 2, imageUrl: r },
        { id: 18, name: 'React', category: 'Development Tools', yearsOfExperience: 2, imageUrl: react },
        { id: 19, name: 'TypeScript', category: 'Programming Languages', yearsOfExperience: 2, imageUrl: typeScript },
        { id: 20, name: 'WordPress', category: 'Development Tools', yearsOfExperience: 0.5, imageUrl: wordPress },
    ]

    return (
        <div>
            <section id='skills'>
                <Background>
                    <SkillsHeaderContainer>
                        <img src={lineBlack} />
                        <H2>SKILLS</H2>
                        <img src={lineBlack} />
                    </SkillsHeaderContainer>
                    <FilterComponent items={items} />
                </Background>
            </section>
        </div>
    )
}
