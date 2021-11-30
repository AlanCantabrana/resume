import React from 'react'
import { PageContainer, PageContent } from './Page.styles'
import data from '../../Data/Data'
import Summary from '../Summary/Summary'
import Skills from '../Skills/Skills'
import WorkExperience from '../WorkExperience/WorkExperience'
import Education from '../Education/Education'
import Certifications from '../Certifications/Certifications'
const Page = () => {
    return (
        <>
            <PageContainer>
                <PageContent>
                    <Summary summary={data.summary} contact={data.contact} />
                    <Skills keySkills={data.keySkills} />
                    <WorkExperience workExperience={data.workExperience} />
                    <Education education={data.education} />
                    <Certifications
                        certifications={data.certificates}
                        personalSkills={data.personalSkills}
                    />
                </PageContent>
            </PageContainer>
        </>
    )
}

export default Page
