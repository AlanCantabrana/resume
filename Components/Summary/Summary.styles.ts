import styled from 'styled-components'

const SummaryContainer = styled.section`
    display: flex;
    flex-direction: column;
`

const Fullname = styled.h1`
    font-size: 30px;
    margin-bottom: 10px;
    font-weight: 500;
`

const SummaryContent = styled.p`
    margin: 0;
    font-size: 15px;
    margin-bottom: 0;
`

export { SummaryContainer, Fullname, SummaryContent }
