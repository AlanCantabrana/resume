import styled from 'styled-components'

const SkillsContainer = styled.section`
    display: flex;
    flex-direction: column;
`

const GridContainer = styled.div`
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(4, 1fr);
`

const ListContainer = styled.div`
    &.libraries {
        grid-column: 2/4;
    }
`

const Divider = styled.hr`
    border: none;
    border-top: #979797 2px solid;
    height: 2px;
    margin-top: 7px;
    margin-bottom: 15px;
`

const SkillTittle = styled.h1`
    font-size: 30px;
    font-weight: 400;
    margin: 10px 0px;
    display: flex;
    justify-content: center;
`
const ListSkills = styled.ul`
    margin: 10px 0px;

    &.libraries {
        margin: 10px 20px;
        display: grid;
        grid-template-columns: 1fr 1fr;

        li {
            margin: 0px 10px;
        }
    }
`

export {
    SkillsContainer,
    SkillTittle,
    GridContainer,
    ListContainer,
    Divider,
    ListSkills,
}
