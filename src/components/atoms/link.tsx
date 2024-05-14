import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

/**
 * Link and header link styling components
 */

export const PlainLink = styled(Link)`
    font-size: 18px;
    line-height: 32px;
    text-align: left;
    color: #000000;
    text-decoration: none;
    border-bottom: 2px solid #5177b8;
    &:hover {
        color: #5177b8;
        text-decoration: none;
        border-bottom: 2px solid #5177b8;
    }
`

export const HeaderLink = styled(Link)`
    text-transform: uppercase;
    text-decoration: none;
`
