import FilterComponent from '../FilterComponent'
import { Background, SkillsHeaderContainer } from '../components/skills'
import lineBlack from '../assets/icons/line_black.svg'
import { H2 } from '../styles/typography'

export function Skills() {
    const items = [
        { id: 1, name: 'JavaScript', category: 'Programming Languages', yearsOfExperience: 5, imageUrl: 'https://via.placeholder.com/50' },
        { id: 2, name: 'TypeScript', category: 'Programming Languages', yearsOfExperience: 3, imageUrl: 'https://via.placeholder.com/50' },
        { id: 3, name: 'React', category: 'Development Tools', yearsOfExperience: 4, imageUrl: 'https://via.placeholder.com/50' },
        { id: 4, name: 'Node.js', category: 'Development Tools', yearsOfExperience: 5, imageUrl: 'https://via.placeholder.com/50' },
        { id: 5, name: 'MongoDB', category: 'Databases', yearsOfExperience: 2, imageUrl: 'https://via.placeholder.com/50' },
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
