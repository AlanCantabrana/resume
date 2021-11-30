import React from 'react'
import { TittleSection } from '../Page/Page.styles'
import {
    SkillsContainer,
    SkillTittle,
    GridContainer,
    ListContainer,
    Divider,
    ListSkills,
} from './Skills.styles'

interface ISkills {
    keySkills: {
        title: string
        language: IListSkills
        libraries: IListSkills
        tools: IListSkills
    }
}

interface IListSkills {
    text: string
    list: string[]
}

interface IRenderList {
    skills: string[]
    type: string
}

const Skills = ({ keySkills }: ISkills) => {
    const { title, language, libraries, tools } = keySkills

    const RenderList = ({ skills, type }: IRenderList) => {
        return (
            <div>
                <ListSkills className={type}>
                    {skills.map((item: string) => (
                        <li key={item}>{item}</li>
                    ))}
                </ListSkills>
            </div>
        )
    }

    return (
        <SkillsContainer>
            <TittleSection>{title}</TittleSection>
            <GridContainer>
                <ListContainer>
                    <Divider />
                    <SkillTittle>{language.text}</SkillTittle>
                    <RenderList skills={language.list} type="language" />
                </ListContainer>
                <ListContainer className="libraries">
                    <Divider />
                    <SkillTittle>{libraries.text}</SkillTittle>
                    <RenderList skills={libraries.list} type="libraries" />
                </ListContainer>
                <ListContainer>
                    <Divider />
                    <SkillTittle>{tools.text}</SkillTittle>
                    <RenderList skills={tools.list} type="tools" />
                </ListContainer>
            </GridContainer>
        </SkillsContainer>
    )
}

export default Skills
