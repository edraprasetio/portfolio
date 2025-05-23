import styled from '@emotion/styled'

export const H1 = styled.div`
    font-family: Inter-SemiBold;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 1px;
`

export const H2 = styled.div`
    font-family: Inter-SemiBold;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`

export const H3 = styled.div`
    font-family: Inter-SemiBold;
    font-size: 32px;
    font-weight: 500;
    letter-spacing: 1px;

    @media (max-width: ${(props) => props.theme.breakPoints.phone}) {
        font-size: 24px;
    }
`

export const H4 = styled.div`
    font-family: Inter-Medium;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 1px;
    line-height: 1.6;
`

export const H5 = styled.div`
    font-family: Inter-Bold;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 1px;
    line-height: 1.6;
`

export const Header16 = styled.div`
    font-family: MonaSans-Medium;
    font-size: 16px;
`

export const Header20 = styled.div`
    font-family: MonaSans-Medium;
    font-size: 20px;
`

export const Header24 = styled.div`
    font-family: MonaSans-SemiBold;
    font-size: 24px;
`

export const Header32 = styled.div`
    font-family: MonaSans-SemiBold;
    font-size: 32px;
`

export const Header40 = styled.div`
    font-family: MonaSans-SemiBold;
    font-size: 40px;
`

export const Header64 = styled.div`
    font-family: MonaSans-SemiBold;
    font-size: 64px;
`
export const Paragraph14 = styled.div`
    font-family: MonaSans-Medium;
    font-size: 14px;
`

export const Paragraph16 = styled.div`
    font-family: MonaSans-Medium;
    font-size: 16px;
`
