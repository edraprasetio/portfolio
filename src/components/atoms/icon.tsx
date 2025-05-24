/* eslint-disable react/prop-types */
import { useState } from 'react'

type HoverIconProps = {
    src1: string
    src2: string
    alt?: string
    size?: string
}

const HoverIcon: React.FC<HoverIconProps> = ({ src1, src2, alt = '', size = 32 }) => {
    const [isHovered, setIsHovered] = useState(false)
    return (
        <img
            src={isHovered ? src2 : src1}
            alt={alt}
            width={size}
            height={size}
            style={{
                transition: 'filter 0.3s ease',
                filter: isHovered ? 'brightness(1.1)' : 'brightness(1)',
                cursor: 'pointer',
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        />
    )
}

export default HoverIcon
