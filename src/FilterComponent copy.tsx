import React, { useState } from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import { H1 } from './styles/typography'

interface Item {
    id: number
    name: string
    category: string
    yearsOfExperience: number
    imageUrl: string
}

interface FilterComponentProps {
    items: Item[]
}

const categories = ['All', 'Programming Languages', 'Development Tools', 'Databases']

const FilterComponent: React.FC<FilterComponentProps> = ({ items }) => {
    const [selectedCategory, setSelectedCategory] = useState<string>('All')

    const handleFilterChange = (category: string) => {
        setSelectedCategory(category)
    }

    const filteredItems = selectedCategory === 'All' ? items : items.filter((item) => item.category === selectedCategory)

    return (
        <Container>
            <CategoryContainer>
                {categories.map((category) => (
                    <CategoryButton key={category} isSelected={category === selectedCategory} onClick={() => handleFilterChange(category)}>
                        <H1 style={{ fontSize: '14px' }}>{category}</H1>
                    </CategoryButton>
                ))}
            </CategoryContainer>
            <ItemList>
                {filteredItems.map((item) => (
                    <Item key={item.id} className='fade-in'>
                        <ItemImage src={item.imageUrl} alt={item.name} />
                        <ItemInfo>
                            <ItemName>{item.name}</ItemName>
                            <Experience>{item.yearsOfExperience}+ Years</Experience>
                        </ItemInfo>
                    </Item>
                ))}
            </ItemList>
        </Container>
    )
}

// Styled Components using Emotion
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    margin: 0 auto;
`

const CategoryContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
    gap: 16px;
`

const CategoryButton = styled.button<{ isSelected: boolean }>`
    background-color: ${(props) => (props.isSelected ? props.theme.primaryColor.white[1] : props.theme.primaryColor.black[1])};
    color: ${(props) => (props.isSelected ? props.theme.primaryColor.black[1] : props.theme.primaryColor.white[1])};
    border: none;
    border-radius: 36px;
    padding: 8px 24px;
    cursor: pointer;
    text-transform: uppercase;
    transition: border-color 0.3s ease;

    &:hover {
        background-color: ${(props) => (props.isSelected ? props.theme.primaryColor.white[3] : props.theme.primaryColor.grey[1])};
    }

    &:active {
        background-color: ${(props) => (props.isSelected ? props.theme.primaryColor.black[1] : props.theme.primaryColor.white[1])};
        color: ${(props) => (props.isSelected ? props.theme.primaryColor.white[1] : props.theme.primaryColor.black[1])};
    }
`

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const ItemList = styled.div`
    column-gap: 0px;
    display: grid;
    grid-template-columns: repeat(2, 320px);
    flex-direction: column;
`

const Item = styled.div`
    width: 240px;
    padding: 10px;
    background-color: ${(props) => props.theme.primaryColor.white[1]};
    border-radius: 5px;
    margin-bottom: 10px;
    display: flex;
    gap: 32px;
    animation: ${fadeIn} 0.5s forwards;
`

const ItemImage = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
`

const ItemInfo = styled.div`
    display: flex;
    flex-direction: column;
`

const ItemName = styled.div`
    font-weight: bold;
`

const Experience = styled.div`
    color: #555;
`

export default FilterComponent
