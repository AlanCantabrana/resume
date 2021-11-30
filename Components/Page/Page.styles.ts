import styled from 'styled-components'

const PageContainer = styled.div`
    width: 26.25cm;
    min-height: 29.7cm;
    margin: 0 auto;
    padding: 20px 30px;
    display: flex;
    color: rgba(0, 0, 0, 0.8);
    background-color: #fff;
`

const PageContent = styled.div`
    margin: 0 auto;
`

const TittleSection = styled.h1`
    font-size: 30px;
    font-weight: 500;
    margin: 10px 0px;
    color: rgb(27, 131, 223);
`
export { PageContainer, PageContent, TittleSection }
