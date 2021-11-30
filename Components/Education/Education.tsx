import React from 'react'
import Link from 'next/link'
import { TittleSection } from '../Page/Page.styles'
import {
    WorkContainer,
    WorkWrapper,
    JobTitle,
    CompanyName,
    JobTitleContainer,
} from '../WorkExperience/WorkExperience.styles'
import { Description } from './Education.styles'

interface IEducation {
    education: {
        title: string
        list: IEduList[]
    }
}

interface IEduList {
    institution: string
    title: string
    description: string
    date: {
        start: string
        end: string
    }
    url: string
}

const Education = ({ education }: IEducation) => {
    return (
        <WorkContainer>
            <TittleSection>{education.title}</TittleSection>
            {education.list.map((list: IEduList) => (
                <WorkWrapper key={list.title}>
                    <JobTitleContainer>
                        <JobTitle>{list.title}</JobTitle>
                        <JobTitle>{`${list.date.start} - ${list.date.end}`}</JobTitle>
                    </JobTitleContainer>
                    <CompanyName>
                        <Link href={list.url || '/'}>
                            <a target="_blank">{list.institution}</a>
                        </Link>
                    </CompanyName>
                    <Description>{list.description}</Description>
                </WorkWrapper>
            ))}
        </WorkContainer>
    )
}

export default Education
