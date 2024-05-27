import React, { useState, useEffect } from 'react'
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
    const [displayedItems, setDisplayedItems] = useState<Item[]>(items)
    const [itemsToRemove, setItemsToRemove] = useState<Set<number>>(new Set())

    useEffect(() => {
        const filteredItems = selectedCategory === 'All' ? items : items.filter((item) => item.category === selectedCategory)

        const itemsToFadeOut = displayedItems.filter((item) => !filteredItems.includes(item))

        setItemsToRemove(new Set(itemsToFadeOut.map((item) => item.id)))

        const timeout = setTimeout(() => {
            setDisplayedItems(filteredItems)
            setItemsToRemove(new Set())
        }, 500) // Duration should match fade-out animation duration

        return () => clearTimeout(timeout)
    }, [selectedCategory, items])

    const handleFilterChange = (category: string) => {
        setSelectedCategory(category)
    }

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
                {displayedItems.map((item) => (
                    <Item key={item.id} className={itemsToRemove.has(item.id) ? 'fade-out' : 'fade-in'}>
                        <ItemImage src={item.imageUrl} alt={item.name} />
                        <ItemInfo>
                            <ItemName>{item.name}</ItemName>
                            <Experience>{item.yearsOfExperience}+ Years of Experience</Experience>
                        </ItemInfo>
                    </Item>
                ))}
            </ItemList>
        </Container>
    )
}

// Styled Components using Emotion
const Container = styled.div`
    padding: 20px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const CategoryContainer = styled.div`
    display: flex;
    justify-content: center;
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

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(10px);
  }
`

const ItemList = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    justify-content: center;
    width: 100%;
`

const Item = styled.div`
    padding: 10px;
    background-color: ${(props) => props.theme.primaryColor.white[1]};
    border-radius: 5px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    &.fade-in {
        opacity: 0;
        animation: ${fadeIn} 0.5s forwards;
    }
    &.fade-out {
        opacity: 1;
        animation: ${fadeOut} 0.5s forwards;
    }
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
