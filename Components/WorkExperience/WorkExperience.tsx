import React from 'react'
import Link from 'next/link'
import { TittleSection } from '../Page/Page.styles'
import {
    WorkContainer,
    WorkWrapper,
    JobTitle,
    CompanyName,
    JobDescription,
    JobTitleContainer,
} from './WorkExperience.styles'

interface IWorkExperience {
    workExperience: {
        title: string
        list: IJobsList[]
    }
}

interface IJobsList {
    jobTitle: string
    company: string
    date: {
        start: string
        end: string
    }
    url: string
    description: string[]
}

const WorkExperience = ({ workExperience }: IWorkExperience) => {
    return (
        <WorkContainer>
            <TittleSection>{workExperience.title}</TittleSection>
            {workExperience.list.map((list: IJobsList) => (
                <WorkWrapper key={list.jobTitle}>
                    <JobTitleContainer>
                        <JobTitle>{list.jobTitle}</JobTitle>
                        <JobTitle>{`${list.date.start} - ${list.date.end}`}</JobTitle>
                    </JobTitleContainer>
                    <CompanyName>
                        <Link href={list.url || '/'}>
                            <a target="_blank">{list.company}</a>
                        </Link>
                    </CompanyName>
                    <JobDescription>
                        {list.description.map((item: string) => (
                            <li key={item}>{item}</li>
                        ))}
                    </JobDescription>
                </WorkWrapper>
            ))}
        </WorkContainer>
    )
}

export default WorkExperience
