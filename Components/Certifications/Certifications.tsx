import React from 'react'
import { TittleSection } from '../Page/Page.styles'
import { CertificationContainer, ContentWrapper } from './Certifications.styles'

interface ICertifications {
    certifications: {
        title: string
        list: ICertiList[]
    }

    personalSkills: {
        title: string
        list: string[]
    }
}

interface ICertiList {
    name: string
    provider: string
}

const Certifications = ({
    certifications,
    personalSkills,
}: ICertifications) => {
    return (
        <CertificationContainer>
            <ContentWrapper>
                <TittleSection>{personalSkills.title}</TittleSection>
                <ul>
                    {personalSkills.list.map((item: string) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </ContentWrapper>
            <ContentWrapper>
                <TittleSection>{certifications.title}</TittleSection>
                <ul>
                    {certifications.list.map(
                        ({ name, provider }: ICertiList) => (
                            <li key={name}>{`${name} - ${provider}`}</li>
                        )
                    )}
                </ul>
            </ContentWrapper>
        </CertificationContainer>
    )
}

export default Certifications
