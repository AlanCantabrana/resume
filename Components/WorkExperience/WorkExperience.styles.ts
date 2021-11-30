import styled from 'styled-components'

const WorkContainer = styled.section`
    width: 100%;
`
const WorkWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const JobTitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const JobTitle = styled.h3`
    font-size: 20px;

    font-family: open sans, microsoft jhenghei, sans-serif;
    font-weight: 700;
    letter-spacing: 0;
    margin-top: 0;
    margin-bottom: 10px;
    line-height: 1.5em;
`

const CompanyName = styled.div`
    a {
        font-size: 18px;
        font-weight: 500;
        color: #13ab67;
        text-decoration: none;
        word-wrap: break-word;

        :hover {
            cursor: pointer;
            text-decoration: underline;
        }
    }
`

const JobDescription = styled.ul`
    margin: 10px 0px;
`

export {
    WorkContainer,
    WorkWrapper,
    JobTitleContainer,
    JobTitle,
    CompanyName,
    JobDescription,
}
